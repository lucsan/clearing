const player = () => {
  let s = {}


  const showPlayerDetails = () => {
    let e = el().div(`Player name: ${s.p.name}`)
  }

  const playerInputs = () => {
    let e = el('playerForm', undefined, 'playerName').input()
  };

  const newPlayerName = () => {
    let p = document.getElementById('playerName')
    if (p.value != '') {
      tool.storeData('player', {name: p.value} )
      killPlayerForm()
    }
    log(`ok clicked ${p.value}`)
  }

  const button = () => {
    el('playerForm', 'buttonClass', 'playerNameOKButton' ).button( 'OK', newPlayerName)
  }

  const playerForm = () => {
    let e = el(undefined, undefined, 'playerForm').div('Player')
  }

  const killPlayerForm = () => {
    let e = document.getElementById('playerForm')
    e.parentNode.removeChild(e)
    loadPlayer()
  }

  const loadPlayer = () => {
    let p = localStorage.getItem('player')
    if (p == null) {
      loadPlayerForm()
    } else {
      s.p = JSON.parse(p)
      log(`found player in localstorage - ps ${s.p.name}`)
      showPlayerDetails()
    }
  }

  const loadPlayerForm = () => {
    playerForm()
    playerInputs()
    button()
  }

  return {
      playerDetails: loadPlayer,

  }

}
