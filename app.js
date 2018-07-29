'use strict'
let log = null
let info = null
let tool = null

const debug = true

const app = () => {
  let s = {}

  const main = () => {
    autoload().loadFiles()
    document.addEventListener('clearing_loaded', runApp)
    document.addEventListener('clearing_playerLoaded', loadCharacters)

  }

  const runApp = () => {
    tool = tools()
    log = tool.log
    info = tool.info

    el(undefined, undefined, 'playerDetails').div()
    el(undefined, undefined, 'charactersDetails').div()
    player().playerDetails()

    testStuff()
    info(`main`, s)
    log(`mickey`, `chips`)
  }

  const loadCharacters = () => {
    characters().loadCharacters()
  }


  const testStuff = () => {
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
