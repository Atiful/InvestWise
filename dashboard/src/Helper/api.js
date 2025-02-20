import axios from "axios";

// const url = 'https://investwise-2.onrender.com1';
//place new order of stocks (BuyWindow.jsx)
const url = 'https://investwise-2.onrender.com'
export const  ApiplaceBuyOrder = async(stock , quantity , price , mode , marginAllowed , user) => {
    try{
    await axios.post("https://investwise-2.onrender.com/order/newOrder" , {
        name : stock,
        quantity : quantity,
        price : price,
        mode : mode,
        marginAllowed : marginAllowed,
        userDetails : user
    } , {withCredentials: true});
}
catch(error){
    return error;
}
};

// fetch holdingdata (Holding.jsx)
export const Apifetchholdingdata = async(user) => {
    try{
        const allholdings = await axios.post("https://investwise-2.onrender.com/holding/allholdings" ,  user , {withCredentials: true});
        return allholdings.data;
        }
        catch(error){
            console.log(error);
        }
}


// fetch position data (Position.jsx)
export const ApifetchpositionData = async(setAllPosition) => {
    try{
        const allposition =   await axios.get("https://investwise-2.onrender.com/allpositions" , {withCredentials: true});
        setAllPosition(allposition.data);
        }
        catch(error){
            console.log(error);
        }
}

export const ApifetchSingleHolding = async(stockName , setstockQuantity , userId) => {
    try{
    let response =  await axios.get(`https://investwise-2.onrender.com/holding/${stockName}/${userId}` , {withCredentials: true});
    if(response.data.length){
        setstockQuantity(response.data[0].quantity);
        }
    }
    catch(error){
        console.log(error);
    }
}

export const ApiPlaceSellOrder = async(name , quantity , price , mode , marginAllowed , user) => {
    try{
        const response =  await axios.post("https://investwise-2.onrender.com/order/sellorder" , {
            stockSell : {
               name : name,
              quantity : quantity,
              price : price,
              mode : mode,
              userDetails : user,
              marginAllowed : marginAllowed
            }
           } , {withCredentials: true});
    }
    catch(error){
        return error;
        // console.log(error);
    }
}


export const ApifeatchAllWatchList = async(setwatchListdata) => {
    try{
        let response = await  axios.get("https://investwise-2.onrender.com/watchlist/allWatchList" , {withCredentials: true});
            setwatchListdata(response.data);
    }
    catch(error){
        return error;
    }
}

export const Apisearchbar = async(searchValue , setfilteredwatchlist) => {
    try{
        if(searchValue){
        let response = await axios.get(`https://investwise-2.onrender.com/watchlist/${searchValue}` , {withCredentials: true});
        setfilteredwatchlist(response.data);
        }
    }
    catch(error){
        console.log(error);
    }
}


export const ApisearchbarHolding = async(searchValue , setFilterdata , apply , user) => {
    try{
        if(searchValue){
        let response = await axios.get(`https://investwise-2.onrender.com/common/search/${user._id}/${apply}/${searchValue}` , user , {withCredentials: true});
        setFilterdata(response.data);
        }
    }
    catch(error){
        console.log(error);
    }
}

export const ApifindAllorderList = async (setorderList , user) => {
    try{
         let response = await axios.post("https://investwise-2.onrender.com/order/allorder" ,  user , {withCredentials: true});
         setorderList(response.data);
    }
    catch(error){
        console.log(error);
    }
}




export const handleApiSignUpForm = async (formData) => {
       
    try{
        const response = await axios.post("https://investwise-2.onrender.com/user/signUpInfo" , [formData] , {
            withCredentials: true
        });
        return response;
    }
    catch(error){
       return error;
    }
        
}

export const apilogin = async (formData) => {
    try {
      const response = await axios.post("https://investwise-2.onrender.com/user/login", formData ,{withCredentials: true});
      return response;
    } catch (error) {
       return error;
    }
  };

  export const isLoginOrNot =  async () => {
    try{
       let response = await axios.get("https://investwise-2.onrender.com/user/isLogin" ,{withCredentials: true});
       return response;
    }
    catch(error){
        return error;
    }
     }


     export const  logoutUser = async () => {
        try{
          let response = await axios.get("https://investwise-2.onrender.com/user/logout" , {withCredentials: true});
          return response;
        }
        catch(error){
            return error;
        }
          
     }


     export const UpdateBalance = async (isLogin , user , addMoney) => {
        const userData = {
            isLogin,
            userDetails : user,
            addMoney
        };
            let response = await axios.post("https://investwise-2.onrender.com/user/balance" , userData , {withCredentials: true});
            return response.data;
     }



     export const apiGoogleAuth = async () => {
        window.location.href = "https://investwise-2.onrender.com/auth/google";
    }

    
export const apiSendMail  = async (otp , mailId , username) => {
    const otpString = otp.join("");
    try{
       const response =  await axios.get(`https://investwise-2.onrender.com/sendMail/${otpString}/${mailId}/${username}` , {withCredentials: true});
       console.log(response);
    }catch(error){
        return error;
    }
}