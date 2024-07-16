import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceListingWhereUniqueInput } from "../serviceListing/ServiceListingWhereUniqueInput";

export type BookingCreateInput = {
  bookingDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  serviceListing?: ServiceListingWhereUniqueInput | null;
};
