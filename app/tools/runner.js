let app

const runner = () => {

  let s = {}


console.log('dd', document.domain);
  //document.domain = 'site.com'

  const main = () => {
    s.playerName = 'MePlayer'
    s.charName = 'cheese231'

    localStorage.clear()
    app = new application()
    app.init()

    setTimeout(appLoaded, 300)
  }

  const appLoaded = () => {

    let avo = app.avo()
    let tooly = avo().tools().info('xxx')
    //
    // avo().tools().info('runner log test')
    // console.log('avo', avo);

    let cmd = {}
    cmd.endat = tools().queryString('endat')
    cmd.chart = tools().queryString('chart')
    cmd.test = tools().queryString('test')


    document.getElementById('playerName').value = s.playerName
    document.getElementById('playerNameOKButton').click()
    if (cmd.endat == 'playerLoaded') return

    document.getElementById('charName').value = s.charName
    document.getElementById('charNameOKButton').click()
    if (cmd.endat == 'charLoaded') return

    if (cmd.test == 'combine') testCombine()

    playarea().enterPlace('creepyWoods')
    // things.stick.actions.env['pick up']()
    // actions().hold('stick')
    // actions().hit('littleMonster', 'stick')



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
