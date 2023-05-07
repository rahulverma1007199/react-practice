// For testing we have create it inside component but for advance uses assign a differnt directory

//we start with INITIAL_STATE and add as many states we like
export const INITIAL_STATE = {
    loading:false,
    post:{},
    error:false,
}

// the we create a reducer function and it takes the current state and the action (what we are trying to impose)
// this function also return the new version of state
export const postReducer = (state,action) =>{
    // if(action.type === "FETCH_START"){
    //     return {
    //         loading:true,
    //         post:{},
    //         error:false,
    //     }
    // }else if (action.type === "FETCH_SUCCESS"){
    //     return {
    //         loading:false,
    //         post:action.payload,
    //         error:false,
    //     }
    // }else if (action.type === "FETCH_ERROR"){
    //     return {
    //         loading:false,
    //         post:{},
    //         error:true,
    //     }
    // }
    //it's always prefer to use switch case than if else
    switch (action.type){
        case"FETCH_START" :
            return {
                loading:true,
                post:{},
                error:false,
            }
        case"FETCH_SUCCESS" :
            return {
                loading:false,
                post:action.payload,
                error:false,
            }
        case"FETCH_ERROR" :
            // return {
            //    ...state, with this we are keeping everthing same and change only the error value and this can be used for more state properties
            //     error:true,
            // }
            return {
                loading:false,
                post:{},
                error:true,
            }
        default :
            return state;
    }
}
