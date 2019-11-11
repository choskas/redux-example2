import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'
//ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description: '',
    note: '',
    amount: 0,
    createdAt : 0

  }
})

//Remove expense

const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})

//EDIT_EXPENSE 
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

//Change text
const setTextFilter = (text= '') => ({
  type: 'CANGE_TEXT',
  text
})

//Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) =>{
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, 
              action.expense
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id) 
    default:
      return state
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })  
  
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
    case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text
        }
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

  store.subscribe(()=>{
    console.log(store.getState()) 
  })

  const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100}))


  store.dispatch(removeExpense({id: expenseOne.expense.id}))
  store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))
  console.log(expenseOne)
// const store = createStore(expensesReducer)



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

const user = {
  name: 'PUTO',
  age: 24
}

console.log({...user, location: "mi casa"})