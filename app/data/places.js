const places = {
  // place {id name}: Description (with tokens)
  start: {
    desc: 'You are standing in a clearing',
    exits: [
      { id: 'north',
        desc: 'A path runs northwards.',
        to: 'woods',
      },
      {
        id: 'South',
        desc: 'To the south is a small wooden door.',
        to: 'tree',
        actions: {
          'open': () => {},
          'unlock': () => {},
          'lock': () => {},
        },
      },
    ]
  },
  woods: {
    desc: 'Some nice creepy woods',
  }
}
