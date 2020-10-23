import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cyclone from "./assets/CycloneIndexLogo.png";
import Header from './components/Header';
import Nav from './components/Nav';
import Homework from './components/Homework';
import Comments from './components/Comments';
import Solution from './components/Solution';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            netID: '',
            password: '',
            error: '',
            login_success: false,
        };

        this.dismissError = this.dismissError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleNetIDChange = this.handleNetIDChange.bind(this);
    }

    dismissError(){
        this.setState({error: ''});
    }

    handleSubmit(event){
        event.preventDefault();

        if(!this.state.netID){
            return this.setState({error: 'ISU netID is required' });
        }
        else if(!this.state.password){
            return this.setState({error: 'Please enter password' });
        }
        else{
            this.setState({login_success: true});
        }
        return this.setState({error: '' });
    }

    handleNetIDChange(event){
        this.setState({
            netID: event.target.value,
        });
    }

    handlePassChange(event){
        this.setState({
            password: event.target.value,
        });
    }

    render(){
        if(this.state.login_success){
            return(
                <div>
                    <Header />
                    <Nav/>
                    <Homework />
                    <Solution />
                    <Comments />
                </div>
            );
        }
        return(
            <div class="a">
				<img src={Cyclone} alt="Cyclone Logo"/>
                <h1>
                    <logo>SoCYety</logo>
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Net ID</label><br />
                    <input type="text" value={this.state.netID} onChange={this.handleNetIDChange} placeholder="Enter Net-ID"/><br /><br />
                    <label>Password</label><br />
                    <input type="password"  value={this.state.password} onChange={this.handlePassChange} placeholder="Enter password"/><br/><br/>
                    <input type="submit" value="Log in" />
					<input type="button" value="Sign up" />
					<br></br>
					<br></br>
					<div class="g-signin2" data-onsuccess="onSignIn"></div>
                    {
                        this.state.error &&
                        <p data-test="error" onClick={this.dismissError}>
                            ✖ {this.state.error}
                        </p>
                    }
                </form>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));