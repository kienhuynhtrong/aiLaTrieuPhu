export const hanldeGetDataLogin = (dataLogin) => ({
  type:'handleGetDaTaLogin',
  dataLogin
})
export const fetchImage = (dataFetch) => async(dispatch) => {
  try {
    const dataResponse = await fetch(`https://www.gravatar.com/avatar/${dataFetch}`);
    dispatch(profileImage(dataResponse.url))
  } catch(error){
    throw error
  }
}
export const profileImage = (dataImage) => ({
  type: 'profileImage',
  dataImage
})