import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
 import ReactPlayer from 'react-player'
import { bindActionCreators } from "redux";
import {loadVideosMostPopular} from './action/actions'
class Userinfo extends Component {

  constructor(props){
    super(props);

    this.state ={
      videosList:[]
    }
  }
  
  componentWillMount(){
  this.LoggedInUser = this.props.history.location.state.userName;
  }
  componentDidMount(){
    this.props.loadVideosMostPopular()
    
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.videoList,"&&&&&&&")
    if(nextProps.videoList!== this.props.videoList)
    this.setState({videosList:nextProps.videoList.items})
  }
  render() {
    let videos=[]
    let videosList =this.state.videosList
    console.log(videosList,"videoslist")
    for(let i in videosList){
      let url ='https://www.youtube.com/watch?v='+videosList[i].id
      videos.push(
        <div>
          <ReactPlayer url={url} playing />
        </div>
      );
    }
    console.log(this.props.userList,"userinfo2")
    if(this.props.history.location.state){
      return (
        <div className="main-container">
        <div className="user-welcome">
        Welcome {this.LoggedInUser}
        </div>
        <div>
          {
            this.state.videosList?
            videos:
            'not avbl'
          }
        {/* <ReactPlayer url='https://www.youtube.com/watch?v=Ks-_Mh1QhMc' playing /> */}
          </div>
        </div>
      );
    }
    else{
      return(
      <Redirect push to={{
        pathname: '/',
      }}/>)
    }
  }
}
const mapStateToProps=(state)=>{
  return{
    userList:state.userList.results,
    videoList:state.videoList
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    loadVideosMostPopular: bindActionCreators(loadVideosMostPopular,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Userinfo);
