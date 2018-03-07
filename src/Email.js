import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export class Email extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            copied: false,
        }
    }


    render(){
        return(
            <div>
                {this.props.email}
                <CopyToClipboard text={this.props.email}
                onCopy={() => this.setState({copied: true})}>
                    <button>Copy to Clipboard</button>
                </CopyToClipboard>
                {this.state.copied ? <span style={{color:'red'}}>Copied</span> : null}
                <br/>
                <br/>
            </div>
        )
    }
}