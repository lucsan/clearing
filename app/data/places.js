const places = {
  // place {id name}: Description (with tokens)
  start: {
    desc: 'You are standing in a clearing',
    exits: [
      { dir: 'The North',
        desc: 'A path runs north',
        to: 'woods',
      }
    ]
  },
  woods: {
    desc: 'Some nice creepy woods',
  }
}
