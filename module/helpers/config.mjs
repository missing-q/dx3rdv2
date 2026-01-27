export const DX3RD = {};

/**
 * The set of Ability Scores used within the system.
 * @type {Object}
 */
DX3RD.abilities = {
  str: 'DX3RD.Ability.Str.long',
  dex: 'DX3RD.Ability.Dex.long',
  con: 'DX3RD.Ability.Con.long',
  int: 'DX3RD.Ability.Int.long',
  wis: 'DX3RD.Ability.Wis.long',
  cha: 'DX3RD.Ability.Cha.long',
};

DX3RD.abilityAbbreviations = {
  str: 'DX3RD.Ability.Str.abbr',
  dex: 'DX3RD.Ability.Dex.abbr',
  con: 'DX3RD.Ability.Con.abbr',
  int: 'DX3RD.Ability.Int.abbr',
  wis: 'DX3RD.Ability.Wis.abbr',
  cha: 'DX3RD.Ability.Cha.abbr',
};

DX3RD.skills = {
  melee: {stat: "body", type: "skill"},
  dodge: {stat: "body", type: "skill"},
  ride: {stat: "body", type: "container"},
  ranged: {stat: "sense", type: "skill"},
  perception: {stat: "sense", type: "skill"},
  art: {stat: "sense", type: "container"},
  rc: {stat: "mind", type: "skill"},
  will: {stat: "mind", type: "skill"},
  knowledge: {stat: "mind", type: "container"},
  negotiation: {stat: "social", type: "skill"},
  procure: {stat: "social", type: "skill"},
  info: {stat: "social", type: "container"}
}

DX3RD.log_prefix = "DX3rd |"