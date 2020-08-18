import React from "react";
import { withRouter } from "react-router-dom";

function Pricing(props) {
  const onClick = () => {
    props.history.push("/form");
  };

  return (
    <div className="pricing-section" id="pricing">
      <div className="pricing-title">
        <h1>Pricing</h1>
      </div>
      <div className="pricing-table-wrapper">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card bg-1">
                <label>Cupcakes</label>
                <h3>
                  from <sup>£</sup>10
                </h3>
                <ul>
                  <li>Available in boxes of 4, 6 and 12</li>
                  <li>Custom designs are also available</li>
                  <li>Get in touch with your ideas!</li>
                </ul>
                <div onClick={onClick} className="btn">
                  Book Now
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-2">
                <label>Celebration Cake</label>
                <h3>
                  from <sup>£</sup>30
                </h3>
                <ul>
                  <li>Sizes available: 4", 6", 8", 10" and 12"</li>
                  <li>For all occasions, bespoke cakes</li>
                  <li>especially for you!</li>
                </ul>
                <div onClick={onClick} className="btn">
                  Book Now
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-3">
                <label>Wedding Cake</label>
                <h3>On Consultation</h3>
                <ul>
                  <li>Single tier, 2 Tier or 3 Tier</li>
                  <li>(available sizes 4", 6", 8", 10" and 12")</li>
                  <li>Get in touch for a cake consultation!</li>
                </ul>
                <div onClick={onClick} className="btn">
                  Book Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Pricing);
