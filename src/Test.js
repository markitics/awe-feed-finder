import React from 'react';
import request from 'request';
import {Result} from './Result';
import convert from 'xml-js';

export class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            body: {},
        }
    }

    componentDidMount(){
        const options = {
            url: 'http://feeds.soundcloud.com/users/soundcloud:users:263821639/sounds.rss',
            headers: {
                'User-Agent': 'request',
            }
        };

        request.get(options, (err, res, body)=>{
            if(res && res.statusCode === 200){
                const jsonBody  = convert.xml2json(body, {compact: true, spaces: 4});
                console.log(jsonBody);
                this.setState({
                    body: jsonBody,
                });
                debugger;
            }
        });
    }

    render() {
        return <Result body={this.state.body}/>;
    }
}