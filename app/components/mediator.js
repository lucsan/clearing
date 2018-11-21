const mediator = () => {
  let avoInst

  const test = () => {
    console.log('avo');
  }



  const advocate = () => {
    let toolsInst

    const getTools = () => {
      if (!toolsInst) { toolsInst = tools() }
      return toolsInst
    }
    const initAdvocate = () => {
      getTools()
      console.log('avo inited');
    }

    return {
      init: initAdvocate,
      tools: getTools,
    }
  }

  //const getTools = () => { return avoInst().getTools() }

  const initMediator = () => {
    if (!avoInst) {
      avoInst = advocate
      avoInst().init()
    }
    return avoInst
  }

  return {
    init: initMediator,
    test,
    //tools: getTools,
  }

}
