import { prisma } from '@/lib/prisma';
import TripHeader from './components/TripHeader';
import TripReservation from './components/TripReservation';
import TripDescription from './components/TripDescription';
import TripHighlights from './components/TripHighlights';
import TripLocation from './components/TripLocation';

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
  const tripDetails = await getTripDetails(params.tripId);

  console.log(tripDetails);

  //TODO: create empty component or error boundary
  if (!tripDetails) return null;

  return (
    <div className="container mx-auto">
      <TripHeader tripDetails={tripDetails} />
      <TripReservation tripDetails={tripDetails} />
      <TripDescription description={tripDetails.description} />
      <TripHighlights highlights={tripDetails.highlights} />
      <TripLocation
        location={tripDetails.location}
        locationDescription={tripDetails.locationDescription}
      />
    </div>
  );
}
