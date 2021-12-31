import React from 'react'

import './Inputs.css'
import '../same.css'


const Inputs = () => {
    return (
        <div className="container">
            <h1>Inputs</h1>
            <section className='item'>
                <div className="box">
                    <p className="name">&lt;Input /&gt;</p>
                    <Input />
                </div>
                <div className="box">
                    <p className="name">&lt;Input error /&gt;</p>
                    <Input error />
                </div>
                <div className="box">
                    <p className="name">&lt;Input disabled /&gt;</p>
                    <Input disabled />
                </div>
            </section>
            <section className='item'>
                <div className="box">
                    <p className="name">&lt;Input helperText="Some interesting text" /&gt;</p>
                    <Input helperText="Some interesting text" />
                </div>
                <div className="box">
                    <p className="name">&lt;Input helperText="Some interesting text" error /&gt;</p>
                    <Input helperText="Some interesting text" error />
                </div>
            </section>
            <section className='item'>
                <div className="box">
                    <p className="name">&lt;Input startIcon="call" /&gt;</p>
                    <Input startIcon="call" />
                </div>
                <div className="box">
                    <p className="name">&lt;Input endIcon="lock" /&gt;</p>
                    <Input endIcon="lock" />
                </div>
            </section>
            <section className='item'>
                <div className="box">
                    <p className="name">&lt;Input size="sm" /&gt;</p>
                    <Input size="sm" />
                </div>
                <div className="box">
                    <p className="name">&lt;Input size="md" /&gt;</p>
                    <Input size="md" />
                </div>
            </section>
            <p className="p-icon">Icons: https://material.io/resources/icons/?style=round</p>
            <p className="bottom">created by <span style={{fontWeight:700}}>satellites7</span> - devChallenges.io</p>
        </div>
    )
}

export const Input = (props) => {
    let className = ''
    className = (props.error ? 'error' : '') + (props.disabled ? 'disabled-input' : '') + 
                (props.startIcon ? 'startIconInput' : '') + (props.endIcon ? 'endIconInput' : '')
                + (props.size ? props.size+'-input' : '')
                ;

    let errorColor = props.error ? 'errorColor' : '';
    let placeholder = props.placeholder || 'Placehdolder'
    let label = props.label || 'label'


    let helperText = props.helperText ? <p className={`helpText ${errorColor}`}>{props.helperText}</p> : ''
    let icon = ''
    if (props.startIcon) {
        icon = <span className="material-icons md14 md-dark startIcon">
            {props.startIcon}
        </span>
    } else if(props.endIcon) {
        icon = <span className="material-icons md14 md-dark endIcon">
            {props.endIcon}
        </span>
    }

    return (
        <>
            <label htmlFor="" className={errorColor}>{label}</label>
            <input type="text" placeholder={placeholder} className={className} />
            {helperText}
            {icon}
        </>
    )
}

export default Inputs
