import { FlightInfo, getFlights } from '@/api/flights'
import { useQuery } from '@tanstack/react-query'

export function useFlightsQuery() {
  return useQuery<FlightInfo[], Error, FlightInfo[]>({
    queryKey: ['flights'],
    queryFn: getFlights,
  })
}