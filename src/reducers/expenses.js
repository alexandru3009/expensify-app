
//Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState ,action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            //state.concat(action.expense)
            //concat nu schimba state,doar combina valorile din array...adica adauga o valoare la cele existente
            //push schimba state-ul state.push de ex
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                //if the id is the same
                if(expense.id === action.id) {
                    return {
                        //we take all the values and using updates we will be able to modify the properties
                        ...expense,
                        ...action.updates 
                    };
                } else {
                    return expense;
                };
            });
            default:
            return state;
    }
};

//export default expensesReducer; sau abordam de mai sus