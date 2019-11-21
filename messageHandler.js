import React, { Component } from 'react'

class message extends Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        var msg = "I am sexy and I know it !"
        fetch("http://localhost:9000/testAPI?msg="+msg)
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    
    componentDidMount() {
        this.callAPI();
    }
    

    render() {
        return (
            <div className="container center-align">
                <label className="label">Enter your Message to Split</label>

                {/* <div className="input-field">
                    
                    <textarea onChange={this.handleChange} className="materialize-textarea" type="text" placeholder="Enter Text here" required />

                </div>

                <div className="res-box">
                    <textarea ref="msg" className="res-text-box" value={this.state.apiResponse} readOnly></textarea>
                </div> */}

               <p className="App-intro">{this.state.apiResponse}</p>
            <div>{console.log(this.state.apiResponse)}</div>

            </div>
        )
    }
}

export default message;