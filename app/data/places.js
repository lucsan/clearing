const placesList = {
  // place {id name}: Description (with tokens)
  start: {
    desc: 'a sun dappled clearing',
    proseScript: 'clearing',
    exits: [
      { id: 'north',
        desc: 'a path runs northwards to the Creepy Woods',
        to: 'creepyWoods',
      },
      {
        id: 'South',
        desc: 'to the south, a small wooden mysterious door in a tree',
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
  creepyWoods: {
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
    proseScript: 'lab',
    exits: [
      {
        id: 'start',
        desc: 'the door to the clearing',
        to: 'start',
      }
    ]
  }
}
