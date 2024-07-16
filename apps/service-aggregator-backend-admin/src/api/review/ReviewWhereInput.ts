import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceListingWhereUniqueInput } from "../serviceListing/ServiceListingWhereUniqueInput";

export type ReviewWhereInput = {
  id?: StringFilter;
  rating?: IntNullableFilter;
  comment?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  serviceListing?: ServiceListingWhereUniqueInput;
};
