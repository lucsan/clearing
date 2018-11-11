'use strict'

let log = null
let info = null
let character = {}
let things = {}
let places = {}

const debug = true

const app = () => {


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

  const playerLoaded = () => {
    characters().loadCharacters()
    console.log(tools().loadLog());
    console.log('character', character);
  }

  const characterLoaded = () => {
    places = playarea().loadPlaces()

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
  }

}
