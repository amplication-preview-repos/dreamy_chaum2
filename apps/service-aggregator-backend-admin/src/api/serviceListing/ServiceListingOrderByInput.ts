import { SortOrder } from "../../util/SortOrder";

export type ServiceListingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  price?: SortOrder;
  provider?: SortOrder;
  description?: SortOrder;
};
