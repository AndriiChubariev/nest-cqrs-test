import { CommandBus, EventsHandler, IEventHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { AddInventoryItem } from '../../../inventory/commands/handlers/commands/add-inventory-item.command';
import { HeroFoundItemEvent } from '../impl/hero-found-item.event';

@EventsHandler(HeroFoundItemEvent)
export class HeroFoundItemHandler implements IEventHandler<HeroFoundItemEvent> {
  constructor(private readonly commandBus: CommandBus) {}

  handle(event: HeroFoundItemEvent) {
    console.log(clc.yellowBright('Async HeroFoundItemEvent...'));
    this.commandBus.execute(new AddInventoryItem(event.heroId, 'gold'));
  }
}
