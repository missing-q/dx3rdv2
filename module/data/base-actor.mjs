export default class DX3rdActorBase extends foundry.abstract
  .TypeDataModel {
  static LOCALIZATION_PREFIXES = ["DX3RD.Actor.base"];

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    function resourceField(initialValue, initialMax) {
      return {
            // Make sure to call new so you invoke the constructor!
        value: new fields.NumberField({ ...requiredInteger, initial: initialValue }),
        max: new fields.NumberField({ ...requiredInteger, initial: initialMax }),
      };
    }

    function baseStat(initialPoints, initialAdd) {
      return {
            // Make sure to call new so you invoke the constructor!
        points: new fields.NumberField({ ...requiredInteger, initial: initialPoints }),
        add: new fields.NumberField({ ...requiredInteger, initial: initialAdd }),
        value: new fields.NumberField({ ...requiredInteger, initial: 0 }),
      };
    }

    function baseDice(initialDice, initialCrit) {
      return {
            // Make sure to call new so you invoke the constructor!
        critical: new fields.NumberField({ ...requiredInteger, initial: initialCrit }),
        dice: new fields.NumberField({ ...requiredInteger, initial: initialDice }),
        add: new fields.NumberField({ ...requiredInteger, initial: 0 }),
      };
    }

    function baseSkill(isTemporary, initialDice, initialPoints) {
      return {
            // Make sure to call new so you invoke the constructor!
        points: new fields.NumberField({...requiredInteger, initial: initialPoints }),
        dice: new fields.NumberField({ ...requiredInteger, initial: initialDice }),
        value: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        isTemporary: new fields.BooleanField({ initial: isTemporary }),
      };
    }

    schema.health = new fields.SchemaField({
      value: new fields.NumberField({
        ...requiredInteger,
        initial: 10,
        min: 0,
      }),
      max: new fields.NumberField({ ...requiredInteger, initial: 10 }),
    });

    schema.power = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 5, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 5 }),
    });

    schema.biography = new fields.HTMLField();

    schema.attributes = new fields.SchemaField({
      level: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 1 })
      }),
      hp : new fields.SchemaField(resourceField(0,0)),
      encroachment: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        level: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        dice: new fields.NumberField({ ...requiredInteger, initial: 0 })
      }),
      exp : new fields.SchemaField(resourceField(0,0)),
      saving : new fields.SchemaField(resourceField(0,0)),
      stock : new fields.SchemaField(resourceField(0,0)),
      dice: new fields.SchemaField({
        major: new fields.SchemaField(baseDice(0,0)),
        reaction: new fields.SchemaField(baseDice(0,0)),
        dodge: new fields.SchemaField(baseDice(0,0))
      }),
      critical: new fields.SchemaField({
        min: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        value: new fields.NumberField({ ...requiredInteger, initial: 0 }),
      }),
      move: new fields.SchemaField({
        combat: new fields.NumberField({ ...requiredInteger, initial: 0 }),
        full: new fields.NumberField({ ...requiredInteger, initial: 0 }),
      }),
      initiative: new fields.SchemaField({
        value: new fields.NumberField({ ...requiredInteger, initial: 1 })
      }),
    });
    
    schema.stats = new fields.SchemaField({
      body: new fields.SchemaField(baseStat(0, 0)),
      sense: new fields.SchemaField(baseStat(0, 0)),
      mind: new fields.SchemaField(baseStat(0, 0)),
      social: new fields.SchemaField(baseStat(0, 0))
    });

    // Iterate over ability names and create a new SchemaField for each.
    
    schema.abilities = new fields.SchemaField(
      Object.keys(CONFIG.DX3RD.abilities).reduce((obj, ability) => {
        obj[ability] = new fields.SchemaField({
          value: new fields.NumberField({
            ...requiredInteger,
            initial: 10,
            min: 0,
          }),
        });
        return obj;
      }, {})
    );

    // iterate through skills
    schema.skills = new fields.SchemaField(
      Object.keys(CONFIG.DX3RD.skills).reduce((obj, skill) => {
        obj[skill] = new fields.SchemaField(baseSkill(false,0,0));
        return obj;
      }, {})
    );

    return schema;
  }
  prepareDerivedData() {
    // Loop through ability scores, and add their modifiers to our sheet output.
    for (const key in this.abilities) {
      // Calculate the modifier using d20 rules.
      this.abilities[key].mod = Math.floor(
        (this.abilities[key].value - 10) / 2
      );
      // Handle ability label localization`.
      this.abilities[key].label =
        game.i18n.localize(CONFIG.DX3RD.abilities[key]) ?? key;
    }

    // loop through skills and add in their base stat
    for (const key in this.skills){
      let baseStat = CONFIG.DX3RD.skills[key].stat
      let type = CONFIG.DX3RD.skills[key].type
      //console.log ("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA -- TESTING -- AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
      this.skills[key].base = this.stats[baseStat]
      // add container-specific properties
      if (type == "container"){
        this.skills[key].subskills = {}
        this.skills[key].isContainer = true
      } else {
        this.skills[key].isContainer = false
      }
    }
  }

}

