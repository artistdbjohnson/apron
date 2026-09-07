import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { JwtAuthGuard } from "./auth";
import { HealthController } from "./health.controller";
import { OpsController } from "./ops.controller";
import { PostgresStore } from "./postgres.store";
import { Store } from "./store";

const JWT_SECRET = process.env.JWT_SECRET ?? "apron-dev-norte-line";

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: "12h" },
    }),
  ],
  controllers: [HealthController, AuthController, OpsController],
  providers: [Store, JwtAuthGuard, PostgresStore],
})
export class AppModule {}
