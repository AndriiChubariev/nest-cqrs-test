import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AddInventoryItemHandler } from './commands/handlers/commands/add-inventory-item.handler';

@Module({
  imports: [CqrsModule],
  controllers: [],
  providers: [AddInventoryItemHandler],
})
export class InventoryModule {}
