import * as React from 'react';
import { AuthFooter } from './authFooter'
import { AuthContainer, AuthContent, LoginGlobalStyle } from './authBody'
import { Brand } from './authBrand'
import { useRouteMatch, Route, Redirect } from 'react-router-dom';
import { Page } from './login'
import { Signup } from './signup'
import { ResetPassword } from './resetpassword'


interface IAuthComponentProps {}

export const AuthComponent: React.FunctionComponent<IAuthComponentProps> = (props) => {

  const match = useRouteMatch();

  return (
    <>
      <LoginGlobalStyle />

      <AuthContainer>
        <Brand />
        <AuthContent>

            <Route path={`/website/auth/login`} component={Page} />

            <Route path={`/website/auth/signup`} component={Signup} />

            <Route path={`/website/auth/reset-password`} component={ResetPassword} /> 

            <Redirect to={`/website/auth/login`} />

        </AuthContent>
        <AuthFooter />
      </AuthContainer>

    </>
  );
};

