const player = (mediator, stage) => {

  const showPlayerDetails = (p) => {
    document.dispatchEvent(new Event('clearing_player_loaded'))
    stage.displayPlayer(p.name)
  }

  const newPlayerName = () => {
    let p = document.getElementById('playerName') // TODO move to perform.js
    if (p.value != '') {
      mediator.tools().storeData('player', {
        name: p.value,
        chars: []
      })
      killPlayerForm()
      showPlayerDetails(mediator.tools().loadData('player'))
    }
    mediator.log(`ok clicked ${p.value}`)
  }

  const killPlayerForm = () => {
    stage.killPlayerForm()
  }

  const loadOrNewPlayer = () => {
    let p = mediator.tools().loadData('player')
    if (p == null) {
      stage.makePlayerForm(newPlayerName)
    } else {
      mediator.log(`found player in localstorage - ps ${p.name}`)
      showPlayerDetails(p)
    }
  }

  return {
    playerDetails: loadOrNewPlayer
  }

}
