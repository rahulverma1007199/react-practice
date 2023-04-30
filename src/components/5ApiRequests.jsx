import React, { useEffect } from 'react'
// so every time we make an api request and set the data into any state
// in the use effect create a varibale  and assign a boolean to it, if that is the condition, we set the state and if that is not the we don't set the state 
// to set not the state is via assign the opposite value to that variable in cleanup function
const ApiRequests = () => {
    useEffect(()=>{
        const isFetch = true;
        if(isFetch){
            // do something
        }
        return ()=> {
            isFetch = false;
        }
    },[]);
    //post example and multiple user example -- updating state delay (problem) -- use clean up to solve
    // it also helps to cancle the API request, but for beginners only
    // for advacnce canceling the API request use --AbortController() function below is the commented example for fetch js method
    // useEffect(()=>{
    //     const controller = new AbortController();
    //     const signal = controller.signal();
    //     // pass the signal into the option 
    //     //try{
            //  fetch('/',{signal});
            // }
            // catch(err){
            //     if(err.name === 'AbortError'){
            //         console.log('canceled');
            //     }else{
                    // todo handle error -- via making making an error state
            //     }
            // }
    //     return() => {
    //         controller.abort();
    //     }
    // },[]);

    //axios 
       // useEffect(()=>{
    //     const cancelToken =axios.CancelToken.source();
    //     // pass the signal into the option 
    //     //try{
            //  axios.get('/',{cancelToken :cancelToken.token});
            // }
            // catch(err){
            //     if(axios.isCancel(err)){
            //         console.log('canceled');
            //     }else{
                    // todo handle error -- via making making an error state
            //     }
            // }
    //     return() => {
        // cancelToken.cancel()
    //     }
    // },[]);
  return (
    <div>5ApiRequests</div>
  )
}

export default ApiRequests