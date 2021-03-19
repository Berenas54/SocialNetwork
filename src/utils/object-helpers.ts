export const updateObjectInArray = (items: any, itemID: string, objPropName: any, NewObjProps: {}) => {
   //сделать типизацию
    return items.map
        // @ts-ignore
        (u => {
            if (u[objPropName] === itemID) {
                return {...u, ...NewObjProps}
            }
            return u
        })
}