import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceListingServiceBase } from "./base/serviceListing.service.base";

@Injectable()
export class ServiceListingService extends ServiceListingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
