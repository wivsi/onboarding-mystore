import React from 'react';

import HeaderText from './HeaderText';
import Form from './Form';

class Stage1 extends React.Component{
    
    onSubmit = (fields) => {
        console.log('APP Stage1 component', fields);
    }
    
    render(){
        return(
            <div>
                <HeaderText headerTitle={"Create your beautiful store today."} headerSub={"Fill in the credentials and activate your demo with verification sms we send you."} /> 
                <Form onSubmit={fields => this.onSubmit(fields)}/>
               {/*  <form>
                    <div class="field">
                        <input name="email" type="email" placeholder="Email" />
                    </div>
                    <div class="field">
                        <input type="tel" pattern="[0-9]{8}" required placeholder="Phone"/>
                    </div>
                    <input type="submit" value="Submit" />
                    <h4>Already have a mystore? Log in</h4>
                </form> */}
            </div>
        )
    }
    
}

export default Stage1;