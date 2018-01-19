import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../src/action/actions.js'
import {Redirect} from 'react-router-dom';
import {store} from './util'


class Login extends Component {
  constructor(props){
    super(props);
    this.username='';
    this.password='';
    
    this.state = {
      redirectToReferrer: false, userName:'',userCount:0
    }
   
  }
  authenticateUser(){
    this.setState({redirectToReferrer:true,userName:this.username})
      store.dispatch({
        type:"LoggedinUser",
        data:this.username
      })
  }
  componentWillReceiveProps(nextProps){
    let userList = nextProps.userList.results;
    let nextUrl = nextProps.userList.next; 
    let count =1
    if(userList){
      for(let i in userList){
      if(this.username === userList[i].name){
        if(this.password === userList[i].birth_year){
          this.authenticateUser();      
          return;
        }
        console.log("Password Mismatch")
        return;
      }
      else{  
        if(count === userList.length){
          this.props.loadUser(nextUrl)           
        }
        count++             
      }
    }
    }
  }
  
  render() {
    if(this.state.redirectToReferrer){
     return (
      <Redirect to={{
        pathname: '/user:'+this.username,
        state:{...this.state}
      }}/>
     )
    }
    else{
    return (
      <div className="main-container">
      
      <div>
        
       <input type="text" placeholder="Enter user name..." onChange={(e)=>{this.username=e.target.value}}/>
       </div>
       <div>
        <input type="password" placeholder="Enter password..." onChange={(e)=>{this.password=e.target.value}}/>
       </div>
       <div>
        <button onClick={()=>{this.props.loadUser("https://swapi.co/api/people/?page=1")}}>Login</button>
       </div>
      </div>
    );
  }
  }
}


const mapStateToProps=(state)=>{
  return {
    userList: state.userList
  }
};
export default connect (mapStateToProps,actionCreators)(Login);
