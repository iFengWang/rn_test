
//通用中间层1原理---------------------------------------------
// function ttt(action) {
//   console.log('target......',action);
// }

// function logger(dispatch) {
//   return function(action) {
//     console.log('logger........');
//     return dispatch(action);
//   }
// }

// function crash(dispatch) {
//   return function(action) {
//     console.log('crash........');
//     return dispatch(action);
//   }
// }

// function applyLogger(middles, targetFun) {
//   middles.reverse();
//   middles.forEach(middleFun => {
//     targetFun = middleFun(targetFun);
//   });
//   return targetFun;
// }
// export default applyLogger([logger, crash], ttt);

//通用中间层2原理----又套一层-------------------------------------
// function ttt(action) {
//   console.log('target......');
// }

// function logger() {
//   return function(next) {
//     return function(action) {
//       console.log('logger......');
//       return next(action);
//     }
//   }
// }

// function crash() {
//   return function(next) {
//     return function(action) {
//       console.log('crash......');
//       return next(action);
//     }
//   }
// }

// function applyLogger(middles, targetFun) {
//   middles.reverse();

//   let tmp = targetFun;
//   middles.forEach(middleFun => {
//     tmp = middleFun()(tmp);
//   });
//   return tmp;
// }
// export default applyLogger([logger, crash], ttt);

//redux中间层原理----------------------------------------------
// function logger(store) {
//   return function wrapDispatchToAddLogging(next) {
//     return function dispatchAndLog(action) {
//       console.log('dispatching', action)
//       let result = next(action)
//       console.log('next state', store.getState())
//       return result
//     }
//   }
// }

// function applyMiddleware(store, middlewares) {
//   middlewares = middlewares.slice()
//   middlewares.reverse()

//   let dispatch = store.dispatch
//   middlewares.forEach(middleware =>
//     dispatch = middleware(store)(dispatch)
//   )
//   return Object.assign({}, store, { dispatch })
// }

//redux中间层示例---------------------------------------------
export const logger = store => next => action => {
  console.log('1..中间层........',action);
  let result = next(action);
  console.log('1..中间层........',store.getState());
  return result;
}

export const crash = store => next => action => {
  console.log('2..中间层........');
  return next(action);
};
