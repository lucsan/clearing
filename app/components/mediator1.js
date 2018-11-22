const mediator = () => {
  let datum = {}
  let toolsInst
  let propsInst
  let propsDeptInst
  let setsInst
  let stageHandsInst

  const getTools = () => {
    if (!toolsInst) toolsInst = tools()
    return toolsInst
  }

  const getProps = () => {
    if (!propsInst) propsInst = things()
    return propsInst
  }

  const getPropsDept = () => {
    if (!propsDeptInst) propsDeptInst = thingsHandler(this)
    return propsDeptInst
  }

  const getSets = () => {
    
  }


  return {
    log: (msg) => getTools().log(msg),
    tools: getTools,
    props: getProps,
    propsDept: getPropsDept,
    setDatum: (name, value) => datum[name] = value,
    getDatum: (name) => datum[name],
    allDatum: () => datum
  }

}


// const mediator = () => {
//   let toolsInst = {}
//   let stageInst
//
//   const getTools = () => {
//     if (!toolsInst) {
//       toolsInst.log = (msg) => ( tools().log(msg) )
//     }
//     return toolsInst
//   }
//
//   const getStage = () => {
//     if (!stageInst) { stageInst = stage() }
//     return stageInst
//   }
//
//   const initAdvocate = () => {
//     getTools()
//     getStage()
//     console.log('avo inited');
//   }
//
//   return {
//     init: initAdvocate,
//     tools: getTools,
//     stage: getStage
//   }
// }

// const mediator = () => {
//   let avoInst
//
//   const test = () => {
//     console.log('avo');
//   }
//
//
//
//   //const getTools = () => { return avoInst().getTools() }
//
//   // const initMediator = () => {
//   //   if (!avoInst) {
//   //     avoInst = advocate
//   //     avoInst().init()
//   //   }
//   //   return avoInst
//   // }
//   //
//   // return {
//   //   init: initMediator,
//   //   test,
//   //   //tools: getTools,
//   // }
//
// }
