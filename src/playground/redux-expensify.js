import { createStore, combineReducers } from 'redux';


//Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) =>{
  switch(action.type) {
    default:
      return state
  }
}

//Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) =>{
  switch(action.type) {
    default:
      return state
  }
}

//store creation

const store = createStore(combineReducers(
  { expenses: expensesReducer,
    filters: filtersReducer
  }
  
  ))

// const store = createStore(expensesReducer)

console.log(store.getState()) 

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

