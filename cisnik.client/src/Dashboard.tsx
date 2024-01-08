import {render} from "react-dom";

import './assets/css/base.css';
import './assets/css/dashboard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import logo from './assets/img/logo.svg';

// ikony
import {faSignInAlt} from '@fortawesome/fontawesome-free-solid';
import {faExclamationCircle} from '@fortawesome/fontawesome-free-solid';
import {faSpinner} from '@fortawesome/fontawesome-free-solid';


export default function LoginForm() {
    return (
        <form onSubmit={loginSend}>
            <div id="outer">
                <div id="middle">
                    <div id="inner">
                        <a href="/" id="logo"><img src={logo}/></a>
                        <div id="box">
                            <div className="space-top-40"></div>
                            <input type="text" name="username" id="user" className="input" placeholder="Uživatelské jméno"/>
                            <input type="password" name="password" id="pass" className="input" placeholder="Heslo"/>
                            <div id="btn">
                                <LoginButton value={0}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

async function loginSend(event) {
    const btn  = document.querySelector("#btn");
    render(<LoginButton value={1}/>, btn);
    event.preventDefault();
    await timeout(500);
    if (!true) {
        document.location.reload();
    } else {
        render(<LoginButton value={2}/>, btn);
    }

}
function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}

function LoginButton(status : {value: number}) {
    switch (status.value) {
        case 0:
            return (
                <button className="btn-login btn-neutral" id="btn-login" name="login">
                    <span className="btn-login-text"><FontAwesomeIcon icon={faSignInAlt} />&nbsp; Přihlásit se</span>
                </button>
            );
        case 1:
            return (
                <button className="btn-login btn-neutral" id="btn-load" name="login">
                    <span className="btn-login-text"><FontAwesomeIcon icon={faSpinner} spin />&nbsp; Načítání...</span>
                </button>
            );
        case 2:
            return (
                <button className="btn-login btn-error" id="btn-error" name="login">
                    <span className="btn-login-text"><FontAwesomeIcon icon={faExclamationCircle} />&nbsp; Neplatné údaje!</span>
                </button>
            );
        default:
            console.log("ERROR 00001");
            return null;
    }
}