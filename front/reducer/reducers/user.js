export const initialState = {
    isLoggedIn:false,
    me:null,
    signUpData:{},
    loginData:{},
}

export const loginAction = (data)=>({
    type:"LOG_IN",
    data
})
export const logoutAction = (dta)=>({
    type:"LOG_OUT",
})

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "LOG_IN":
            return {
                ...state.user,
                isLoggedIn:true,
                me:action.data
            }
            case "LOG_OUT":
                return {
                    ...state.user,
                    isLoggedIn:false,
                    me:null,
                }
        default :
            return state;
    }
}

export default reducer;