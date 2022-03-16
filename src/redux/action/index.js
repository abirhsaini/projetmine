export const addCart = (product) => {
    return {
        type: "addItem",
        payLoad: product
    }
}

export const deleteCart = (product) => {
    return {
        type: "deleteItem",
        payLoad: product
    }
}