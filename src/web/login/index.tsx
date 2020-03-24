import * as React from 'react';
import { UserField, Fields } from "../../common/Fields";
import { Label } from "../../common/Label";
import { Input } from "../../common/Input";
import { Button, LinkButton } from "../../common/Button";
import { FormContainer } from "../../common/Form";
import { Link } from "react-router-dom";
import { Ico } from '../../../../react-icons-sc/src/ico';
import {user } from '../../icons/user'
import {email } from '../../icons/email'

// styles


interface PropsFromContext {

}


export const Page: React.FunctionComponent<PropsFromContext> = () => {
    return (
        <>
            <FormContainer>
                <UserField>
                    <Label htmlFor="Email">
                        <Ico {...user} 
                            styles={`
                                height: 100%;
                                display: inline-block;
                                width: 100%;
                                background:  rgb(239, 240, 243);
                            `}
                        />
                    </Label>
                    <Input
                        type="text"
                        placeholder="Email"
                    />
                </UserField>
                <Fields>
                    <Label htmlFor="txtPassword">
                        <Ico {...email} 
                            styles={`
                                height: 100%;
                                display: inline-block;
                                width: 100%;
                                background:  rgb(239, 240, 243);
                            `}
                        />
                    </Label>
                    <Input
                        type="password"
                        placeholder="Password"
                    />
                </Fields>
                <Button
                    type="submit"
                >
                    <span >Log in</span>
                </Button>
                <LinkButton><Link to="/website/auth/signup" >Creer Un Compte</Link></LinkButton>
                <LinkButton><Link to="/website/auth/reset-password" >J'Arrive Pas Acceder A Mon Compte?</Link></LinkButton>
            </FormContainer>
        </>
    );
}
