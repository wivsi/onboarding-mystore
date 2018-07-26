import React from "react";
import { withRouter } from "react-router-dom";

import HeaderText from "./HeaderText";
import VerificationForm from "./VerificationForm";

const queryString = require("query-string");
const generatedCode = 2345;

class Stage2 extends React.Component {
  state = {
    sms_code: "",
    email: "",
    phone: ""
  };

  onSubmit = sms_code => {
    this.setState({ sms_code });

    if (sms_code == generatedCode) {
      this.props.history.push({
        pathname: "/Stage3"
      });
    } else {
        console.log("Clear all input fields and give out error message...");
    }
  };

  render() {
    return (
      <div>
        <HeaderText
          headerTitle={"Verification"}
          headerSub={"Please enter the four digits to activate your account"}
        />
        <VerificationForm onSubmit={code => this.onSubmit(code)} />
        {console.log(queryString.parse(this.props.location.search))}
      </div>
    );
  }
}

export default withRouter(Stage2);
