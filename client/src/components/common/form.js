import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const INITIAL = {
  name: "",
  email: "",
  mobile: "",
  wedding: "",
  dueDate: new Date(),
  sponge: "",
  filling: "",
  message: "",
  sent: false
}

class Form extends Component {
    state = INITIAL;

  // handle inputs

  handleOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({...this.state, [name]: value})
  }

  // end of handle inputs
  formSubmit = (e) => {
    e.preventDefault();
    
    const {sent, ...restState} = this.state
    const data =  restState;

    axios
      .post("http://localhost:3000/api/form", data)
      .then((res) => {
        this.setState(
          {
            sent: true
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message not sent");
      });
  };

  // for resetting initial data

  resetForm = () => {
    this.setState(INITIAL);

    setTimeout(() => {
      this.setState({
        sent: false
      });
    }, 3000);
  };

  render() {
        const { value } = this.state;
    return (
      <section className="form-section">
        <h1 className="booking-title">Booking Form</h1>
        <h3 className="booking-subtitle">
          Thank you for taking the time to fill out this form
        </h3>
        <img
          className="header-image"
          src="/img/header-image.png"
          alt="Cakes By Emily Eve Header"
        />
        <div className="form-container">
          <form onSubmit={this.formSubmit} className="form">
            {/* Single Item */}
            <div className="singleItem">
              <label className="form-label" id="name-label" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                required
                value={this.state.name}
                onChange={this.handleOnChange}
                // onChange={this.handleName}
              />
            </div>
            {/* End of Single Item */}
            {/* Single Item */}
            <div className="singleItem">
              <label className="form-label" id="email-label" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your Email"
                required
                value={this.state.email}
                onChange={this.handleOnChange}
                // onChange={this.handleEmail}
              />
            </div>
            {/* End of Single Item */}
            {/* Single Item */}
            <div className="singleItem">
              <label className="form-label" id="mobile-label" htmlFor="mobile">
                Mobile
              </label>
              <input
                type="tel"
                name="mobile"
                id="number"
                className="form-control"
                placeholder="Enter your Mobile"
                value={this.state.mobile}
                // onChange={this.handleMobile}
                onChange={this.handleOnChange}
              />
            </div>
            {/* End of Single Item */}
            {/* Single Item */}
            <div className="singleItem">
              <label
                className="form-label"
                id="wedding-label"
                htmlFor="wedding"
              >
                Would you like a wedding cake consultation?
              </label>
              <label>
                Yes
                <input
                  type="radio"
                  className="radio-control"
                  name="wedding"
                  value="yes"
                  checked={this.state.wedding === "yes"}
                  onChange={this.handleOnChange}
                />
              </label>
              <label>
                No
                <input
                  type="radio"
                  className="radio-control"
                  name="wedding"
                  value="no"
                  checked={this.state.wedding === "no"}
                  onChange={this.handleOnChange}
                />
              </label>
            </div>
            {/* End of Single Item */}
            {/* Single Item */}
            <div className="singleItem">
              <label className="form-label" id="date-label" htmlFor="date">
                When would you like it ready?
              </label>
              <label>
                <DatePicker
                  className="form-control"
                  selected={this.state.dueDate}
                  onChange={(value) => this.handleOnChange({
                    target: {name: "dueDate", value }
                  })}
                  dateFormat="dd/MM/yyyy"
                  timeFormat="HH:mm"
                />
              </label>
            </div>
            {/* End of Single Item */}
            {/* Single Item */}
            <div className="singleItem">
              <label>Sponge Flavour</label>
              <select
                id="dropdown"
                name="sponge"
                className="form-control"
                required
                value={this.state.value}
                onChange={this.handleOnChange}
              >
                <option disabled selected value>
                  Select an option
                </option>
                <option value="vanilla">Vanilla</option>
                <option value="chocolate">Chocolate</option>
                <option value="carrot">Carrot</option>
                <option value="Coffee">Coffee</option>
                <option value="Lemon">Lemon</option>
              </select>
            </div>
            {/* End of Single Item */}
            {/* Single Item */}
            <div className="singleItem">
              <label>Filling</label>
              <select
                id="most-like"
                name="filling"
                className="form-control"
                required
                value={this.state.value}
                onChange={this.handleOnChange}
              >
                <option disabled selected value>
                  Select an option
                </option>
                <option value="vanilla_buttercream">Vanilla Buttercream</option>
                <option value="vanilla_buttercream_raspberryjam">
                  Vanilla Buttercream/Raspberry Jam
                </option>
                <option value="chocolate_ganache">Chocolate Ganache</option>
                <option value="chocolate_buttercream">
                  Chocolate Buttercream
                </option>
                <option value="lemon_buttercream">
                  Lemon Buttercream/Lemon Curd
                </option>
                <option value="creamcheese">Creamcheese</option>
                <option value="coffee_buttercream">Coffee Buttercream</option>
              </select>
            </div>
            {/* End of Single Item */}
            {/* Single Item */}
            <div className="text-area-singleItem">
              <label className="form-label" htmlFor="message">
                What design would you like?
              </label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="textArea"
                placeholder="Please give me as much detail as you can..."
                required
                value={this.state.message}
                // onChange={this.handleMessage}
                onChange={this.handleOnChange}
              ></textarea>
            </div>
            {/* End of Single Item */}
            <div className={this.state.sent ? "msg msgAppear" : "msg"}>
              Your form has been submitted, we'll be in touch!
            </div>
            <div className="submit">
              <button className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Form;
