import { User } from "../user/User";
import { ServiceListing } from "../serviceListing/ServiceListing";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  bookingDate: Date | null;
  status?: "Option1" | null;
  user?: User | null;
  serviceListing?: ServiceListing | null;
};
