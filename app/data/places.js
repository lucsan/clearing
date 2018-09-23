const placesList = {
  // place {id name}: Description (with tokens)
  start: {
    desc: 'a sun dappled clearing.',
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
      {
        id: 'lab',
        desc: 'The laboratory entrance.',
        to: 'lab',
      }
    ]
  },
  woods: {
    desc: 'Some nice creepy woods',
    exits: [
      {
        id: 'start',
        desc: 'A path runs south through the woods.',
        to: 'start',
      }
    ]
  },
  lab: {
    desc: "A low rent laboratory, with a cheep bench, an old bunsen burner and a test tube rack.",
    exits: [
      {
        id: 'start',
        desc: 'The door to the clearing',
        to: 'start',
      }
    ]
  }
}
