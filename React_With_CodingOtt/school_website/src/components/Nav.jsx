import React from 'react'
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <nav style={{
        display: 'flex',
        background: 'white',
        justifyContent: 'space-between',
        padding: '8px 48px',
        boxShadow: '0 8px 8px 0 rgba(0,0,0,0.1)'
    }}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8
        }}>
            <img src="./images/logo-removebg-preview.png" width="90" />
            <h1>Codeschool</h1>
        </div>

        <ul style={{
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 32
        }}>
            <li>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: '#323232',
                    fontSize: 17
                }}>Home</Link>
            </li>
            
            <li>
                <Link to="/about" style={{
                    textDecoration: 'none',
                    color: '#323232',
                    fontSize: 17
                }}>About</Link>
            </li>

            <li>
                <Link to="/teachers" style={{
                    textDecoration: 'none',
                    color: '#323232',
                    fontSize: 17
                }}>Teachers</Link>
            </li>

            <li>
                <Link to="/hollydays" style={{
                    textDecoration: 'none',
                    color: '#323232',
                    fontSize: 17
                }}>Hollydays</Link>
            </li>

            <li>
                <Link to="/contact-us" className="contact-us-btn" style={{
                    textDecoration: 'none',
                    color: 'white',
                    fontSize: 17,
                    background: '#8700ff',
                    padding: '12px 30px',
                    borderRadius: 4
                }}>Contact us</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav