import React from 'react'
import './Button.css'
import '../same.css'

const Buttons = () => {
    return (
        <div className='container'>
            <h1>Buttons</h1>
            <section>
                <div className="box">
                    <p className="name">&lt;Button /&gt;</p>
                    <Button/>
                </div>
                <div className="box">
                    <p className="name">&lt;Button variant="outline" /&gt; </p>
                    <Button variant="outline" />
                </div>
                <div className="box">
                    <p className="name">&lt;Button variant="text" /&gt; </p>
                    <Button variant="text" />
                </div>
            </section>
            <section>
                <div className="box">
                    <p className="name">&lt;Button disabled /&gt; </p>
                    <Button disabled />
                </div>
                <div className="box">
                    <p className="name">&lt;variant="text" disabled /&gt;</p>
                    <Button disabled variant="text" />
                </div>
            </section>
            <section>
                <div className="box">
                    <p className="name">&lt;Button startIcon="shopping_cart" /&gt; </p>
                    <Button startIcon="shopping_cart" color="primary"/>
                </div>
                <div className="box">
                    <p className="name">&lt;Button endIcon="shopping_cart"/&gt; </p>
                    <Button endIcon="shopping_cart" color="primary"/>
                </div>
                <div className="box">
                    <p className="name">&lt;Button startIcon="person"/&gt; </p>
                    <Button startIcon="person" color="primary"/>
                </div>
                <div className="box">
                    <p className="name">&lt;Button endIcon="person"/&gt; </p>
                    <Button endIcon="person" color="primary"/>
                </div>     
            </section>
            <section>
                <div className="box">
                    <p className="name">&lt;Button size="sm" /&gt; </p>
                    <Button color="primary" size="sm"/>
                </div>
                <div className="box">
                    <p className="name">&lt;Button size="md"/&gt; </p>
                    <Button color="primary" size="md"/>
                </div>
                <div className="box">
                    <p className="name">&lt;Button size="lg"/&gt; </p>
                    <Button color="primary" size="lg"/>
                </div>  
            </section>
            <section>
                <div className="box">
                    <p className="name">&lt;Button color="default"&gt; </p>
                    <Button color="default"  value="default"/>
                </div>
                <div className="box">
                    <p className="name">&lt;Button color="primary"/&gt; </p>
                    <Button color="primary"  value="primary"/>
                </div>
                <div className="box">
                    <p className="name">&lt;Button color="secondary"/&gt; </p>
                    <Button color="secondary"  value="secondary"/>
                </div> 
                <div className="box">
                    <p className="name">&lt;Button color="danger"/&gt; </p>
                    <Button color="danger" value="danger" />
                </div>  
            </section>
            <p className="p-icon">Icons: https://material.io/resources/icons/?style=round</p>
            <p className="bottom">created by <span style={{fontWeight:700}}>satellites7</span> - devChallenges.io</p>
        </div>
    )
}

export const Button = (props) => {
    let iconPositon = props.startIcon || props.endIcon
    let disabled = props.disabled ? 'disabled' : '';
    let icon = <span className="material-icons md14 ">
                    {iconPositon}   
                </span>
    if (props.startIcon) {
        return <button className={`${props.variant} ${props.color} ${props.size} ${disabled}`} >{icon} &nbsp;{props.value ? props.value : 'Default'}</button>
    } else if (props.endIcon) {
        return <button className={`${props.variant} ${props.color} ${props.size} ${disabled}`} >{props.value ? props.value : 'Default'} &nbsp;{icon}</button>
    }
    
    return <button className={`${props.variant} ${props.color} ${props.size} ${disabled}`} >{props.value ? props.value : 'Default'}</button>
}

export default Buttons

