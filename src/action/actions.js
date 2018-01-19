
import axios from "axios";

export function loadUser(url){
    console.log(url)
    return(dispatch)=>{
        return axios.get(url).then((response)=>{
            dispatch(getUser(response.data))
        })
    }
}

export function loadVideosMostPopular(){
    console.log("I am called")
    return(dispatch)=>{
        return axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params:{'chart': 'mostPopular',
            'regionCode': 'US',
            'part': 'snippet,contentDetails,statistics',
            'key':' AIzaSyD5eCLwLV6cLKJWxzr6fgcn5KRJno3eop8 ',
            'videoCategoryId': ''}
        }
       
    ).then((response)=>{
            dispatch(getVideos(response.data))
        })
        .catch((error)=>{
            console.log(error,"erroe")
        })
    }
}
export function getVideos(videoList){
    console.log("2")
    return{
        type:"VIDEOS_LIST",
        videoList:videoList
    }
}
export function getUser(userList){
    return{
        type:"USERS",
        userList:userList
    }
}