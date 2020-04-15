import {data} from "./data"
const initState = {
    items:data
}
const shopReducer = (state = initState , action)=>{
    switch(action.type){
        default:
            return state;

    }
}
export default shopReducer ;