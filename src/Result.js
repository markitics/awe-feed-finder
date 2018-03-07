import React from 'react';

export const Result = (props) =>{
    return (
        <p>{JSON.stringify(props.body)}</p>
    )
}