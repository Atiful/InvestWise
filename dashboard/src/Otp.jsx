import { useContext, useEffect, useState } from "react";
import userContext from "./contextAPI/userContext";

function Otp({email , otpGenerated , otpCheck , optCheckValue}) {
    let {user , isLogin} = useContext(userContext);
   let [userOtp , setUserOtp] = useState(0);
   let [error , setError] = useState(true);
   let [isCorrectOtp , setisCorrectOtp] = useState(true);



   let handleValidateOtp = () => {
        otpCheck(userOtp == otpGenerated);
        setisCorrectOtp(userOtp == otpGenerated);
   }



   const handleOtpForm  = (e) => {
      let {value} = e.target;
      setUserOtp(value);
   }
 
  
   

    return (
        <>
        <div>
        {!isCorrectOtp && <p className="red-error">Incorrect Otp. try again</p>}
        </div>
        {!optCheckValue && 
        <div className="container height-100 mt-3 d-flex justify-content-center align-items-center"> <div className="position-relative"> <div className="card p-2 text-center"> <h6>Please enter the one time password <br/> to verify your account</h6> <div> <span>A code has been sent to</span> <small>{email}</small> </div> 
        <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">

            <div class="input-group input-group-sm mb-3">
              <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleOtpForm} value = {userOtp}/>
       </div>
              
                 </div> 
                 <div className="mt-4">
                         <a className="btn btn-danger px-4 validate" onClick={handleValidateOtp} disabled = {error}>Validate</a> </div> </div> <div className="card-2"> <div className="content d-flex justify-content-center align-items-center"> </div> </div> </div>
</div> 
} 
        </>
        )
}

export default Otp;