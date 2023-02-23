import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { AddInventoryItem } from './add-inventory-item.command';

@CommandHandler(AddInventoryItem)
export class AddInventoryItemHandler
  implements ICommandHandler<AddInventoryItem>
{
  // constructor(private readonly publisher: EventPublisher) {}

  async execute(command: AddInventoryItem) {
    console.log(clc.yellowBright('DONE: Async AddInventoryItem... !!!'));
    console.log(JSON.stringify(command));
  }
}
