import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceListingWhereUniqueInput } from "../serviceListing/ServiceListingWhereUniqueInput";

export type ReviewUpdateInput = {
  rating?: number | null;
  comment?: string | null;
  user?: UserWhereUniqueInput | null;
  serviceListing?: ServiceListingWhereUniqueInput | null;
};
