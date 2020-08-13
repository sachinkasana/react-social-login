import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import {GOOGLE_KEY, FB_KEY} from '../config';

export class Login extends Component{
    constructor(){
        super();
        this.state={
            isAuthenticated:false,
            user:null,
            token:''
        }
    }

    responseGoogle = (response) => {
        console.log(response);
      }

    responseFacebook = (response) => {
        console.log(response);
      }

    render(){
        return(
            <React.Fragment>
                <div style={{"padding" : "10px"}}>
            <GoogleLogin
    clientId={GOOGLE_KEY}
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    buttonText="Login with Google"
    cookiePolicy={'single_host_origin'}
  >
  </GoogleLogin>
  </div>
  <div>

<FacebookLogin
appId={FB_KEY}
autoLoad={true}
fields="name,email,picture"
callback={this.responseFacebook} />
</div>
</React.Fragment>
        )
    }

}