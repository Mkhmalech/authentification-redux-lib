import * as React from 'react';
import { AuthFooter } from './authFooter'
import { AuthContainer, AuthContent, LoginGlobalStyle } from './authBody'
import { Brand } from './authBrand'
import { useRouteMatch, Route, Redirect } from 'react-router-dom';
import {LoginComponent} from './login'
import { Signup } from './signup'
import { ResetPassword } from './resetpassword'
import { Auth } from '../controller/auth';
import { IttyniState } from '../../../store';
import { connect } from 'react-redux';


interface IAuthComponentProps extends AuthLoginState{}

export const AuthComponent: React.FunctionComponent<IAuthComponentProps> = ({isAuth, username, userId}) => {
  const labtests = new Auth()
    labtests.isLogged()
  if(!isAuth){
    return (
      <>
        <LoginGlobalStyle />
  
        <AuthContainer>
          <Brand />
          <AuthContent>
              
              <Route path={`/website/auth/login`} component={LoginComponent} />
  
              <Route path={`/website/auth/signup`} component={Signup} />
  
              <Route path={`/website/auth/reset-password`} component={ResetPassword} /> 
  
              <Redirect to={`/website/auth/login`} />
  
          </AuthContent>
          <AuthFooter />
        </AuthContainer>
  
      </>
    );
  } else {
    return (<Redirect to={{
      pathname : `/admin/${username}/`,
      state : {
        isAuth : isAuth,
        userId : userId,
        username : username
      }
    } } />)
  }
};

const mapStateToProps = ({ Auth }: IttyniState) => ({
  isAuth: Auth.login ? Auth.login.isAuth : false,
  username: Auth.login ? Auth.login.username : undefined,
  userId : Auth.login ? Auth.login.userId : undefined
})

export default connect(mapStateToProps)(AuthComponent);