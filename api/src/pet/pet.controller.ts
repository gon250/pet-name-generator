import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PetDTO } from 'src/dto/pet.dto';
import { PetService } from './pet.service';

@Controller('pets')
export class PetsController {
  constructor(private _service: PetService) {}

  @Post()
  create(@Body() createUserDto: PetDTO) {
    return this._service.create(createUserDto);
  }

  @Get()
  findAll() {
    return this._service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedPet: PetDTO) {
    return this._service.update(id, updatedPet);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._service.remove(id);
  }
}
