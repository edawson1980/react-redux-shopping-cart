export default(state = [], action) => {
  switch(action.type){
    case 'ADD-ITEM':
      return [...state, action.item]
    case 'RETURN-ITEM':
      let newCart = [...state];
      newCart.splice(action.item, 1);
      return newCart;
    default:
      return state
  }
}
