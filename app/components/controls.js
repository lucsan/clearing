const controls = () => {

  const loadControls = () => {
    el('controls', undefined, 'playerMove').input()
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
