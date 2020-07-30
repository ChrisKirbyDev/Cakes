import React, {Component} from "react";

function Form() {
    return (
        <div class="container">
            <header class="header">
                <h1 id="title" class="text-center">Booking & Consultation Form</h1>
                <p id="description" class="description text-center">
                    Thank you for taking the time to fill out this form.
                </p>
            </header>
                <form id="survey-form">
            <div class="form-group">
                <label id="name-label" for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Enter your name" required />
            </div>
            <div class="form-group">
                <label id="email-label" for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Enter your Email" required />
            </div>
            <div class="form-group">
            <label id="number-label" for="number">Mobile</label>
            <input type="tel" name="age" id="number" class="form-control" placeholder="Enter your Mobile" />
            </div>
            <div class="form-group">
            <p>Sponge Flavour</p>
            <select id="dropdown" name="role" class="form-control" required>
                <option disabled selected value>Select A Flavour</option>
                <option value="vanilla">Vanilla</option>
                <option value="chocolate">Chocolate</option>
                <option value="carrot">Carrot</option>
                <option value="coffee">Coffee</option>
                <option value="lemon">Lemon</option>
            </select>
            </div>

            <div class="form-group">
                <p>Would you like a wedding cake consultation?</p>
                <label>
                    <input name="user-recommend" value="yes" type="radio" class="input-radio" checked />Yes</label>
                <label>
                    <input name="user-recommend" value="no" type="radio" class="input-radio" />No</label>                
            </div>

            <div class="form-group">
                <p>Filling</p>
                <select id="most-like" name="mostLike" class="form-control" required>
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

            <div class="form-group">
                <p>
                    When are you available?
                </p>
                <label><input name="prefer" value="available" type="datetime-local" class="input-checkbox" /></label>
            </div>

            <div class="form-group">
                <p>
                When would you like it ready?
                </p>
                <label><input name="prefer" value="ready" type="datetime-local" class="input-checkbox" /></label>
            </div>

            <div class="form-group">
              <p>What design would you like?</p>
              <textarea id="comments" class="input-textarea" name="comment" placeholder="Please give me as much detail as you can..."></textarea>
            </div>

            <div class="form-group">
                <button type="submit" id="submit" class="submit-button">
                  Submit
                </button>
            </div>
            </form>
        </div>
    )
}

export default Form;