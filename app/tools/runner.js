let app

const runner = () => {

  let s = {}


//console.log('dd', document.domain);
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

    app.mediator().getProps().stick.actions.env['pick up']()

    playarea(app.mediator(), app.stagi()).enterPlace('creepyWoods')

    //console.log(app.mediator().getProps().stick);

    // actions().hold('stick')
    // actions().hit('littleMonster', 'stick')

document.addEventListener('testi', () => { console.log('testi') })
document.dispatchEvent(new Event('testi'))

    console.log('runner');
    //console.log('things', things);
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
