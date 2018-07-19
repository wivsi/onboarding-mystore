import React from 'react';

class Form extends React.Component{
    state = {
        email: "",
        phone: ""
    }
    
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state); 
        console.log("Redirect to Stage2 with this object: ", this.state);
    }

    render(){
        return(
            <form>
                <input 
                name = 'email'
                placeholder="Email" 
                value={this.state.email} 
                onChange={e => this.change(e)}/>
                
                <input 
                name = 'phone'
                placeholder="Phone" 
                value={this.state.phone} 
                onChange={e => this.change(e)}/>

                <button onClick={e => this.onSubmit(e)}> Submit </button>
            </form>
        )
    }
}

export default Form;