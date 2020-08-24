import { SHOW_ALERT, HIDE_ALERT } from "../type";

const handlers = {
    [SHOW_ALERT]: (state, { payload }) => ({ ...payload, visible: true }),
    [HIDE_ALERT]: (state, { payload }) => ({ ...payload, visible: false }),
    DEFAULT: state => state
}

export const AlertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;
    return handle(state, action);
}