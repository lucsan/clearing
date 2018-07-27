const player = () => {
  let s = {}


  const showPlayerDetails = () => {
    d = document.createElement('div')
    d.innerHTML = `Player name: ${s.p.name}`
    document.getElementById('app').appendChild(d)
    el('myId').div();
  }

  const playerInputs = () => {
    pn = document.createElement('input')
    pn.id = 'playerName'
    document.getElementById('playerForm').appendChild(pn)

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
    el('playerName', 'playerForm').button( 'OK', newPlayerName)
  }

  const playerForm = () => {
    pd = document.createElement('div')
    t = document.createTextNode('Player')
    pd.id = "playerForm"
    pd.appendChild(t)
    document.getElementById('app').appendChild(pd)
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
