const initialState = {
  name: '',
  ravatarEmail: '',
}
const player = (state = initialState, action) => {
  switch (action.type) {
    case 'handleGetDaTaLogin':
      console.log(action)
      return {
        ...state,
        name: action.dataLogin.name,
        ravatarEmail: action.dataLogin.email
      }
    default:
      return state;
  }

}
export default player