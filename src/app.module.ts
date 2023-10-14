import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import { env } from "process"

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: 'src/config/.env',
  }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: env["DB_HOST"],
      port: Number(env["DB_PORT"]),
      username: env["DB_USERNAME"],
      password: env["DB_PASSWORD"],
      database: env["DB_DATABASE"],
      models: [],
      synchronize: true, // Синхронизация моделей
      autoLoadModels: true, // Автозагрузка моделей
      /*sync: {
        force: true // После запуска удаляем БД и создаем новую
      },*/
      logging: console.log // Логирование (console.log or false)
    }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
