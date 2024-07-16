import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ServiceListingWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  price?: FloatNullableFilter;
  provider?: StringNullableFilter;
  description?: StringNullableFilter;
  bookings?: BookingListRelationFilter;
  reviews?: ReviewListRelationFilter;
};
