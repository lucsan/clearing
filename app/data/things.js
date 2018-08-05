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

  gnome: {
    desc: "A nice gnome.",
    locs: ['start'],
    actions: {
      speak: '',
    },
  },

  lint: {
    desc: "Some grey and fluffy lint.",
    locs: ['inv'],
    actions: {
      sniff: '',
      throw: '',
    },
  },

  lintStick: {
    desc: "A mysterious lintStick, it has some pocket lint stuck to it. I wonder what this is for?",
    actions: {
      give: () => console.log(`Give to gnome`)
    },
    properties: {
      attack: 2,
      defense: 0,
      poking: true,
      tickling: () => console.log(`You tickle something with it`)
    },
  },

  penny: {
    desc: 'A shinny penny.'
  }

}
