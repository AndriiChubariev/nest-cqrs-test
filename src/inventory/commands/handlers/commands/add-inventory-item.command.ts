export class AddInventoryItem {
  constructor(
    public readonly heroId: string,
    public readonly item: 'gold' | 'loot',
  ) {}
}
