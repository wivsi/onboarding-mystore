import React from 'react';
import HeaderText from './HeaderText';
import VerificationForm from './VerificationForm';

class Stage2 extends React.Component{
    state  = {
        sms_code: ""
    };

    onSubmit = sms_code => {
        this.setState({sms_code})

        // Check here if the code is equal to the generated code
        // If the code is equal -> Redirect client to Stage3 and generate a demo for the client
    }

    render(){
        return(
            <div>
                <HeaderText headerTitle={"Verification"} headerSub={"Please enter the four digits to activate your account"}/>
                <VerificationForm onSubmit={code => this.onSubmit(code)} /> 
                <p>You entered code: {(this.state.sms_code)}</p>
            </div>
        );
    }
}

export default Stage2;