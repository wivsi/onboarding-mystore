import React from 'react';

import HeaderText from './HeaderText';
import Form from './Form';

class Stage1 extends React.Component{
    state  = {
        fields: {}
    };

    onSubmit = fields => {
        this.setState({fields})
    }
    
    render(){
        return(
            <div>
                <HeaderText headerTitle={"Create your beautiful store today."} headerSub={"Fill in the credentials and activate your demo with verification sms we send you."} /> 
                <Form onSubmit={fields => this.onSubmit(fields)}/>
                <p>{JSON.stringify(this.state.fields, null, 2)}</p>
            </div>
        )
    }
}

export default Stage1;