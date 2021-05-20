import { withLDConsumer } from 'launchdarkly-react-client-sdk';
import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'react';

class HelloWorld extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.flags);
        const isFlagEnabled = this.props.flags.testFlag;
        //const isFlagEnabled = true;
        let choice;
        if (isFlagEnabled) {
            console.log(isFlagEnabled)
            choice =<div>Flag Enabled</div>
        } else {
            choice =<div>Flag not Enabled</div>
        }
        return(
            <div>{choice}</div>
        );
    }
}
export default withLDConsumer()(HelloWorld);