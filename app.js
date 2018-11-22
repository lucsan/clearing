'use strict'

// let log = null
// let info = null
// let character = {}
// let things = {}
// let places = {}

//let mediator  = {}

const debug = true

function application () {
//const app = () => {
  let mediator
  let theStage
  let theStagi

  const main = () => {
    autoload().loadFiles()
    document.addEventListener('clearing_modules_loaded', runApp)
    document.addEventListener('clearing_player_loaded', playerLoaded)
    document.addEventListener('clearing_character_loaded', characterLoaded)
  }

  const runApp = () => {
    console.log('clearing app running');
    briefMediator()
    prepairStage()
    prepaireStagi()
    //log = mediator.tools().log
    //info = mediator.tools().info
    mediator.setProps(thingsHandler(mediator).things())
    thingsHandler(mediator).combos()
    theStage.makeDisplays()
    player(mediator, theStage).playerDetails()
  }

  const briefMediator = () => {
    if (!mediator) { mediator = mediation() }
    return mediator
  }

  const prepairStage = () => {
    if (!theStage) theStage = stage(mediator)
    return theStage
  }

  const prepaireStagi = () => {
    if (!theStagi) theStagi = stageInterface(theStage)
    return theStagi
  }

  const playerLoaded = () => {
    characters(mediator, theStage).loadCharacters()
    console.log('log', mediator.tools().loadLog());
    console.log('character', mediator.character());
  }

  const characterLoaded = () => {
    //places = playarea(mediator).loadPlaces()

    console.log('medi loc', mediator.location());
    playarea(mediator, theStage).enterPlace('start')

    theStage.displayThingsInContainers()
  }

  return {
    runApp: runApp,
    mediator: () => mediator,
    stage: () => theStage,
    stagi: () => theStagi,
    init: () => {
      main()
    },
  }

}
