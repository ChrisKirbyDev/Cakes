import React, {Component} from "react";

function Form() {
    return (
        <div className="container">
            <header className="header">
                <h1 id="title" className="text-center">Booking & Consultation Form</h1>
                <p id="description" className="description text-center">
                    Thank you for taking the time to fill out this form.
                </p>
            </header>
                <form id="survey-form">
            <div className="form-group">
                <label id="name-label" for="name">Name</label>
                <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
                <label id="email-label" for="email">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="Enter your Email" required />
            </div>
            <div className="form-group">
            <label id="number-label" for="number">Mobile</label>
            <input type="tel" name="age" id="number" className="form-control" placeholder="Enter your Mobile" />
            </div>
            <div className="form-group">
            <p>Sponge Flavour</p>
            <select id="dropdown" name="role" className="form-control" required>
                <option disabled selected value>Select A Flavour</option>
                <option value="vanilla">Vanilla</option>
                <option value="chocolate">Chocolate</option>
                <option value="carrot">Carrot</option>
                <option value="coffee">Coffee</option>
                <option value="lemon">Lemon</option>
            </select>
            </div>

            <div className="form-group">
                <p>Would you like a wedding cake consultation?</p>
                <label>
                    <input name="user-recommend" value="yes" type="radio" className="input-radio" checked />Yes</label>
                <label>
                    <input name="user-recommend" value="no" type="radio" className="input-radio" />No</label>                
            </div>

            <div className="form-group">
                <p>Filling</p>
                <select id="most-like" name="mostLike" className="form-control" required>
                    <option disabled selected value>Select A Filling</option>
                    <option value="vanilla_buttercream">Vanilla Buttercream</option>
                    <option value="vanilla_buttercream_raspberryjam">Vanilla Buttercream/Raspberry Jam</option>
                    <option value="chocolate_ganache">Chocolate Ganache</option>
                    <option value="chocolate_buttercream">Chocolate Buttercream</option>
                    <option value="lemon_buttercream">Lemon Buttercream/Lemon Curd</option>
                    <option value="creamcheese">Creamcheese</option>
                    <option value="coffee_buttercream">Coffee Buttercream</option>
                </select>
            </div>

            <div className="form-group">
                <p>
                    When are you available?
                </p>
                <label><input name="prefer" value="available" type="datetime-local" className="input-checkbox" /></label>
            </div>

            <div className="form-group">
                <p>
                When would you like it ready?
                </p>
                <label><input name="prefer" value="ready" type="datetime-local" className="input-checkbox" /></label>
            </div>

            <div className="form-group">
              <p>What design would you like?</p>
              <textarea id="comments" className="input-textarea" name="comment" placeholder="Please give me as much detail as you can..."></textarea>
            </div>

            <div className="form-group">
                <button type="submit" id="submit" className="submit-button">
                  Submit
                </button>
            </div>
            </form>
        </div>
    )
}

export default Form;