import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule, 
    BooksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'root',
      database: 'library_db',
      autoLoadEntities: true, // esta linea hace que se carguen todas las entidades automaticamente 
      // entities: [], en produccion quiza sea mejor poner las entidades una por una en este array en lugar de autoLoadEntities
      synchronize: true, // tampoco es bueno usar en produccion porque se pueden perder datos
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
