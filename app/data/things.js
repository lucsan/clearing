const thingsList = {
  //
  stick: {
    desc: "A nice stick.",
    locs: ['start', 'woods'],
    actions: {
      // TODO pick up action, not displayed when item is in inv.
      // TODO synonyms for pick up? remove, get, take.
      env: {
        'pick up': () => thingsHandler().addToInventory('stick', true),
        'kick': () => {},
      },
      inv: {
        // combines
        // wear - put in bod
        drop: () => {},
        destroy: () => {},
      },
      bod: {
        hit: () => {console.log('you hit');},
        poke: () => {},
        bag: () => {}, // put in inv
      },
    },
    combines: {
      lintStick: {
        needs: ['lint', 'stickyTape'],
        action: () => thingsHandler().create(['stick', stick.combines.lintStick.needs], ['lintStick', 'stickyTape']),
      },
    },
    properties: {
      attack: 2,
      defense: 0,
      weight: 2,
      poking: true,
    },
  },

  gnome: {
    desc: "A nice gnome.",
    locs: ['start'],
    actions: {
      env: {
        speak: () => {},
      },
    },
  },

  lint: {
    desc: "Some grey and fluffy lint.",
    locs: ['inv'],
    actions: {
      inv: {
        inspect: () => {console.log('inspect')},
      },
      bod: {
        sniff: () => {},
        throw: () => {},
      },
    },
  },

  stickyTape: {
    desc: "A roll of stickytape. Its a tape, which is sticky.",
    locs: ['inv'],
    properties: {
      sticking: true,
    },
  },

  lintStick: {
    desc: "A mysterious lintstick, it has some pocket lint stuck to it. I wonder what this is for?",
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
  },

  pea: {
    desc: "A small round pea.",
    locs: ['inv'],
  },

}
