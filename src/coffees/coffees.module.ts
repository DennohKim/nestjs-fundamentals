import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

// helps us organise code
@Module({ controllers: [CoffeesController], providers: [CoffeesService] })
export class CoffeesModule {}
