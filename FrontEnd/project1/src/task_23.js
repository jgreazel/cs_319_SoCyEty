class App extends React.Component{
    constructor(){
        super();
        this.state = {
            netID: '',
            password: '',
            error: '',
        };

        this.dismissError = this.dismissError.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handlenetIDChange = this.handlenetIDChange.bind(this);
    }

    dismissError(){
        this.setState({error: ''});
    }

    handleSubmit(event){
        event.preventDefault();

        if(!this.state.netID){
            return this.setState({error: 'ISU netID is required' });
        }

        if(!this.state.password){
            return this.setState({error: 'Please enter password' });
        }

        return this.setState({error: '' });
    }

    handlenetIDChange(event){
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
        return(
            <div className="Login">
                <h1>
                    <logo>SoCYety</logo>
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Net ID</label><br />
                    <input type="text" data-test="netid" value={this.state.netID} onChange={this.handlenetIDChange}/><br /><br />
                    <label>Password</label><br />
                    <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange}/><br/><br/>
                    <input type="submit" value="Log in" data-test="submit" />
					<input type="button" value="Sign up"/>
					<br></br>
					<br></br>
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

ReactDOM.render(<App />, document.getElementById("app"));
