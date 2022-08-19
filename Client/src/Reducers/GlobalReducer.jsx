export default function reducer(state, action) {
    let newState;
    // action -> { type: "accion a realizar" }
    switch(action.type) {
        case "change-user-name":
            newState = { name: action.name }
            break
        default:
            throw Error("Unsuported action type", action.type);
    }
    return newState;
}