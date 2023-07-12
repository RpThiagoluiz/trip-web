'use client';

import Button from '@/components/Button';
import { Trip } from '@prisma/client';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { toast } from 'react-toastify';

export default function TripConfirmation({
  params,
}: {
  params: { tripId: string };
}) {
  const [trip, setTrip] = useState<Trip | null>();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const router = useRouter();

  const { status, data } = useSession();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrip = async () => {
      const response = await fetch(`/api/trips/check`, {
        method: 'POST',
        body: JSON.stringify({
          tripId: params.tripId,
          startDate: searchParams.get('startDate'),
          endDate: searchParams.get('endDate'),
        }),
      });

      const res = await response.json();

      if (res?.error) {
        // TODO: mapear os erros e informar o usuário antes de mover ele para a tela inicial
        return router.push('/');
      }

      setTrip(res.trip);
      setTotalPrice(res.totalPrice);
    };

    if (status === 'unauthenticated') {
      //TODO: não permitir que o usuário chegue aqui.
      router.push('/');
    }

    fetchTrip();
  }, [status, searchParams, params, router]);

  if (!trip) return null;

  const startDate = new Date(searchParams.get('startDate') as string);
  const endDate = new Date(searchParams.get('endDate') as string);
  const guests = searchParams.get('guests');

  const handleCheckout = async () => {
    const payload = {
      userId: data?.user?.id,
      tripId: params.tripId,
      startDate: searchParams.get('startDate'),
      endDate: searchParams.get('endDate'),
      guests: Number(searchParams.get('guests')),
      totalPaid: totalPrice, //TODO: poderá haver cupom de descontos que irão alterar o valor do totalPrice
    };

    const res = await fetch('http://localhost:3000/api/trips/reservation', {
      method: 'POST',
      body: Buffer.from(JSON.stringify(payload)),
    });

    if (!res.ok) {
      toast.error('Sorry, try again latter!');
      return;
    }

    toast.success('Your trip is reservation, enjoy!', {
      position: 'bottom-center',
    });
    //TODO: mover para a tela das minha viagens
    setTimeout(() => {
      router.push('/');
    }, 350);
  };

  return (
    <div className="container mx-auto p-5 lg:max-w-[600px]">
      <h1 className="font-semibold text-xl text-primaryDarker">Your Trip</h1>

      {/* CARD */}
      <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
        <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">
          <div className="relative h-[106px] w-[124px]">
            <Image
              src={trip.coverImage}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              alt={trip.name}
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl text-primaryDarker font-semibold">
              {trip.name}
            </h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">
                {trip.location}
              </p>
            </div>
          </div>
        </div>

        <h3 className="font-semibold text-lg text-primaryDarker mt-3">
          Price information
        </h3>

        <div className="flex justify-between mt-1">
          <p className="text-primaryDarker">Total:</p>
          <p className="font-medium">${totalPrice / 100}</p>
        </div>
      </div>

      <div className="flex flex-col mt-5 text-primaryDarker">
        <h3 className="font-semibold">Date</h3>
        <div className="flex items-center gap-1 mt-1">
          <p>{format(startDate, 'MM/dd/yy', { locale: enUS })}</p>
          {' until '}
          <p>{format(endDate, 'MM/dd/yy', { locale: enUS })}</p>
        </div>

        <h3 className="font-semibold mt-5">Guests</h3>
        <p>{guests} Guests</p>

        <Button className="mt-5" onClick={handleCheckout}>
          Checkout
        </Button>
      </div>
    </div>
  );
}
