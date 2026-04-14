/* -------------------------------------------- */
/*  Handlebars Helpers                          */
/* -------------------------------------------- */
export class DX3rdRegisterHelpers {
  static init() {

    /**
     * Function for returning different progress bar styling based off of Encroach value.
     * @param {Number} arg Encroach value
     * 
     */
    Handlebars.registerHelper('encroachbar', function(arg) {
      if (arg <= 100)
        return `background: linear-gradient(90deg, black ${arg}%, lightslategray 0%);`;
      else if (arg <= 200)
        return `background: linear-gradient(90deg, #7e0018 ${arg - 100}%, black 0%);`;
      else
        return `background: linear-gradient(90deg, darkcyan ${arg - 200}%, #7e0018 0%);`;
    });

    /**
     * Function for returning different text styling based off of Encroach value.
     * @param {Number} arg Encroach value
     * 
     */
    Handlebars.registerHelper('encroachtext', function(arg) {
      if (arg <= 100)
        return `animation: distort-very-subtle 5s infinite;`;
      else if (arg <= 200)
        return `animation: distort-subtle 5s infinite;`;
      else
        return `animation: distort 0.6s infinite;`;
    });

    /**
     * Function for returning different text styling based off of Encroach value.
     * @param {Number} arg Encroach value
     * 
     */
    Handlebars.registerHelper('encroach', function(arg) {
      if (arg <= 50)
        return `background: linear-gradient(90deg, black ${arg}%, lightslategray 0%);`;
      else if (arg <= 100)
        return `background: linear-gradient(90deg, black ${arg}%, lightslategray 0%); animation: distort-very-subtle 5s infinite;`;
      else if (arg <= 200)
        return `background: linear-gradient(90deg, #7e0018 ${arg - 100}%, black 0%); animation: distort-subtle 5s infinite;`;
      else
        return `background: linear-gradient(90deg, darkcyan ${arg - 200}%, #7e0018 0%); animation: distort 0.6s infinite;`;
    });


  }
}