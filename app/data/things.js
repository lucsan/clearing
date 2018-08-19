const thingsList = {
  //
  stick: {
    desc: "A nice stick.",
    locs: ['start', 'woods'],
    actions: {
      // TODO pick up action, not displayed when item is in inv.
      // TODO synonyms for pick up? remove, get, take.
      env: {
        'pick up': () => thingsHandler().addThingToInventory('stick', true),
        'kick': () => { stage().respond("You kick the nice stick.") },
      },
      inv: {
        // combines
        // wear - put in bod
        //drop: () => {},
        hold: () => { console.log(`put in bod`); },
        destroy: () => {},
      },
      bod: {
        hit: () => {console.log('you hit');},
        poke: () => {console.log(`you poke`);},
        bag: () => {console.log(`return to inventory`);}, // put in inv
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
      env: {
        'pick up': () => thingsHandler().addThingToInventory('lintStick', true),
      },
      inv: {
        give: () => console.log(`Give to gnome`),
        tickling: () => console.log(`You tickle something with it`),
        poking: () => console.log(`you poke something with it`),
      },
    },
    properties: {
      attack: 2,
      defense: 0,
      health: 10,
    },
    combines: {
      needs: ['stick', 'lint', 'stickyTape'],
      destroys: ['stick', 'lint'],
      desc: "You use a piece of sticky tape to adhere the lint to your stick. Yay, a lintstick, its more stick than lint and has a sticky linty end.",
    },
  },

  penny: {
    desc: 'A shinny penny.'
  },

  badge: {
    desc: "A little copper button badge, it says `Adventurer #1`.",
    locs: ['bod'],
  },

  littleMonster: {
    desc: "Oooh how cute, a little monster",
    locs: ['woods'],
    actions: {
      env: {
        hit: () => console.log(`monster is hit`)
      },
    },
    properties: {
      attack: 2,
      defense: 0,
      health: 4,
    },
  },

}
