import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoansModule } from './loans/loans.module';


@Module({
  imports: [
    UsersModule, 
    BooksModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        retryDelay: 3000,
        autoLoadEntities: true, // esta linea hace que se carguen todas las entidades automaticamente 
        // entities: [], en produccion quiza sea mejor poner las entidades una por una en este array en lugar de autoLoadEntities
        synchronize: true, // tampoco es bueno usar en produccion porque se pueden perder datos
      }),
    }),
    LoansModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
