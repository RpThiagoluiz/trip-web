export interface PostReservation {
  startDate: Date;
  endDate: Date;
  tripId: string;
}

export const postReservation = async (payload: PostReservation) => {
  const response = await fetch('http://localhost:3000/api/trips/check', {
    method: 'POST',
    body: Buffer.from(
      JSON.stringify({
        startDate: payload.startDate,
        endDate: payload.endDate,
        tripId: payload.tripId,
      })
    ),
  });

  return await response.json();
};
