import { createStore } from "vuex";

export default createStore({
    state: {
        CapsLock: false,
        ru: false,
        pressedButtons: [],
    },
    getters: {},
    mutations: {
        changeLang(state) {
            state.ru = !state.ru;
        },
        changeCapsLock(state) {
            state.CapsLock = !state.CapsLock;
        },
        addPressedButtons(state, item) {
            state.pressedButtons.push(item);
        },
        cleanPressedButtons(state) {
            state.pressedButtons = [];
        },
    },
    actions: {},
    modules: {},
});
