const runner = () => {

  let s = {}

console.log('dd', document.domain);
  //document.domain = 'site.com'

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

    if (test == 'combine') testCombine()

    playarea().exitPlace('woods')
    things.stick.actions.env['pick up']()
    actions().hold('stick')
    actions().hit('littleMonster', 'stick')



    console.log('runner');
    console.log('things', things);
  }

  const testCombine = () => {
    thingsHandler().combine(things.lintStick)
    things.stick.actions.env['pick up']()
    things.stick.actions.inv['drop']()
    things.stick.actions.env['pick up']()
    thingsHandler().combine(things.lintStick)
  }

  return {
    init: () => {
      main()
    },
  }

}

runner().init()
