const controls = () => {

  const loadControls = () => {
    let e = el('controls', undefined, 'playerMove').input()
    e.addEventListener("keydown", (event) => {
      if (event.key === 'Enter') {
        playerMove()
      }
    })
    el('controls').button('PLAY', playerMove)
  }

  const playerMove = () => {
    let e = document.getElementById('playerMove')
    let m = e.value
    game().playerMove(m)
  }

  return {
  loadControls: loadControls,
  }

}
