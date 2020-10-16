import API from 'goals-todos-api'
export const RECEIVE_DATA = 'RECEIVE_DATA'

function receiveData(todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals,
    }
}

export function handleInitialData() {
    return (dispatch) => {
        //using promise.all to fetch data from the database
        return Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then(([todos, goals]) => {
            dispatch(receiveData(todos, goals))
        })
    }
}