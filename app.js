'use strict'

let log = null
let info = null
let character = {}
let things = {}
let places = {}


const debug = true

function application () {
//const app = () => {
  let advocate

  const main = () => {
    autoload().loadFiles()
    document.addEventListener('clearing_modules_loaded', runApp)
    document.addEventListener('clearing_player_loaded', playerLoaded)
    document.addEventListener('clearing_character_loaded', characterLoaded)
  }

  const runApp = () => {
    console.log('running');

    log = tools().log
    info = tools().info
    things = thingsHandler().things()
    thingsHandler().combos()
    stage().makeDisplays()
    player().playerDetails()
  }

  const avo = () => {
    console.log('not avo', !advocate, advocate);
    if (!advocate) { advocate = mediator().init() }
    return advocate
  }



  const playerLoaded = () => {
    characters().loadCharacters()
    console.log(tools().loadLog());
    console.log('character', character);
  }

  const characterLoaded = () => {
    places = playarea().loadPlaces()

    console.log(character.location);
    playarea().enterPlace('start')

    stage().displayThingsInContainers()

    //console.log(places);

    test()
  }

  const test = () => {
    //let list = character.inventory
    //stage().displayThingsInList(list, 'inv', 'Inventory')
  }



  return {
    runApp: runApp,
    init: () => {
      main()
    },
    avo,
  }

}
