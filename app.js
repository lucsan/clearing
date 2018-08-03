'use strict'
let log = null
let info = null
let tool = null
let character = null
let things = null

const debug = true

const app = () => {
  let s = {}

  const main = () => {
    autoload().loadFiles()
    document.addEventListener('clearing_loaded', runApp)
    document.addEventListener('clearing_playerLoaded', loadCharacter)
    document.addEventListener('clearing_characterLoaded', loadComponents)


  }

  const runApp = () => {
    things = thingsList
    tool = tools()
    log = tool.log
    info = tool.info

    el(undefined, 'display', 'playerDetails').div()
    el(undefined, 'display', 'charactersDetails').div()
    el(undefined, 'display', 'Inventory').div()
    el(undefined, 'display', 'playArea').div()
    el(undefined, 'display', 'controls').div()
    el(undefined, 'display', 'teastArea').div()

    player().playerDetails()

    info(`main`, s)
    //log(`mickey`, `chips`)
  }

  const loadCharacter = () => {
    characters().loadCharacters()

  }

  const loadComponents = () => {
    //console.log('char', character);
    s.actions = game().gatherActions()
    let t = places[character.location].desc
    controls().loadControls()
    playarea().loadLocation(s)
    game().listInventory()
    //playarea().loadResponses(t)
        testStuff()
  }

  const testStuff = () => {
    //console.log(base.start);
    el( 'teastArea', undefined, 'myTest').button( 'pick up stick test', s.actions['pick up']  )
  }


  return {
    runApp: runApp,
    init: () => {

      main()
    },

  };
}

app().init()
