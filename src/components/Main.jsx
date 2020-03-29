import React from 'react';
import "../App.css";

function Main(){
    return(
        <div>
            <div className="main-container">
                <div className="main-form-container">
                    <div className="main-form">
                        <span>Log in to Facebook</span>
                    </div>
                    <div className="login-form-container">
                        <form className="login-form">
                            <div className="login-form-wrapper">
                                <div className="email-box">
                                    <input type="text"
                                    placeholder="Enter your Email">
                                    </input>
                                </div>
                                <div className="email-box">
                                    <input placeholder="Password" type="password"></input>
                                </div>
                                <div className="btn-container">
                                    <button type="submit">
                                        Log In
                                    </button>
                                </div>
                                <div className="create-new-account-container">
                                    <div className="or-container">
                                        <hr/>
                                    </div>
                                    <div className="forgot-password">
                                        <a>Forgotten account?</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;