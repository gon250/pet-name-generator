import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator';
import { PetDTO } from 'src/dto/pet.dto';
import { PetService } from './pet.service';

@ApiTags('pets')
@Controller('pets')
export class PetsController {
  constructor(private _service: PetService) {}

  @Auth()
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

  @Auth()
  @Put(':id')
  update(@Param('id') id: string, @Body() updatedPet: PetDTO) {
    return this._service.update(id, updatedPet);
  }

  @Auth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._service.remove(id);
  }
}
