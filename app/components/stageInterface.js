const stageInterface = (stage) => {

  return {
    respond: (msg) => stage.respond(msg),
    displayThingsInContainers: () => stage.displayThingsInContainers(),
    displayProse: (prose) => stage.displayProse(prose)
  }
}
