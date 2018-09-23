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

    let endat = tools().queryString('endat')
    let chart = tools().queryString('chart')
    let test = tools().queryString('test')


    document.getElementById('playerName').value = s.playerName
    document.getElementById('playerNameOKButton').click()
    if (endat == 'playerLoaded') return

    document.getElementById('charName').value = s.charName
    document.getElementById('charNameOKButton').click()
    if (endat == 'charLoaded') return
//console.log('test', test);
    if (test == 'combine') testCombine()
    //thingsHandler().combine(things.lintStick)
//return

    // things.stick.actions.env['pick up']()
    // things.stick.actions.inv['drop']()
    // things.stick.actions.env['pick up']()
    // thingsHandler().combine(things.lintStick)
    playarea().exitPlace('woods')
    things.stick.actions.env['pick up']()
    actions().hold('stick')
    actions().hit('littleMonster', 'stick')

    console.log('runner');
    console.log('things', things);
  }

  const testCombine = () => {
    console.log('aaaaa');
    thingsHandler().combine(things.lintStick)
  }



  return {
    init: () => {
      main()
    },
  }

}

runner().init()
