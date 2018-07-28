let log = null
let info = null
let tool = null

const debug = true

const app = () => {
  let s = {}

  const main = () => {
    autoload().loadFiles()
    document.addEventListener('clearing_loaded', runApp)
  }

  const runApp = () => {
    tool = tools()
    log = tool.log
    info = tool.info

    player().playerDetails()

    testStuff()
    info(`main`, `cheese`)
    log(`mickey`, `chips`)
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
