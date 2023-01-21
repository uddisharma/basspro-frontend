import React from "react";
import { Link } from "react-router-dom";
import { Input } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <div>
      <div id="nav-1">
        <div id="nav1-child-1">
          <Link to="/">
            <img style={{ height: '60px', marginTop: '10px' }} src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/images/Redesign/Header/bass-pro-logo-2x.png" alt="" /></Link>
        </div>
        <div
          id="nav1-child-2"
          style={{ display: "flex", flesDirection: "row", marginTop: "20px", margin: '20px', width: '100%' }}
        >
          <Link to="">
            <img style={{ borderRadius: '50%', width: '30px', height: '30px' }}
              src="https://img.freepik.com/free-icon/link_318-897795.jpg?size=338&ext=jpg&ga=GA1.2.1823749016.1670664319&semt=sph"
              alt=""
            />
          </Link>
          <Link to="https://www.facebook.com/KindMeal.my">
            <img style={{ borderRadius: '50%', width: '30px', height: '30px' }}
              src="https://img.freepik.com/free-icon/facebook_318-566730.jpg?size=338&ext=jpg&ga=GA1.2.1823749016.1670664319&semt=sph"
              alt=""
            />
          </Link>
          <Link to="https://twitter.com/KindMeal">
            <img style={{ borderRadius: '50%', width: '30px', height: '30px' }}
              src="https://img.freepik.com/free-icon/twitter_318-177987.jpg?size=338&ext=jpg&ga=GA1.1.1823749016.1670664319&semt=sph"
              alt=""
            />
          </Link>
        </div>
        <Link to='/meal'>
          <Input width={"300px"} mt="20px" placeholder=" Search your Recipes" />
        </Link>
        <div id="nav1-child-3">
          <img style={{ borderRadius: '50%', width: '30px', height: '30px' }}
            src="https://img.freepik.com/free-icon/_318-933256.jpg?size=338&ext=jpg&ga=GA1.2.1823749016.1670664319&semt=sph" alt="" />
          {/* <h4 id="facebook">
            <a href="https://www.facebook.com/v2.9/dialog/oauth?client_id=292733157519852&redirect_uri=https%3A%2F%2Fwww.kindmeal.my%2Flogin.php%3Faction%3Dfacebook&state=de4724f7b2529a9874245150d1ee3df9&display=popup&scope=email,user_birthday,user_location">
              Facebook
            </a>
          </h4> */}
          {/* <h4 id="email">Email</h4> */}
          <Link to="/signup" id="signup">
            <img style={{ borderRadius: '50%', width: '30px', height: '30px' }} src="https://img.freepik.com/free-icon/add-user_318-875911.jpg?size=338&ext=jpg&ga=GA1.2.1823749016.1670664319&semt=sph" alt="" />
          </Link>
        </div>
      </div>
      <div id="nav-2">
        <div>
          <Link to="/">Home</Link>
          <Link to="/meal">Recipes</Link>
          <Link to="/kindmoments">KindMoments</Link>
          <Link to="/hotpicks">Hot Picks</Link>
          <Link to="/addrecipe">Add Recipe</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/help">Help</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
