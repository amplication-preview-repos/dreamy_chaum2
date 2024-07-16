import * as graphql from "@nestjs/graphql";
import { ServiceListingResolverBase } from "./base/serviceListing.resolver.base";
import { ServiceListing } from "./base/ServiceListing";
import { ServiceListingService } from "./serviceListing.service";

@graphql.Resolver(() => ServiceListing)
export class ServiceListingResolver extends ServiceListingResolverBase {
  constructor(protected readonly service: ServiceListingService) {
    super(service);
  }
}
