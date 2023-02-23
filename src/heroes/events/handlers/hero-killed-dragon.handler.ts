import { CommandBus, IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import * as clc from 'cli-color';
import { DropAncientItemCommand } from '../../commands/impl/drop-ancient-item.command';
import { HeroKilledDragonEvent } from '../impl/hero-killed-dragon.event';

@EventsHandler(HeroKilledDragonEvent)
export class HeroKilledDragonHandler
  implements IEventHandler<HeroKilledDragonEvent>
{
  constructor(private readonly commandBus: CommandBus) {}
  handle(event: HeroKilledDragonEvent) {
    console.log(clc.greenBright('HeroKilledDragonEvent...'));

    console.log('spawning, drop item command');
    const itemId = '1488';
    this.commandBus.execute(new DropAncientItemCommand(event.heroId, itemId));
  }
}
