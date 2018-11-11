const placesList = {
  // place {id name}: Description (with tokens)
  start: {
    desc: 'a sun dappled clearing',
    descScript: 'clearing',
    exits: [
      { id: 'north',
        desc: 'a path runs northwards',
        to: 'woods',
      },
      {
        id: 'South',
        desc: 'to the south, a small wooden door',
        to: 'tree',
        actions: {
          'open': () => {},
          'unlock': () => {},
          'lock': () => {},
        },
      },
      {
        id: 'lab',
        desc: 'the laboratory entrance',
        to: 'lab',
      }
    ]
  },
  woods: {
    desc: 'some nice creepy woods',
    exits: [
      {
        id: 'start',
        desc: 'a path runs south through the woods',
        to: 'start',
      }
    ]
  },
  lab: {
    desc: 'a low rent laboratory, with a cheep bench, an old bunsen burner and a test tube rack',
    exits: [
      {
        id: 'start',
        desc: 'the door to the clearing',
        to: 'start',
      }
    ]
  }
}
