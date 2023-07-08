import { Trip } from '@prisma/client';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';

interface Props {
  tripDetail: Trip;
}

export default function TripHeader({ tripDetail }: Props) {
  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full">
        <Image
          src={tripDetail.coverImage}
          alt={`Image for ${tripDetail.name}`}
          style={{
            objectFit: 'cover',
          }}
          fill
        />
      </div>

      <div className="flex flex-col p-5">
        <h1 className="font-semibold text-xl text-primaryDarker">
          {tripDetail.name}
        </h1>
        <div className="flex items-center gap-1 my-1">
          <ReactCountryFlag countryCode={tripDetail.countryCode} svg />
          <p className="text-xs text-grayPrimary underline">
            {tripDetail.location}
          </p>
        </div>
        <p className="text-xs text-grayPrimary">
          <span className="text-primary font-medium">
            ${tripDetail.pricePerDay / 100}{' '}
          </span>
          per day
        </p>
      </div>
    </div>
  );
}
