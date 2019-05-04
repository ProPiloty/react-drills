import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super();

        this.state = {
            usernameInput: '',
            passwordInput: '',
        }
    }

    handleUsernameInput = (username) => {
        this.setState({
            usernameInput: username,
        })
    }

    handlePasswordInput = (password) => {
        this.setState({
            passwordInput: password,
        })
    }

    handleSubmit = (e) => {
        alert(`Username: ${this.state.usernameInput} Password: ${this.state.passwordInput}`);
    }

    render(){
        return (
            <div>
                <input type='text' onChange={e => this.handleUsernameInput(e.target.value)} />
                <input type='text' onChange={e => this.handlePasswordInput(e.target.value)} />
                <button onClick={e => this.handleSubmit()} >Login</button>
            </div>
        )
    }
}

export default Login;