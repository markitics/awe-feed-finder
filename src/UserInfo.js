import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emailCopied: false,
            nameCopied: false,
            podcastNameCopied: false,
        }
    }


    render(){
        return(
            <div>
                <li>
                    <span>Email: {this.props.email}&nbsp;&nbsp;&nbsp;</span>
                    <CopyToClipboard text={this.props.email}
                    onCopy={() => this.setState({emailCopied: true})}>
                        <button>Copy to Clipboard</button>
                    </CopyToClipboard>
                    {this.state.emailCopied ? <span style={{color:'red'}}>Email Copied</span> : null}
                </li>
                <li>
                    <span>User Name: {this.props.name}&nbsp;&nbsp;&nbsp;</span>
                    <CopyToClipboard text={this.props.name}
                    onCopy={() => this.setState({nameCopied: true})}>
                        <button>Copy to Clipboard</button>
                    </CopyToClipboard>
                    {this.state.nameCopied ? <span style={{color:'red'}}>Name Copied</span> : null}
                </li>
                <li>
                    <span>Podcast Name: {this.props.podcastName}&nbsp;&nbsp;&nbsp;</span>
                    <CopyToClipboard text={this.props.podcastName}
                    onCopy={() => this.setState({podcastNameCopied: true})}>
                        <button>Copy to Clipboard</button>
                    </CopyToClipboard>
                    {this.state.podcastNameCopied ? <span style={{color:'red'}}>Podcast Name Copied</span> : null}
                </li>
                <br/>
                <br/>
            </div>
        )
    }
}