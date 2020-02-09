export const createMonster = (monster) => {
    return {
        type: "CREATE_MONSTER",
        payload: monster
    }
}

export const deleteMonster = (monsterId) => {
    return {
        type: "DELETE_MONSTER",
        payload: monsterId
    }
}

export const selectElement = (elemId) => {
    return {
        type: "SELECT_ELEMENT",
        payload: elemId
    }
}
