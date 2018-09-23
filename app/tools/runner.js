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

        let qs = tools().queryString()
        let qst = tools().queryString('endat')

        console.log('qst', qst);
    document.getElementById('playerName').value = s.playerName
    document.getElementById('playerNameOKButton').click()

    document.getElementById('charName').value = s.charName
    document.getElementById('charNameOKButton').click()

    // thingsHandler().combine(things.lintStick)
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




  return {
    init: () => {
      main()
    },
  }

}

runner().init()
