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
        inspect: () => {console.log('you inspect lint')},
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
    combines: {
      needs: ['stick', 'lint', 'stickyTape'],
      destroys: ['stick', 'lint'],
      desc: "You use a piece of sticky tape to adhere the lint to your stick. Yay, a lintstick, its more stick than lint and has a sticky linty end."
      //action: () => thingsHandler().create(['stick', 'lint', 'stickyTape'], ['stick', 'lint']),
    },
  },

  penny: {
    desc: 'A shinny penny.'
  },

  badge: {
    desc: "A little copper button badge, it says `Adventurer #1`.",
    locs: ['bod'],
  },

}
