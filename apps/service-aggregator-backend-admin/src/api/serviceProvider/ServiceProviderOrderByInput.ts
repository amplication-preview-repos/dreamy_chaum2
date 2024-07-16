import { SortOrder } from "../../util/SortOrder";

export type ServiceProviderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  service?: SortOrder;
  rate?: SortOrder;
};
