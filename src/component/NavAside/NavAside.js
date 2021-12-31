import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavAside.css'

const NavAside = () => {
    const [show, setShow] = useState('1')
    const onLinkClick = (e) => {
       setShow(e.target.getAttribute('index'))
    }
    return (
        <aside>
            <p className='title'><span style={{color:'#F7542E'}}>Dev</span>challenges.io</p>
            <ul>
                <li>Colors</li>
                <li>Typography</li>
                <li>Spaces</li>
                <li  onClick={(e) => {onLinkClick(e)}} ><Link index='1' to='/buttons' style={{textDecoration: 'none'}} className={ show === '1'? 'choosen' : '' }>Buttons</Link></li>
                <li  onClick={(e) => {onLinkClick(e)}} ><Link  index='2' to='/inputs' style={{textDecoration: 'none'}} className={ show === '2'? 'choosen' : '' }>Inputs</Link></li>
                <li>Grid</li>
            </ul>
        </aside>
    )
}

export default NavAside
