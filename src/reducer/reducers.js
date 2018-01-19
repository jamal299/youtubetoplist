let defaultState={
    userList:{},
    videoList:{}
}

const mainReducer=(state=defaultState,action)=>{
switch(action.type){
    case "USERS":
    console.log(action.userList,"UserList")
    return{
        userList:Object.assign({},action.userList)
    };
    case "VIDEOS_LIST":
    return{
        ...state,
        videoList:Object.assign({},action.videoList)
    };
     default:
    
        return{
            ...state
        };
            

}
}
export default mainReducer;