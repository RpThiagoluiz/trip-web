import QuickSearch from "./components/QuickSearch"
import RecommendedTrips from "./components/RecommendedTrips"
import TripSearch from "./components/TripSearch"


export const metadata = {
  title: "Trips"
}

export default function Home() {
  return (
  <>
    <TripSearch />
    <QuickSearch />
    <RecommendedTrips />
    
  </>
  )
}
