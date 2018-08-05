const runner = () => {

  //console.log('runner');
  let s = {}
  s.playerName = 'MePlayer'
  s.charName = 'cheese231'


  const main = () => {
    //document.addEventListener('clearing_appLoaded', appLoaded)

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

    // s.actions = game().gatherActions()
    // s.actions['pick up']()

    console.log('runner', s);
  }




  return {
    init: () => {
      main()
    },
  }

}

runner().init()
