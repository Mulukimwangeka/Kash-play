import React, { useState } from "react";
import "./Styles/Payment.css";

const PaymentForm = ({ redirectUrl }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to store user's phone number
    console.log(`User's phone number: ${phoneNumber}`);
    // Redirect to payment page
    setIsSubmitted(true);
  };

  return (
    <div className="payment-form">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="phoneNumber">Enter your phone number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="\(\d{3}\) \d{3}-\d{4}"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button type="submit">Pay and Play</button>
        </form>
      ) : (
        <div>
          <p style={{ fontSize: "1.2rem" }}>
            Your payment has been processed. Enjoy the game!
          </p>
          {redirectUrl && (
            <a href={redirectUrl} style={{ fontSize: "1.2rem" }}>
              Click here to play the game
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
