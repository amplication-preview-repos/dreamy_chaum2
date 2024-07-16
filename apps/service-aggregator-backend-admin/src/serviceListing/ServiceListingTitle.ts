import { ServiceListing as TServiceListing } from "../api/serviceListing/ServiceListing";

export const SERVICELISTING_TITLE_FIELD = "title";

export const ServiceListingTitle = (record: TServiceListing): string => {
  return record.title?.toString() || String(record.id);
};
