import React from 'react';
import '../styles/Portfolio.css';

export default function Project(props) {
    return (
        <div className='col-md-4'>
            <div className='box'>
                <img src={props.image} />
                <div className='box-content'>
                    <h3 className='title'>{props.title}</h3>
                </div>
            </div>
        </div>
    )
}