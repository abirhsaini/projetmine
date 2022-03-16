const cart = [];

export const handleCart = (state = cart, action) => {
    const product = action.payLoad;
    switch (action.type) {
        case "addItem":

            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1 } : x)
            } else {
                const product = action.payLoad;
                return [...state, {
                    ...product,
                    qty: 1
                }]
            }



        case "deleteItem":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id)
            } else {
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty - 1 } : x)
            }
            break;
        default:
            break;
    }


}