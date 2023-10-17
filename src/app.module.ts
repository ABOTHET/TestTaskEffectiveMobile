import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import { env } from "process"
import { UsersModule } from './users/users.module';
import {User} from "./users/entities/user.entity";
import {HistoryActionsModule} from "./history-actions/history-actions.module";
import {HistoryActions} from "./history-actions/entities/history-actions.entity";

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
      models: [User, HistoryActions],
      synchronize: true, // Синхронизация моделей
      autoLoadModels: true, // Автозагрузка моделей
      sync: {
        force: true // После запуска удаляем БД и создаем новую
      },
      logging: console.log // Логирование (console.log or false)
    }),
    UsersModule,
    HistoryActionsModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
