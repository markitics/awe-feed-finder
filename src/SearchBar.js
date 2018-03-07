import React from 'react';
import request from 'request';
import {Content} from './Content';

export class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm : "",
            response : {},
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({searchTerm: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const options = {
            url: `https://itunes.apple.com/search?term=${this.state.searchTerm}&entity=podcast`,
            headers: {
                'User-Agent': 'request',
            }
        };

        request.get(options, (err, res, body)=>{
            if(res && res.statusCode === 200)
                this.setState({ response : JSON.parse(body)});
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange}/>
                    <button type="submit" value="Submit">Submit</button>
                </form>
                <Content response={this.state.response}></Content>
            </div>
        )
    }
}