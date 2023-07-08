'use client';

import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { Trip } from '@prisma/client';

interface Props {
  tripDetails: Trip;
}

export default function TripReservation({ tripDetails }: Props) {
  return (
    <div className="flex flex-col px-5 ">
      <div className="flex gap-4 ">
        <DatePicker
          className="w-full"
          placeholderText="Initial Date"
          onChange={() => {}}
        />
        <DatePicker
          className="w-full"
          placeholderText="Final Date"
          onChange={() => {}}
        />
      </div>
      <Input
        className="mt-4"
        placeholder={`Number of Guess (max: ${tripDetails.maxGuests})`}
      />
      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">
          Total (7 nights):
        </p>
        <p className="font-medium text-sm text-primaryDarker">$ 2500</p>
      </div>

      <div className="w-full pb-10 border-b border-grayLighter">
        <Button className="mt-3 w-full">Submit now</Button>
      </div>
    </div>
  );
}
