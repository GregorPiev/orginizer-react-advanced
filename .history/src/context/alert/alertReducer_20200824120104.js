const handlers = {

    DEFAULT: state => state
}

export const AlertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
}