import "../../css/home.css"


function Hero(){
    return (
        <>
        <div className="container ms-2 mb-3">
            <div className="row mt-3" id = "frontImg">
                <img src="/frontImg.png" alt="homeHeroImage"/>
            </div>

            <div className="row text-center mt-5">
            <h1>Invest in everything</h1>
            <p className="text-center">Dive into the world of trading without the risk! At <b>StockWise</b>, we provide a virtual trading platform designed to help you learn, practice, and refine your trading skills in a simulated environment. No real money or trading is involved, making it the perfect space for beginners and enthusiasts to explore the market safely.
            Empower your financial journey with <b>StockWise</b> today!.</p>

             <a href="https://investwise-dashboard.onrender.com/signUp" className="hero btn btn-primary mt-3 p-2 fs-5">Sign up now</a>
            </div>
        </div>
    
       </>
    )

}


export default Hero;