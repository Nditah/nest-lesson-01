import { PartialType } from '@nestjs/mapped-types';
import { CreateSmsDto } from './create-sm.dto';

export class UpdateSmsDto extends PartialType(CreateSmsDto) {}
