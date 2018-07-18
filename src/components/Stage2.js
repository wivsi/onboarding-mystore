import React from 'react';
import HeaderText from './HeaderText';

class Stage2 extends React.Component{
    state  = {
        fields: {}
    };
    
    onSubmit = fields => {
        this.setState({fields})
    }

    render(){
        return(
            <div>
                <HeaderText headerSub={"Please enter the four character to activate your account"}/>
                <p>{JSON.stringify(this.state.fields, null, 2)}</p>
            </div>
        );
    }
}

export default Stage2;