import { User } from "../user/User";
import { ServiceListing } from "../serviceListing/ServiceListing";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number | null;
  comment: string | null;
  user?: User | null;
  serviceListing?: ServiceListing | null;
};
