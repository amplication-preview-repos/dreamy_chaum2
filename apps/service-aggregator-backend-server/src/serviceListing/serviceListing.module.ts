import { Module } from "@nestjs/common";
import { ServiceListingModuleBase } from "./base/serviceListing.module.base";
import { ServiceListingService } from "./serviceListing.service";
import { ServiceListingController } from "./serviceListing.controller";
import { ServiceListingResolver } from "./serviceListing.resolver";

@Module({
  imports: [ServiceListingModuleBase],
  controllers: [ServiceListingController],
  providers: [ServiceListingService, ServiceListingResolver],
  exports: [ServiceListingService],
})
export class ServiceListingModule {}
