'use client';

import Button from '@/components/Button';
import DatePicker from '@/components/DatePicker';
import Input from '@/components/Input';
import { useRouter } from 'next/navigation';
import { differenceInDays } from 'date-fns';
import { Controller, useForm } from 'react-hook-form';
import { type PostReservation, postReservation } from '../utils/postResevation';
import { MAPPED_ERROS } from '../utils/mappedErros';

interface Props {
  tripId: string;
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

const formatTotalPrice = (
  startDate: Date | null,
  endDate: Date | null,
  tripPricePerDay: number
): string => {
  if (startDate && endDate) {
    const diffInDays = differenceInDays(endDate, startDate);
    return diffInDays > 0
      ? `$${(diffInDays * tripPricePerDay) / 100}`
      : `$${tripPricePerDay / 100}`;
  }

  return '$0';
};

export default function TripReservation({
  tripId,
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

  const router = useRouter();

  //TODO: always when startDate change endDate need to be reset
  // TODO: disable button if fields are empty
  //TODO: add type guardian
  const onSubmit = async (data: TripReservationForm) => {
    if (!data.startDate && !data.endDate) return null;

    const payload: PostReservation = {
      tripId,
      startDate: data.startDate as Date,
      endDate: data.endDate as Date,
    };

    const res = await postReservation(payload);

    if (res?.error?.code) {
      const error = MAPPED_ERROS[res?.error?.code as keyof typeof MAPPED_ERROS];

      if (error.field !== 'bothDate') {
        return setError(error.field, {
          type: 'manual',
          message: error.message,
        });
      } else {
        setError('startDate', {
          type: 'manual',
          message: error.message,
        });

        setError('endDate', {
          type: 'manual',
          message: error.message,
        });

        return;
      }
    }

    router.push(
      `/trips/${tripId}/confirmation?startDate=${data.startDate?.toISOString()}&endDate=${data.endDate?.toISOString()}&guests=${
        data.guests
      }`
    );
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
          {formatTotalPrice(startDate, endDate, tripPricePerDay)}
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
