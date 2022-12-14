import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import "./LandingPage.css";

const LandingPage = ({ history }) => {
    // useEffect(() => {
    //     const userInfo = localStorage.setItem("userinfo");

    //     if (userInfo) {
    //         history.push('/mynotes')
    //     }
    // }, [history])

    return (
        <div>
            <Container className='main'>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 className='title'>Welcome to Note Zipper </h1>
                            <p className='subtitle'>One safe place for all your notes</p>
                        </div>
                        <div className='button-container'>
                            <a href='/login'>
                                <Button
                                    size='lg'
                                    className='landing-button'>
                                    Login
                                </Button>
                            </a>
                            <a href='/register'>
                                <Button
                                    size='lg'
                                    className='landing-button'
                                    variant='outline-primary'>
                                    Sign Up
                                </Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage