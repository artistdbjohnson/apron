import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix("api");
  app.enableCors({ origin: true, credentials: true });

  const config = new DocumentBuilder()
    .setTitle("APRON API")
    .setDescription("Air Norte crew ops API — roster, duty, flights, fleet, notices. Simulated OCC feed.")
    .setVersion("0.1.0")
    .addBearerAuth()
    .build();
  SwaggerModule.setup("api/docs", app, SwaggerModule.createDocument(app, config));

  const port = Number(process.env.PORT ?? 3001);
  await app.listen(port);
  console.log(`APRON api listening on :${port}  docs /api/docs  health /api/health`);
}

bootstrap();
