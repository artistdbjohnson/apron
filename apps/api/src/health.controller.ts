import { Controller, Get } from "@nestjs/common";

@Controller()
export class HealthController {
  @Get("health")
  health() {
    return {
      ok: true,
      service: "apron-api",
      operator: "Air Norte",
      feed: "simulated-occ",
      time: new Date().toISOString(),
    };
  }

  @Get("ready")
  ready() {
    return { ready: true };
  }
}
