
const initialState = {
    data: []
}

const PersistedReducer = function (state = initialState, action) {
    switch (action.type) {
        case "1":
            let data = action.payload
            return {
                ...state,
                data
            }

        default:
            return state;
    }
}

export default PersistedReducer;