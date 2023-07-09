'use client';

import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { differenceInDays } from 'date-fns';
import { Controller, useForm } from 'react-hook-form';

interface Props {
  tripStartDate: Date;
  tripEndDate: Date;
  tripMaxGuests: number;
  tripPricePerDay: number;
}

interface TripReservationForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

export default function TripReservation({
  tripMaxGuests,
  tripPricePerDay,
  tripStartDate,
  tripEndDate,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setError,
  } = useForm<TripReservationForm>();

  const startDate = watch('startDate');
  const endDate = watch('endDate');
  //TODO: always when startDate change endDate need to be reset

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col px-5 ">
      <div className="flex gap-4 ">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: 'Initial date is required.',
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.startDate}
              errorMessage={errors?.startDate?.message}
              onChange={field.onChange}
              selected={field.value}
              placeholderText="Initial Date"
              className="w-full"
              minDate={tripStartDate}
            />
          )}
        />

        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: 'Final date is required.',
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
              onChange={field.onChange}
              selected={field.value}
              placeholderText="Final Date"
              className="w-full"
              maxDate={tripEndDate}
              minDate={startDate ?? tripStartDate}
              disabled={!startDate}
            />
          )}
        />
      </div>
      <Input
        {...register('guests', {
          required: {
            value: true,
            message: 'Number of guests cannot be empty',
          },
          max: {
            value: tripMaxGuests,
            message: `Max number of guests are ${tripMaxGuests}.`,
          },
        })}
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
        className="mt-4"
        placeholder={`Number of Guess (max: ${tripMaxGuests})`}
      />
      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total: </p>
        <p className="font-medium text-sm text-primaryDarker">
          {startDate && endDate
            ? `$${
                (differenceInDays(endDate, startDate) * tripPricePerDay) / 100
              }` ?? 1
            : '$0'}
        </p>
      </div>

      <div className="w-full pb-10 border-b border-grayLighter">
        <Button
          className="mt-3 w-full"
          onClick={() => handleSubmit(onSubmit)()}
        >
          Submit now
        </Button>
      </div>
    </div>
  );
}
