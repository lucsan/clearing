const playarea = () => {

  const loadPlayarea = (r) => {
    el().removeElement('responses')
    el('playArea', undefined, 'responses').div(r)
  }

  return {
    loadResponses: loadPlayarea,
  }
}
