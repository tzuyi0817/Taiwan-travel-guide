export interface Activity {
  ActivityID: string;
  ActivityName: string;
  Description: string;
  Particpation: string;
  Location: string;
  Address: string;
  Phone: string;
  Organizer: string;
  StartTime: string;
  EndTime: string;
  Cycle: string;
  NonCycle: string;
  WebsiteUrl: string;
  Picture: {
    PictureUrl1?: string;
    PictureDescription1?: string;
    PictureUrl2?: string;
    PictureDescription2?: string;
    PictureUrl3?: string;
    PictureDescription3?: string;
  };
  Position: {
    PositionLon: number;
    PositionLat: number;
    GeoHash: string;
  };
  Class1: string;
  Class2: string;
  MapUrl: string;
  TravelInfo: string;
  ParkingInfo: string;
  Charge: string;
  Remarks: string;
  City: string;
  SrcUpdateTime: string;
  UpdateTime: string;
}