import { Component } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

import './index.css'



class LoginForm extends Component {
   state={
    username:'',
    password:'',
    isError:false,
    error_msg:''
   }

   componentDidMount(){
    this.onSubmitLogin
   }

   onChangeUsername = event => {
    this.setState({username:event.target.value})
   }

   onChangePassword = event => {
    this.setState({password:event.target.value})
   }

   successForm = jwt_token => {
    
    Cookies.set('jwt_token',jwt_token,{expires:30})
    const {navigate} = this.props
    navigate('/')
    
    console.log('success')
   }

   failureForm = error_msg =>{
    this.setState({isError:true,error_msg})
   }

   onSubmitLogin = async event =>{
      event.preventDefault()
      const {username,password} = this.state
      
      const userDetails={username,password}
      const url='https://apis.ccbp.in/login'
      const options = {
        method:'POST',
        body:JSON.stringify(userDetails)
      }
      const response = await fetch(url,options)
      console.log(response)
      const data = await response.json()
      console.log(data)

      if (response.ok===true){
        console.log('true')
        this.successForm(data.jwt_token)
      }else{
        this.failureForm(data.error_msg)
      }
   }

   render(){
      const {username,password,isError,error_msg} = this.state
       
    return(
      <div className='login-container'>
          <img src="https://thumbs.dreamstime.com/b/mp-initial-logo-company-name-colored-red-black-swoosh-design-isolated-white-background-vector-business-identity-199335178.jpg"
           alt="not-found" 
           className='login-image' />
           <form className='login-card' onSubmit={this.onSubmitLogin}>
              <h1 className='log-head'>LOGIN</h1>
              <p className='note'>Note:- Username: henry,
                        password: henry_the_developer
              </p>

              <div className='input-con'>
                <label htmlFor='name' className='label'>NAME</label> 
                <input id="name" type='text'
                  className='input'
                  value={username}
                  onChange={this.onChangeUsername}  />
              </div>
              <div className='input-con'>
                <label htmlFor='password' className='label'>PASSWORD</label> 
                <input id="password" type='text'
                  className='input'
                  value={password}
                  onChange={this.onChangePassword}  />
              </div>
              <button type='submit' className='submit-btn' >Submit</button>
              {isError?(<p className='error-msg'>{error_msg}</p>):''}
           </form>
      </div>
    )
   }
}

export default LoginForm