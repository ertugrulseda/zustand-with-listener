import { userStore } from "store/userStore"


export const loginService = (username, pass) => {

    const isAuthenticated  = userStore.getState().isAuthenticated;
    const logout  = userStore.getState().logout;
    return new Promise((res, rej) => {

        if (username === "seda" && pass === "123") {
            res({ status: 200, jwttoken: '1x2x3x4t' })
        }
        else {
            logout();
            rej({ status: 401, jwttoken: '' })

        }
    })
}
