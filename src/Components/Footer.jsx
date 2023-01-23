import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "220px",
        }}
      >
        <img
          style={{ height: "100%" }}
          src="https://www.kindmeal.my/images/banner_whykindmeal.png"
          alt="abcd"
        />
      </div> */}

      <div id="footer" style={{ backgroundColor: 'rgb(241, 241, 108)', color: 'black' }}>
        <div>
          <div>
            <div className="fot-head" >General</div>
            <a style={{ color: 'black' }} href="/#">Home</a>
            <Link style={{ color: 'black' }} to="/signup">Sign Up</Link>
            <a style={{ color: 'black' }} href="/#">Businesses / Restaurateurs</a>
            <a style={{ color: 'black' }} href="/#">Advertising</a>
            <Link style={{ color: 'black' }} to="about">About Basspro.my</Link>
            <Link style={{ color: 'black' }} to="/help">Help & FAQ</Link>
            <a style={{ color: 'black' }} href="/#">Terms & Conditions</a>
            <a style={{ color: 'black' }} href="/#">Inspiring Partners</a>
            <a style={{ color: 'black' }} href="/#">Lifestyle Ambassadors</a>
            <a style={{ color: 'black' }} href="/#">Jobs & Careers</a>
            <Link style={{ color: 'black' }} to="/contacts">Contact Us</Link>
          </div>
          <div>
            <div className="fot-head">Features</div>
            <Link style={{ color: 'black' }} to="/mealdeals">Meat-Free Deals</Link>
            <a style={{ color: 'black' }} href="/#">Tasty Menus</a>
            <Link style={{ color: 'black' }} to="/kindmoments">Kind Moments</Link>
            <a style={{ color: 'black' }} href="/#">Meat-Free Recipes</a>
            <Link style={{ color: 'black' }} to="/hotpicks">Member Recommendations</Link>
            <a style={{ color: 'black' }} href="/#">Featured Restaurants</a>
            <Link style={{ color: 'black' }} to="/directory">Vegetarian & Vegan Directory</Link>
            <a style={{ color: 'black' }} href="/#">Food Map</a>
            <a style={{ color: 'black' }} href="/#">Become A Superhero</a>
            <Link style={{ color: 'black' }} to="/articles">Vegan News & Vegetarian Articles</Link>
            <a style={{ color: 'black' }} href="/#">Latest Comments</a>
          </div>
          <div>
            <div className="fot-head">Social Media</div>
            <a style={{ color: 'black' }} href="/#">Basspro Widget</a>
            <a style={{ color: 'black' }} href="https://www.facebook.com/KindMeal.my">Facebook</a>
            <a style={{ color: 'black' }} href="https://twitter.com/KindMeal">Twitter</a>
            <a style={{ color: 'black' }} href="https://www.instagram.com/KindMeal.my/">Instagram</a>
          </div>
          <div>
            <div className="fot-head">Mobile</div>
            <a style={{ color: 'black' }} href="/#">iPhone & iPod App</a>
            <a style={{ color: 'black' }} href="/#">Android App</a>
            <br />
            <div className="fot-head">Exciting Promos</div>
            <a style={{ color: 'black' }} href="/#">Gadhimai: Ending Mass Slaughter</a>
            <a style={{ color: 'black' }} href="/#">Free Meals</a>
            <a style={{ color: 'black' }} href="/#">Food Bloggers</a>
            <a style={{ color: 'black' }} href="/#">Uber CHIRP</a>
            <a style={{ color: 'black' }} href="/#">Jane Goodall Contest</a>
            <a style={{ color: 'black' }} href="/#">Win Digi iPhone 6</a>
            <a style={{ color: 'black' }} href="/#">Feed The Poor</a>
            <a style={{ color: 'black' }} href="/#">Win Superhero Gifts</a>
            <a style={{ color: 'black' }} href="/#">Win an iPad Mini 3</a>
          </div>
          <div>
            <div className="fot-head">PetFinder.my</div>
            <a style={{ color: 'black' }} href="/#">Adopt A Pet</a>
            <a style={{ color: 'black' }} href="/#">Smartphone Apps</a>
            <a style={{ color: 'black' }} href="/#">WAGazine</a>
            <a style={{ color: 'black' }} href="/#">Discussion Forum</a>
            <a style={{ color: 'black' }} href="/#">Medical Fund</a>
          </div>
        </div>
        <div id="fot-para">
          <p>Copyright © Basspro.my, 2014 - 2022. All rights reserved.</p>
          <p>
            This website promotes compassionate, meat-free dining experience.
            Some food may contain eggs, dairy products or alcohol, please view
            individual listings for details.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
