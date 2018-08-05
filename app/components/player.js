const player = () => {
  let s = {}

  const showPlayerDetails = (p) => {
    document.dispatchEvent(new Event('clearing_playerLoaded'))
    let e = el('playerDetails').div(`Player name: ${p.name}`)
  }

  const playerInputs = () => {
    let e = el('playerForm', undefined, 'playerName').input()
  };

  const newPlayerName = () => {
    let p = document.getElementById('playerName')
    if (p.value != '') {
      tool.storeData('player', {
        name: p.value
      })
      let pl = tool.loadData('player')
      killPlayerForm()
      showPlayerDetails(pl)
    }
    log(`ok clicked ${p.value}`)
  }

  const button = () => {
    el('playerForm', 'buttonClass', 'playerNameOKButton' ).button( 'OK', newPlayerName)
  }

  const playerForm = () => {
    let e = el('playerDetails', undefined, 'playerForm').div('Player')
  }

  const killPlayerForm = () => {
    let e = document.getElementById('playerForm')
    e.parentNode.removeChild(e)
  }

  const loadOrNewPlayer = () => {
    let p = tool.loadData('player')
    if (p == null) {
      loadPlayerForm()
    } else {
      log(`found player in localstorage - ps ${p.name}`)
      showPlayerDetails(p)
    }
  }

  const loadPlayerForm = () => {
    playerForm()
    playerInputs()
    button()
  }

  return {
      playerDetails: loadOrNewPlayer,

  }

}
