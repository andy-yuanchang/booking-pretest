export interface FlightInfo {
  FlightDate: string;
  FlightNumber: string;
  AirRouteType: number;
  AirlineID: string;
  DepartureAirportID: string;
  ArrivalAirportID: string;
  ScheduleDepartureTime: string;
  ActualDepartureTime: string;
  EstimatedDepartureTime: string;
  DepartureRemark: string;
  DepartureRemarkEn: string;
  Terminal: string;
  Gate: string;
  Apron: string;
  CodeShare: string;
  IsCargo: boolean;
  AcType: string;
  BaggageClaim: string;
  CheckCounter: string;
  UpdateTime: string;
}

export async function getFlights() {
  const response = await fetch('https://tdx.transportdata.tw/api/basic/v2/Air/FIDS/Airport/Departure/TPE?$orderby=ScheduleDepartureTime&$format=JSON', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const flightsInfo = await response.json()
  console.log(flightsInfo)
  if (response.status >= 400) {
    throw new Error(`Error Code: ${response.status}, ${flightsInfo?.message ?? ''}`)
  }
  return response.json() as unknown as FlightInfo[]
}