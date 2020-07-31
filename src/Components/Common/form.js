import React from "react";
import Image from "../assets/img/header-image.png";

function Form() {
    return (
        <section className="form-section">
            <div className="form-container">
                <form className="form">
                    {/* Single Item */}
                    <div className="singleItem">
                        <label className="form-label" id="name-label" htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" required />
                    </div>
                    {/* End of Single Item */}
                    {/* Single Item */}
                    <div className="singleItem">
                        <label className="form-label" id="email-label" htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Enter your Email" required />
                    </div>
                    {/* End of Single Item */}
                    {/* Single Item */}
                    <div className="singleItem">
                        <label className="form-label" id="number-label" htmlFor="number">Mobile</label>
                        <input type="tel" name="age" id="number" className="form-control" placeholder="Enter your Mobile" />
                    </div>
                    {/* End of Single Item */}
                    {/* Single Item */}
                    <div className="singleItem">
                        <label className="form-label" id="address-label" htmlFor="number">Address</label>
                        <input type="text" name="address" id="address" className="form-control" placeholder="Enter your address" required />
                    </div>
                    {/* End of Single Item */}
                    {/* Single Item */}
                    <div className="text-area-singleItem">
                        <label className="form-label" htmlFor="message">What design would you like?</label>
                        <textarea name="message" id="" cols="30" rows="10" className="textArea" placeholder="Please give me as much detail as you can..."></textarea>
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

export default Form;