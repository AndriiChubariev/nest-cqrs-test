import { Module } from '@nestjs/common';
import { HeroesGameModule } from './heroes/heroes.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [HeroesGameModule, InventoryModule],
})
export class ApplicationModule {}
