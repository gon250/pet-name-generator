import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { PetsController } from './pet/pet.controller';
import { PetService } from './pet/pet.service';

@Module({
  imports: [
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
    TypeOrmModule.forFeature([Pet]),
  ],
  controllers: [PetsController],
  providers: [PetService],
})
export class AppModule {}
