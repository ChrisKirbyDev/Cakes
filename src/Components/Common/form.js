import React, { Component } from 'react';
import Image from "../assets/img/header-image.png";

class Form extends Component {

    state={
        name: "",
        email: "",
        mobile: "",
        address: "",
        message: "",
        sent:false
    }

    // handle inputs

    handleName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    handleEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }

    handleMobile=(e)=>{
        this.setState({
            mobile:e.target.value
        })
    }

    handleAddress=(e)=>{
        this.setState({
            address:e.target.value
        })
    }

    handleMessage=(e)=>{
        this.setState({
            message:e.target.value
        })
    }


    // end of handle inputs

    
    render() {
        return (
            <section className="form-section">
                <div className="form-container">
                    <form className="form">
                        {/* Single Item */}
                        <div className="singleItem">
                            <label 
                                className="form-label" 
                                id="name-label" 
                                htmlFor="name">
                                Name
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                className="form-control"
                                placeholder="Enter your name" required
                                value={this.state.name}
                                onChange={this.handleName}
                            />
                        </div>
                        {/* End of Single Item */}
                        {/* Single Item */}
                        <div className="singleItem">
                            <label 
                            className="form-label" 
                            id="email-label" 
                            htmlFor="email">
                            Email
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="form-control" 
                                placeholder="Enter your Email" required
                                value={this.state.email}
                                onChange={this.handleEmail}
                            />
                        </div>
                        {/* End of Single Item */}
                        {/* Single Item */}
                        <div className="singleItem">
                            <label 
                                className="form-label" 
                                id="mobile-label" 
                                htmlFor="mobile">
                                Mobile
                            </label>
                            <input 
                                type="tel" 
                                name="mobile" 
                                id="number" 
                                className="form-control" 
                                placeholder="Enter your Mobile"
                                value={this.state.mobile}
                                onChange={this.handleMobile}                             
                            />
                        </div>
                        {/* End of Single Item */}
                        {/* Single Item */}
                        <div className="singleItem">
                            <label 
                                className="form-label" 
                                id="address-label" 
                                htmlFor="address">
                                Address
                            </label>
                            <input 
                                type="text" 
                                name="address" 
                                id="address" 
                                className="form-control" 
                                placeholder="Enter your address" required
                                value={this.state.address}
                                onChange={this.handleAddress} 
                            />
                        </div>
                        {/* End of Single Item */}
                        {/* Single Item */}
                        <div className="text-area-singleItem">
                            <label 
                                className="form-label" 
                                htmlFor="message">
                                What design would you like?
                            </label>
                            <textarea 
                                name="message" 
                                id="" 
                                cols="30" 
                                rows="10" 
                                className="textArea" 
                                placeholder="Please give me as much detail as you can..." required>
                                value={this.state.message}
                                onChange={this.handleMessage} 
                            </textarea>
                        </div>
                        {/* End of Single Item */}
                        <div className="msg">Message has been sent</div>
                        <div className="submit">
                            <button className="submit-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default Form;