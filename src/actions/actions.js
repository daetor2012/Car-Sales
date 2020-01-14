export const addType = (feature) => {
    return {
        type: "ADD", 
        payload: feature
    }
}

export const removeType = (feature) => {
    return {
        type: "REMOVE", 
        payload: feature
    }
}

