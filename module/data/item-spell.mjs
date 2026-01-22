import dx3rdItemBase from './base-item.mjs';

export default class dx3rdSpell extends dx3rdItemBase {
  static LOCALIZATION_PREFIXES = [
    'DX3RD.Item.base',
    'DX3RD.Item.Spell',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    schema.spellLevel = new fields.NumberField({
      required: true,
      nullable: false,
      integer: true,
      initial: 1,
      min: 0,
      max: 9,
    });

    return schema;
  }
}
