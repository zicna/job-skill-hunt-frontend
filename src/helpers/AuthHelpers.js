export const loggedIn = () => (localStorage.getItem('token') ? true : false)
