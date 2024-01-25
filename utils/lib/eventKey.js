function enter(callback){
  if(event.key === 'Enter'){
    callback()
  }
}

export {enter}