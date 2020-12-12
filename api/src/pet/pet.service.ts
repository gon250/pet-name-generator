import { Injectable } from '@nestjs/common';
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

  async findAll(): Promise<Pet[]> {
    return await this._repository.find();
  }

  async findOne(id: string): Promise<Pet> {
    return this._repository.findOne(+id);
  }

  async create(createPetDto: PetDTO): Promise<Pet> {
    return await this._repository.save(createPetDto);
  }

  async update(id: string, updatedPet: PetDTO): Promise<Pet> {
    const petToBeUpdated = await this._repository.findOne(+id);
    petToBeUpdated.name = updatedPet.name;
    petToBeUpdated.male = updatedPet.male;
    petToBeUpdated.female = updatedPet.female;
    return await this._repository.save(petToBeUpdated);
  }

  async remove(id: string): Promise<any> {
    return await this._repository.delete(+id);
  }
}
