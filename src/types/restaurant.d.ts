export interface Restaurant {
  RestaurantID: string;
  RestaurantName: string;
  Description: string;
  Address: string;
  ZipCode: string;
  Phone: string;
  OpenTime: string;
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
  Class: string;
  MapUrl: string;
  ParkingInfo: string;
  City: string;
  SrcUpdateTime: string;
  UpdateTime: string;
}