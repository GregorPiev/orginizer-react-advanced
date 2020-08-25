export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || action.DEFAULT;
    return handle(state, action);
}