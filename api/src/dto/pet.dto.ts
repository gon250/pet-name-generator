import { ApiProperty } from '@nestjs/swagger';

export class PetDTO {
  id?: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  male: boolean;

  @ApiProperty()
  female: boolean;
}
