import React from 'react';
import request from 'request';
import {Email} from './Email';

export class EmailContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
        }
    }

    componentDidMount(){

        const options = {
            url: `https://cors-anywhere.herokuapp.com/${this.props.feedUrl}`,
            headers: {
                'User-Agent': 'request',
                'mode': 'no-cors'
            }
        };

        request.get(options, (err, res, body)=>{
            if(res && res.statusCode === 200){
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(body, 'application/xml');
                console.log(xmlDoc);
                const email = xmlDoc.getElementsByTagName('itunes:email')[0].childNodes[0].nodeValue;
                this.setState({
                    email: email,
                });
            }
        });
    }

    render(){
        return(
            <Email email={this.state.email}/>
        )
    }
}