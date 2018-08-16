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
    things = thingsHandler().things()
    tool = tools()
    log = tool.log
    info = tool.info

    stage().makeDisplays()

    player().playerDetails()

    info(`main`, s)
    //log(`mickey`, `chips`)
  }

  const loadCharacter = () => {
    characters().loadCharacters()

  }

  const loadComponents = () => {
    //console.log('char', character);
    //s.actions = game().gatherActions()
    let t = places[character.location].desc
    controls().loadControls()
    playarea().loadLocation()
    //game().listInventory()
    stage().inventory(character.inventory)
    //playarea().loadResponses(t)
        testStuff()
    //document.dispatchEvent(new Event('clearing_appLoaded'))
    //console.log('app dispatched');
  }

  const testStuff = () => {
    //store().prepThingsForStorage()
    //console.log(base.start);
    //el( 'testArea', undefined, 'pickUpTest').button( 'pick up stick test', s.actions['pick up']  )
    el( 'testArea', undefined, 'createThingTest').button( 'create thing test', () => thingsHandler().create(['stick', 'lint', 'stickyTape'], ['lintStick', 'stickyTape']) )
    el( 'testArea', undefined, 'moveNorthTest').button( 'move north test', () => game().playerMove('north')  )

  }


  return {
    runApp: runApp,
    init: () => {
      main()
    },

  };
}

//app().init()
