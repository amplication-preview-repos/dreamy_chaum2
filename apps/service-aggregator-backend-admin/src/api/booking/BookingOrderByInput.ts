import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  bookingDate?: SortOrder;
  status?: SortOrder;
  userId?: SortOrder;
  serviceListingId?: SortOrder;
};
