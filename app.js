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
    document.addEventListener('clearing_playerLoaded', loadCharacters)
    document.addEventListener('clearing_characterLoaded', loadControls)

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

    testStuff()
    info(`main`, s)
    log(`mickey`, `chips`)
  }

  const loadCharacters = () => {
    characters().loadCharacters()
  }

  const loadControls = () => {
    console.log('char', character);

    let t = base[character.location]
    controls().loadControls()
    playarea().loadResponses(t)
  }


  const testStuff = () => {
    console.log(base.start);
    el( undefined, 'myTest').button( 'press me', () => {log(`clickety`);})
  }

  return {
    runApp: runApp,
    init: () => {

      main()
    },

  };
}

app().init()
