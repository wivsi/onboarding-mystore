import React from 'react';

class HeaderText extends React.Component {
    render(){
        console.log(this.props);
        return(
            <div class="title-wrapper">
                <h1>{this.props.headerTitle}</h1>
                <h3>{this.props.headerSub}</h3>
            </div>
        );
    }
}

export default HeaderText;