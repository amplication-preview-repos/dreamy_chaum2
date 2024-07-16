import { ServiceListingWhereInput } from "./ServiceListingWhereInput";
import { ServiceListingOrderByInput } from "./ServiceListingOrderByInput";

export type ServiceListingFindManyArgs = {
  where?: ServiceListingWhereInput;
  orderBy?: Array<ServiceListingOrderByInput>;
  skip?: number;
  take?: number;
};
