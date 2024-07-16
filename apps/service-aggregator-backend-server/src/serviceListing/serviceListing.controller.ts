import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceListingService } from "./serviceListing.service";
import { ServiceListingControllerBase } from "./base/serviceListing.controller.base";

@swagger.ApiTags("serviceListings")
@common.Controller("serviceListings")
export class ServiceListingController extends ServiceListingControllerBase {
  constructor(protected readonly service: ServiceListingService) {
    super(service);
  }
}
