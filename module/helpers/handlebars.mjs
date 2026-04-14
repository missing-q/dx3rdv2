/* -------------------------------------------- */
/*  Handlebars Helpers                          */
/* -------------------------------------------- */
export class DX3rdRegisterHelpers {
  static init() {

    /**
     * Function for returning different styling based off of Encroach value.
     * @param {Number} arg Encroach value
     * 
     */
    Handlebars.registerHelper('encroach', function(arg) {
      let flashingOff = game.settings.get("DX3rd", "flashingOff");
      if (flashingOff){
        //photosensitive effects are disabled, return background gradient only
        if (arg <= 100) {
          return `background: linear-gradient(90deg, black ${arg}%, lightslategray 0%);`;
        } else if (arg <= 200) {
          return `background: linear-gradient(90deg, #7e0018 ${arg - 100}%, black 0%);`;
        } else {
          return `background: linear-gradient(90deg, darkcyan ${arg - 200}%, #7e0018 0%);`;
        }
      }
      else {
        //photosensitive effects are enabled, return background gradient and animations
        if (arg <= 50) {
          return `background: linear-gradient(90deg, black ${arg}%, lightslategray 0%);`;
        } else if (arg <= 100) {
          return `background: linear-gradient(90deg, black ${arg}%, lightslategray 0%); animation: distort-very-subtle 5s infinite;`;
        } else if (arg <= 200) {
          return `background: linear-gradient(90deg, #7e0018 ${arg - 100}%, black 0%); animation: distort-subtle 5s infinite;`;
        } else {
          return `background: linear-gradient(90deg, darkcyan ${arg - 200}%, #7e0018 0%); animation: distort 0.6s infinite;`;
        }
      }
    });


  }
}