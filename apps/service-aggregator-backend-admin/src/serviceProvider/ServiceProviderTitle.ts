import { ServiceProvider as TServiceProvider } from "../api/serviceProvider/ServiceProvider";

export const SERVICEPROVIDER_TITLE_FIELD = "firstName";

export const ServiceProviderTitle = (record: TServiceProvider): string => {
  return record.firstName?.toString() || String(record.id);
};
