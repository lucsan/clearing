const app = () => {
  let x = {}

  const main = () => {
      console.log(`main`)
      autoload().loadFiles()
      document.addEventListener('clearing_loaded', runApp)
  }

  const runApp = () => {
    console.log('runApp');
    player().playerDetails()


    testStuff()
  }


  const testStuff = () => {
    el('myTest').button( 'press me', 'app', () => {console.log('clickety');})
  }

  return {
    runApp: runApp,
    init: () => {

      main()
    },

  };
}

app().init()
