'use strict'
let log = null
let info = null
let tool = null
let character = null

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
    tool = tools()
    log = tool.log
    info = tool.info

    el(undefined, 'display', 'playerDetails').div()
    el(undefined, 'display', 'charactersDetails').div()
    el(undefined, 'display', 'playArea').div()
    el(undefined, 'display', 'controls').div()

    player().playerDetails()


    info(`main`, s)
    //log(`mickey`, `chips`)
  }

  const testStuff = () => {
    //console.log(base.start);
    el( undefined, undefined, 'myTest').button( 'press me', s.actions['pick up']  )
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
    //playarea().loadResponses(t)
        testStuff()
  }




  return {
    runApp: runApp,
    init: () => {

      main()
    },

  };
}

app().init()
