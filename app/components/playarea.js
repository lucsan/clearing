const playarea = () => {

  const loadResponses = (r) => {
    el().removeElement('responses')
    el('playArea', undefined, 'responses').div(r)
  }

  return {
    loadResponses: loadResponses,
  }
}
