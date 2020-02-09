import { combineReducers } from 'redux';

const monsterReducer = (monsters = [], action) => {
    if (action.type === "CREATE_MONSTER") {
        return [...monsters, action.payload]
    }
    if (action.type === "DELETE_MONSTER") {
        return monsters.filter(ms => ms.id !== parseInt(action.payload));
    }
    return monsters
}
const elementReducer = (element = {}, action) => {
    if (action.type === "SELECT_ELEMENT") {
        const elements = [
            {
                name: 'Air',
                id: 0,
                icon: 'icons/air.svg'
            },
            {
                name: 'Fire',
                id: 1,
                icon: 'icons/fire.svg'
            },
            {
                name: 'Earth',
                id: 2,
                icon: 'icons/earth.svg'
            },
            {
                name: 'Water',
                id: 3,
                icon: 'icons/water.svg'
            }
        ]
        return elements[action.payload]
    }
    return element
}
export default combineReducers({
    monsters: monsterReducer,
    selectedElement: elementReducer
})