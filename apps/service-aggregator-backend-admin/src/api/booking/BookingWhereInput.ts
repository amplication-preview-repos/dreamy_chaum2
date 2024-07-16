import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceListingWhereUniqueInput } from "../serviceListing/ServiceListingWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  bookingDate?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
  serviceListing?: ServiceListingWhereUniqueInput;
};
