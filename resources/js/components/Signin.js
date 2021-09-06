import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { fab } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faLinkedin  } from '@fortawesome/free-brands-svg-icons'

class Signin extends Component {
    state = {
        signin: true,
    };
    render() {
        const { signin = true } = this.state;
        return (
            <div className="zama-form">
                <h2>please Sign in/up to continue</h2>
                <div
                    className={`container ${
                        !signin ? "right-panel-active" : ""
                    }`}
                    id="container"
                >
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social">
                                    {/* <i className="fab fa-facebook-f"></i> */}
                                    <FontAwesomeIcon icon={ faFacebookF } />
                                </a>
                                <a href="#" className="social">
                                    {/* <i className="fab fa-google-plus-g"></i> */}
                                    <FontAwesomeIcon icon={ faGoogle } />
                               </a>
                                <a href="#" className="social">
                                    {/* <i className="fab fa-linkedin-in"></i> */}
                                    <FontAwesomeIcon icon={ faLinkedin } />
                                </a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social">
                                    {/* <i className="fab fa-facebook-f"></i> */}
                                    <FontAwesomeIcon icon={ faFacebookF } />
                                </a>
                                <a href="#" className="social">
                                    {/* <i className="fab fa-google-plus-g"></i> */}
                                    <FontAwesomeIcon icon={ faGoogle } />
                                </a>
                                <a href="#" className="social">
                                    {/* <i className="fab fa-linkedin-in"></i> */}
                                    <FontAwesomeIcon icon={ faLinkedin } />
                                </a>
                            </div>
                            <span>or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a href="#">Forgot your password?</a>
                            <button 
                            // onClick={() =? {
                            //     props.history.push("/home");
                            // }}
                            >Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>
                                    To keep connected with us please login with
                                    your personal info
                                </p>
                                <button
                                    className="ghost"
                                    onClick={(e) =>
                                        this.setState({ signin: true })
                                    }
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>
                                    Enter your personal details and start
                                    journey with us
                                </p>
                                <button
                                    className="ghost"
                                    onClick={(e) =>
                                        this.setState({ signin: false })
                                    }
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signin;
