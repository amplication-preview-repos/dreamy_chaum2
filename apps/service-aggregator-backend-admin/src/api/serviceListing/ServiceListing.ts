import { Booking } from "../booking/Booking";
import { Review } from "../review/Review";

export type ServiceListing = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  price: number | null;
  provider: string | null;
  description: string | null;
  bookings?: Array<Booking>;
  reviews?: Array<Review>;
};
