import React from "react";
import ReactDOM from "react-dom/client";

/*
        Header
            -Logo(Title)
            -Nav images(Right side)
            -Cart
        Body
            -Search bar
            -Resturent
                -ResturentCard(many cards)
                    -Image
                    -Name
                    -Rating
                    -Cusines
        Footer   
            -Links
            -Copy Right                 
*/

// const Title = () => (
//     <a href="/">
//     <img className="logo"
//     alt="logo"
//     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwzHmuNuUBP0_6J4iZEiMSsK-xYmMFQKGMw&usqp=CAU" />
//     </a>
// );

const Header = () => {
    return (
    <div className="header">  
    <div className="logo-container">
    <a href="/">
        <img
        className="logo"
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbwzHmuNuUBP0_6J4iZEiMSsK-xYmMFQKGMw&usqp=CAU"
          />
    </a>
    </div>   
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
    );
};

const ResturentCard = (props) => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img
                className="res-logo"
                alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
                />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 star</h4>
            <h4>38 min</h4>
        </div>
    );
}; 

const Body = () => {
    return (
        <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
        <ResturentCard
            resName="KFC"
            cuisine="burger,chicken"
        />
        <ResturentCard
            resName="biriyani"
            cuisine="chicken biriyani"
        />
        </div>
        </div>
    )
};

const Footer = () => {
    return (
        <h4>Footer</h4>
    )
};

const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);