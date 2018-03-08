const {createStore} = require ('redux');

//actions:
const increment ={
  type :'INCREMENT'
};

const decrement ={
  type :'DECREMENT'
};

const initialState=0;


function reducer(state=initialState, action) {
  switch (action.type){
    case 'INCREMENT':
      return state+1;
     // break;
     case 'DECREMENT':
     return state-1;
    default:
      return state;

  }
}


const stor = createStore(reducer);

const unsubscribe=stor.subscribe(()=>{
  console.log(stor.getState());
})


const interval=setInterval(()=>{
  stor.dispatch(increment);

  if (stor.getState() >=10){
    clearInterval(interval);
    unsubscribe();
  }
},1000)


//stor.dispatch(increment);
//stor.dispatch(increment);
//stor.dispatch(increment);
