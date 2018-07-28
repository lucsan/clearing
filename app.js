let log = null
const debug = true

const app = () => {
  let s = {}

  const main = () => {
    autoload().loadFiles()
    document.addEventListener('clearing_loaded', runApp)
  }

  const runApp = () => {
    log = tools().log

    player().playerDetails()

    testStuff()
    log(`main`, `cheese`)
  }


  const testStuff = () => {
    el( undefined, 'myTest').button( 'press me', () => {console.log(`clickety`);})
  }

  return {
    runApp: runApp,
    init: () => {

      main()
    },

  };
}

app().init()
