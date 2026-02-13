import DX3rdActorBase from './base-actor.mjs';

export default class DX3rdServant extends DX3rdActorBase {
  static LOCALIZATION_PREFIXES = [
    ...super.LOCALIZATION_PREFIXES,
    'DX3RD.Actor.Servant',
  ];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = super.defineSchema();

    schema.stats = new fields.SchemaField({
      body: new fields.SchemaField(baseStat(3, 0)),
      sense: new fields.SchemaField(baseStat(3, 0)),
      mind: new fields.SchemaField(baseStat(3, 0)),
      social: new fields.SchemaField(baseStat(3, 0))
    });

    return schema;

    
  }

}
