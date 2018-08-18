const runner = () => {

  let s = {}


  const main = () => {
    s.playerName = 'MePlayer'
    s.charName = 'cheese231'    

    localStorage.clear()

    app().init()

    setTimeout(appLoaded, 200)


  }


  const appLoaded = () => {
    //console.log('app loaded');
    //console.log(document.getElementById('playerName'));

    document.getElementById('playerName').value = s.playerName
    document.getElementById('playerNameOKButton').click()

    document.getElementById('charName').value = s.charName
    document.getElementById('charNameOKButton').click()

//console.log(things.stick.actions);
    // thingsHandler().combine(things.lintStick)
    // things.stick.actions.env['pick up']()
    // thingsHandler().combine(things.lintStick)

    // s.actions = game().gatherActions()
    // s.actions['pick up']()

    console.log('runner');
  }




  return {
    init: () => {
      main()
    },
  }

}

runner().init()
