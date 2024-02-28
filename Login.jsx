import React from "react";
import React { useContext } from "react";
import { RecoveryContext } from "../App";


export default function  Login () {
  const { setEmail, email, setOTP } = useContext(RecoveryContext);

  function navigateOtp() {
    if (email) {
      const OTP = Math.random(Math.random() * 9000 + 1000);
      console.log(OTP);
      setOTP(OTP);
    }
  }
  return (
    <div>
      <p>Forget your password?</p>
      <div>
        please enter your Email address or phone number linked with your account
      </div>
      <div>
        <input
          onchange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email address"
        />
      </div>
      <a href="#" onClick={() => navigateOtp()}></a>
    </div>
  );
}
