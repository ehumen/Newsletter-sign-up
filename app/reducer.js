export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'newEmail': {
            return {
                ...state, email: action.email,
            }
        }
        case 'refresh': {
            return {
                ...state, subscribe: action.unSubscribe, email: ''
            }
        }
        case 'subscribed': {
            return {
                ...state, subscribe: action.subscribe
            }
        }
        default:
            return state
    }
}

