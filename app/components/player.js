const player = () => {

  const showPlayerDetails = (p) => {
    document.dispatchEvent(new Event('clearing_player_loaded'))
    stage().displayPlayer(p.name)
  }

  const newPlayerName = () => {
    let p = document.getElementById('playerName') // TODO move to perform.js
    if (p.value != '') {
      tools().storeData('player', {
        name: p.value,
        chars: []
      })
      let pl = tools().loadData('player')
      killPlayerForm()
      showPlayerDetails(pl)
    }
    log(`ok clicked ${p.value}`)
  }

  const killPlayerForm = () => {
    stage().killPlayerForm()
  }

  const loadOrNewPlayer = () => {
    let p = tools().loadData('player')
    if (p == null) {
        stage().makePlayerForm(newPlayerName)
    } else {
      log(`found player in localstorage - ps ${p.name}`)
      showPlayerDetails(p)
    }
  }

  return {
      playerDetails: loadOrNewPlayer,

  }

}
