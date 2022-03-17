export function loggedIn(){
    return localStorage.getItem("token") ? true : false
}