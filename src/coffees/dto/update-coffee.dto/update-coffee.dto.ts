import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from '../create-coffee.dto/create-coffee.dto';

//partialtype marks all the inputs as optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
