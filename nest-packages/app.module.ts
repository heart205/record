import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AcademicMagicModule } from 'src/modules/academicMagic.module'
@Module({
  imports: [
    ConfigModule.forRoot({
      // 读取环境变量配置
      envFilePath: `.${process.env.NODE_ENV || 'development'}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        return {
          type: config.get('DATABASE_TYPE'),
          host: config.get('DATABASE_HOST'),
          port: config.get('DATABASE_PORT'),
          username: config.get('DATABASE_USER'),
          password: config.get('DATABASE_PASSWORD') as string,
          database: config.get('DATABASE') as any,
          entities: ['dist/**/*.entity.js'],
          synchronize: true,
          logging: false,
        }
      },
      inject: [ConfigService],
    }),
    // 存放其他的modules
    AcademicMagicModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
