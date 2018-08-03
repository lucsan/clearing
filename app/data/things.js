const thingsList = {
  //
  stick: {
    desc: "A nice stick.",
    locs: ['start', 'woods'],
    actions: {
      'pick up': () => game().addToInventory('stick', true),
      hit: '',
      poke: '',
    },
    properties: {
      attack: 2,
      defense: 0,
      poking: true,
    }
  },

  dwarf: {
    desc: "A nice dwarf.",
    locs: ['start'],
    actions: {
      speak: '',
    },
  },

  lint: {
    desc: "Looks grey and fluffy.",
    locs: ['inv'],
    actions: {
      sniff: '',
      throw: '',
    },
  },

  penny: {
    desc: 'A shinny penny.'
  }

}
