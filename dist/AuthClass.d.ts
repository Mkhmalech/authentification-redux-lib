import { Dispatch } from "redux";
export declare class Auth {
    private Email;
    private Password;
    constructor();
    setEmail: (email: string) => string;
    setPassword: (password: string) => string;
    goIn: (dispatch: Dispatch<import("redux").AnyAction>) => void;
}
