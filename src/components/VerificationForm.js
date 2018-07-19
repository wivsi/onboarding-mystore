import React from 'react';

class VerificationForm extends React.Component{
    state = {
        code1: "",
        code2: "",
        code3: "",
        code4: ""
    }
    
  change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });

        let valueLength = e.target.value.length;
        let maxLength = e.target.maxLength;

        // Change focus to next input
        if(valueLength >= maxLength){
            var next = e.target;
            while (next = next.nextElementSibling) {
                if (next == null)
                    break;
                if (next.tagName.toLowerCase() === "input") {
                    next.focus();
                    break;
                }
            }
        }
        // Go back with backspace
        else if(valueLength === 0){
            var previous = e.target;
            while (previous = previous.previousElementSibling) {
                if (previous == null)
                    break;
                if (previous.tagName.toLowerCase() === "input") {
                    previous.focus();
                    break;
                }
            }
        }
    }

    onSubmit = e => {
        e.preventDefault();
        let code = this.state.code1 + this.state.code2 + this.state.code3 + this.state.code4;
        this.props.onSubmit(code);
    }

    render(){
        return(
            <form className="verificationInput">
                <input 
                name="code1"
                value={this.state.code1}
                maxLength='1'
                autoFocus
                onChange={e => this.change(e)}/> 

                <input 
                name="code2"
                value={this.state.code2}
                maxLength='1'
                onChange={e => this.change(e)}/> 

                <input 
                name="code3"
                value={this.state.code3}
                maxLength='1'
                onChange={e => this.change(e)}/> 

                <input 
                name="code4"
                value={this.state.code4}
                maxLength='1'
                onChange={e => this.change(e)}/> 

                <button onClick={e => this.onSubmit(e)}> Validate </button>
            </form>
        )
    }
}

export default VerificationForm;