export const storageService = {
    query,
    put
}

function query(key) {
    const entities = JSON.parse(localStorage.getItem(key)) || []
    return entities
}

function put(key, value) {
    const entities = query(key)
    entities.push(value)
    localStorage.setItem(key, JSON.stringify(entities))
    return value
}


