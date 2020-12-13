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
import { UserDTO } from 'src/dto/user.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly _service: UserService) {}

  @Post()
  create(@Body() createUserDto: UserDTO) {
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
  async update(@Param('id') id: number, @Body() updatedPet: UserDTO) {
    return await this._service.update(id, updatedPet);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this._service.remove(id);
  }
}
