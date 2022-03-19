export const removeToken = () => {localStorage.removeItem("token")}

export const getToken = () => localStorage.getItem("token")

export const clearLocalStorage = () => localStorage.clear()