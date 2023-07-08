import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import ReactCountryFlag from 'react-country-flag';
import TripHeader from './components/TripHeader';

interface Props {
  params: { tripId: string };
}

async function getTripDetails(tripId: string) {
  // findUnique find in
  return await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });
}

export default async function TripDetails({ params }: Props) {
  const tripDetail = await getTripDetails(params.tripId);

  //TODO: create empty component or error boundary
  if (!tripDetail) return null;

  return (
    <div className="container mx-auto">
      <TripHeader tripDetail={tripDetail} />
    </div>
  );
}
