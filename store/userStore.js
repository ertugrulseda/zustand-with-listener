import { create } from 'zustand';
import { persist, createJSONStorage, subscribeWithSelector } from 'zustand/middleware';
import { loginService } from '../src/pages/api/services'


const initialUserState = (set, get) => {
    return {
        userName: "",
        userPass: "",
        isAuthenticated: false,
        jwtToken: "",
        setUserName: (userName) => {
            set({ userName })
        },
        setUserPass: (userPass) => {
            set({ userPass })
        },
        login: async () => {
            const response = await loginService(get().userName, get().userPass);
            const { status, jwttoken } = response || {}
            if (status === 200) {
                set({ isAuthenticated: true, jwtToken: jwttoken })
                console.log(get().isAuthenticated, get().jwtToken);
            } else {
                set({ isAuthenticated: false, jwtToken: "" })
            }
        },
        logout: () => {
            set({ userName: "", userPass: "", isAuthenticated: false, jwtToken: "" })
            console.log(get().isAuthenticated, get().jwtToken);
        }
    }
}



/*const initialUserState = (set) => ({
    userName: "SEdaaaaa",
    userPass: "12345",
    isAuthenticated: false,
    changeUserName: () => set((state) => ({ userName: "yusuf" })),
})*/


export const userStore = create(persist((set, get) => {
    return initialUserState(set, get);
}, {
    name: 'user-storage', // unique name
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    partialize: (s) => ({ userName: s.userName, jwtToken: s.jwtToken, isAuthenticated: s.isAuthenticated })
}));
