import {
  Body,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pet } from 'src/entities/pet.entity';
import { PetDTO } from 'src/dto/pet.dto';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private _repository: Repository<Pet>,
  ) {}

  @Get()
  async findAll(): Promise<Pet[]> {
    return await this._repository.find();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Pet> {
    return this._repository.findOne(+id);
  }

  @Post()
  async create(@Body() createPetDto: PetDTO): Promise<Pet> {
    return await this._repository.save(createPetDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedPet: PetDTO,
  ): Promise<Pet> {
    const petToBeUpdated = await this._repository.findOne(+id);
    petToBeUpdated.name = updatedPet.name;
    petToBeUpdated.male = updatedPet.male;
    petToBeUpdated.female = updatedPet.female;
    return await this._repository.save(petToBeUpdated);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return await this._repository.delete(+id);
  }
}
