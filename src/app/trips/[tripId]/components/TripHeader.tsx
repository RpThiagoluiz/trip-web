import { Trip } from '@prisma/client';
import Image from 'next/image';
import ReactCountryFlag from 'react-country-flag';

interface Props {
  tripDetails: Trip;
}

export default function TripHeader({ tripDetails }: Props) {
  return (
    <div className="flex flex-col">
      <div className="relative h-[300px] w-full">
        <Image
          src={tripDetails.coverImage}
          alt={`Image for ${tripDetails.name}`}
          style={{
            objectFit: 'cover',
          }}
          fill
        />
      </div>

      <div className="flex flex-col p-5">
        <h1 className="font-semibold text-xl text-primaryDarker">
          {tripDetails.name}
        </h1>
        <div className="flex items-center gap-1 my-1">
          <ReactCountryFlag countryCode={tripDetails.countryCode} svg />
          <p className="text-xs text-grayPrimary underline">
            {tripDetails.location}
          </p>
        </div>
        <p className="text-xs text-grayPrimary">
          <span className="text-primary font-medium">
            ${tripDetails.pricePerDay / 100}{' '}
          </span>
          per day
        </p>
      </div>
    </div>
  );
}
