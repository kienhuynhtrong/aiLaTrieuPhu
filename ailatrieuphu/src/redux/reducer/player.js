const initialState = {
  name: '',
  ravatarEmail: '',
  profileImage: ''
}
const player = (state = initialState, action) => {
  switch (action.type) {
    case 'handleGetDaTaLogin':
      return {
        ...state,
        name: action.dataLogin.name,
        ravatarEmail: action.dataLogin.email
      }
    case 'profileImage':
      return {
        ...state,
        profileImage: action.dataImage
      }
    default:
      return state;
  }

}
export default player