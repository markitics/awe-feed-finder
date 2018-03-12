import React from 'react';
import request from 'request';
import {UserInfo} from './UserInfo';

export class UserInfoContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
            podcastName: '',
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
                const name = xmlDoc.getElementsByTagName('itunes:author')[0].childNodes[0].nodeValue;
                const podcastName = xmlDoc.getElementsByTagName('title')[0].childNodes[0].nodeValue;
                this.setState({
                    email: email,
                    name: name,
                    podcastName: podcastName,
                });
            }
        });
    }

    render(){
        return(
            <UserInfo email={this.state.email} name={this.state.name} podcastName={this.state.podcastName}/>
        )
    }
}