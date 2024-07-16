import { BookingUpdateManyWithoutServiceListingsInput } from "./BookingUpdateManyWithoutServiceListingsInput";
import { ReviewUpdateManyWithoutServiceListingsInput } from "./ReviewUpdateManyWithoutServiceListingsInput";

export type ServiceListingUpdateInput = {
  title?: string | null;
  price?: number | null;
  provider?: string | null;
  description?: string | null;
  bookings?: BookingUpdateManyWithoutServiceListingsInput;
  reviews?: ReviewUpdateManyWithoutServiceListingsInput;
};
