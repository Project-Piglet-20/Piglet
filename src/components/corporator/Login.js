import React, { Component } from 'react';

class Login extends Component {
    submitHandler = (event) => {
        event.preventDefault();
        window.M.toast({html: 'Successfully Logged in! :)', classes: 'rounded'});
        this.props.history.push('/corporator');
    }
    render() {
        return (
            <div onSubmit= { event => this.submitHandler(event) } className= "container" style= {{height: '625px'}}>
                    <br/>
                    <form className="col s12">  
                    <div className= "container">
                        <div className="card-panel hoverable">
                            <h3 className= "center"> <i className= "material-icons prefix">account_box</i> Login screen </h3>
                            <br/>
                            <div className="card-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <label> <i className="material-icons left">email</i> Email</label>
                                            <input type="text"/> 
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input type="password"/>
                                            <label> <i className="material-icons left">vpn_key</i> Password </label>
                                        </div>
                                    </div>
                                </div>
                                <br/> 
                                <div className= "card-content center">
                                    <button className= "btn waves-effect waves-light center" type= "submit"> <i className="material-icons left">login</i> Login </button>
                                </div>
                                <br/>
                            </div>
                        </div>
                        <br/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;