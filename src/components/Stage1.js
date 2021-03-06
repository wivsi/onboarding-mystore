import React from 'react';

import HeaderText from './HeaderText';
import Form from './Form';

class Stage1 extends React.Component{
    state  = {
        fields: {},
    };

    onSubmit = fields => {
        this.setState({fields});
        console.log(fields.email);
        this.props.history.push({
            pathname: '/Stage2',
            search: 'email='+ fields.email+'&phone='+fields.phone
          });
    }
    
    render(){
        return(
            <div>
                <HeaderText headerTitle={"Create your beautiful store today."} headerSub={"Fill in the credentials and activate your demo with verification sms we send you."} /> 
                <Form onSubmit={fields => this.onSubmit(fields)}/>
            </div>
        )
    }
}

export default Stage1;