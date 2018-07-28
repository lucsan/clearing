const player = () => {
  let s = {}


  const showPlayerDetails = () => {
    e = el().div(`Player name: ${s.p.name}`)
  }

  const playerInputs = () => {
    e = el('playerForm', undefined, 'playerName').input()
  };

  const newPlayerName = () => {
    pn = document.getElementById('playerName')
    if (pn.value != '') {
      localStorage.setItem('player',
      JSON.stringify({
        name: pn.value,
      }))
      killPlayerForm()
    }
    console.log(`ok clicked ${pn.value}`)
  }

  const button = () => {
    el('playerForm', 'buttonClass', 'playerNameOKButton' ).button( 'OK', newPlayerName)
  }

  const playerForm = () => {
    e = el(undefined, undefined, 'playerForm').div('Player')
  }

  const killPlayerForm = () => {
    let el = document.getElementById('playerForm')
    el.parentNode.removeChild(el)
    loadPlayer()
  }

  const loadPlayer = () => {
    let p = localStorage.getItem('player')
    if (p == null) {
      loadPlayerForm()
    } else {
      s.p = JSON.parse(p)
      console.log(`found player in localstorage - ps ${s.p.name}`)
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
