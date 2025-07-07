import React from 'react'
import headerimg from '../src/images/headerimage.jpeg'
import logo from '../src/images/logo2.png'
import { Button } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
        <div className='header-cont'>
            <div className='header-first'>
                <div className='header-logo'>
                    <img src={logo} />
                    <h6>Matt Zhang</h6>
                </div>
                <div className='header-text'>
                    <h1>Upgrade <span><i>your skills</i></span> from the comfort of home.</h1>
                    <p>Learn at your own pace, anytime, anywhere, with expert-led courses designed to boost your career and confidence.</p>
                </div>
                <div className="mt-3 mt-lg-0 d-flex flex-column flex-lg-row gap-3">
                    <Button className="header-button">Start A Course</Button>
                    <Button className="header-button1"> +1 34432 22333</Button>
                </div>
            </div>
            <div className='header-pic'>
                <img src={headerimg} />
            </div>
        </div>
    </div>
  )
}

export default Header