import { BookingCreateNestedManyWithoutServiceListingsInput } from "./BookingCreateNestedManyWithoutServiceListingsInput";
import { ReviewCreateNestedManyWithoutServiceListingsInput } from "./ReviewCreateNestedManyWithoutServiceListingsInput";

export type ServiceListingCreateInput = {
  title?: string | null;
  price?: number | null;
  provider?: string | null;
  description?: string | null;
  bookings?: BookingCreateNestedManyWithoutServiceListingsInput;
  reviews?: ReviewCreateNestedManyWithoutServiceListingsInput;
};
