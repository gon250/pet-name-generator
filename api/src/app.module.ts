import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [
    UserModule,
    PetModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'petsdb',
      entities: ['dist/**/*.entity{.ts,.js}', 'src/entity/**/*.ts'],
      synchronize: true,
    }),
  ],
  // controllers: [PetsController],
  // providers: [PetService],
})
export class AppModule {}
