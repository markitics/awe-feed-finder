import React from 'react';
import _ from 'lodash';
import {EmailContainer} from './EmailContainer'

export const Content = (props) => {
    const res = props.response;
    if(_.isEmpty(res))
        return null;
    else{
        const results = res.results;
        let optionList = [];
        for(let i = 0; i < results.length; i++){
            if(results[i].feedUrl){
                if(JSON.stringify(results[i].feedUrl).includes('soundcloud'))
                    optionList.push(
                    <li key={i}>
                        <ul>
                            <li><a href={results[i].feedUrl} target="_blank">{results[i].feedUrl}</a></li>
                            <li><EmailContainer feedUrl={results[i].feedUrl}/></li>
                        </ul>
                    </li>
                );
            }
        }
        return (
            <div>
                <h2>Showing {optionList.length} results:</h2>
                <ol>
                    {optionList}
                </ol>
            </div>
        )
    }
}