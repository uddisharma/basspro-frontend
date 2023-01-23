import React from "react";
import "../Styles/Home.css";
import "../Styles/modal.css";
import { Link } from "react-router-dom";
import Trending from "./Trending";
import Hero from './Hero'
import { SimpleGrid, Button, Box } from '@chakra-ui/react'
const Home = () => {
  return (
    <>


      <div style={{ width: '85%', margin: 'auto' }}>
        <Hero />
        <Trending />
      </div>

      <div className="container2">
        <div className="header-box" style={{ gap: "30px" }}>
          <div className="header2" style={{ marginRight: "37px" }}>
            <Link to="/#">Latest News & Videos</Link>
          </div>
          <div className="header">
            <Link to="/#">Save Lives with Your Blog </Link>
          </div>
          <div className="header">
            <Link to="/articles">News & Articles </Link>
          </div>
          <div className="header">
            <Link to="https://www.facebook.com/KindMeal.my">
              Follow Our Facebook
            </Link>
          </div>
        </div>
        <div className="image-box">
          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/article/20/20044-l.jpg"
              alt="/#"
            />
            <p>Spicy Sweet Potato Hash Browns</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/article/20/20034-l.jpg"
              alt="/#"
            />
            <p>Busy Beaver Delivers Lettuce To Zoo Friends</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/article/20/20032-l.jpg"
              alt="/#"
            />
            <p>Teaching My Pet Pig To Talk 🐷</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/article/20/20029-l.jpg"
              alt="/#"
            />
            <p>Hatching Animals 🐣</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/article/20/20023-l.jpg"
              alt="/#"
            />
            <p>Rescued Cow Asks For More Scratches</p>
          </Link>
        </div>
      </div>
      <div className="container2">
        <div className="header-box" style={{ gap: "40px" }}>
          <div className="header2" style={{ marginRight: "45px" }}>
            <Link to="/#">Yummylicious Moments</Link>
          </div>
          <div className="header">
            <Link to="/#">Secret Recipes </Link>
          </div>
          <div className="header">
            <Link to="/hotpicks"> Member Hot Picks </Link>
          </div>
          <div className="header">
            <Link to="/kindmoments">Photo Moments</Link>
          </div>
        </div>
        <div className="image-box">
          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/deal/7/707-4819-s.jpg"
              alt="/#"
            />
            <p>Creamy Hasselback Potatoes</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/moment/24/24309-46678-s.jpg"
              alt="/#"
            />
            <p>jolenesaw</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/moment/24/24307-46677-s.jpg"
              alt="/#"
            />
            <p>karenkhong</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/deal/7/717-5054-s.jpg"
              alt="/#"
            />
            <p>munhaoyoong</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/moment/24/24305-46676-s.jpg"
              alt="/#"
            />
            <p>FatJedi</p>
          </Link>
        </div>
      </div>

      <div className="container2">
        <div className="header-box" style={{ gap: "45px" }}>
          <div className="header2" style={{ marginRight: "40px" }}>
            <Link to="/#">Discover Restaurants</Link>
          </div>
          <div className="header">
            <Link to="/directory">Vegetarian Directory</Link>
          </div>
          <div className="header">
            <Link to="/#"> Restaurant Menu </Link>
          </div>
          <div className="header">
            <Link to="/#"> Food Map</Link>
          </div>
        </div>
        <div className="image-box">
          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/item/0/572-8074-s.jpg"
              alt="/#"
            />
            <p>Eggs on Toast - Single</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/item/0/244-2423-s.jpg"
              alt="/#"
            />
            <p>Cherry Box</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/item/0/545-7429-s.jpg"
              alt="/#"
            />
            <p>Kyoto Pork Ribs Ramen</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/item/0/292-3016-s.jpg"
              alt="/#"
            />
            <p>BOOSTER - carrot, beetroot and orange</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/item/0/603-9052-s.jpg"
              alt="/#"
            />
            <p>Bak Kut Teh</p>
          </Link>
        </div>
      </div>
      <div className="container2">
        <div className="header-box" style={{ gap: "45px" }}>
          <div className="header2" style={{ marginRight: "40px" }}>
            <Link to="/#">Amazing Superheroes</Link>
          </div>
          <div className="header">
            <Link to="/#">Latest Buzz </Link>
          </div>
          <div className="header">
            <Link to="/#"> Lifestyle Ambassadors </Link>
          </div>
          <div className="header">
            <Link to="/#"> Win Gifts!</Link>
          </div>
        </div>
        <div className="image-box">
          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/member/37/37179-m.jpg"
              alt="/#"
            />
            <p>SooYeeLim</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/member/16/16140-m.jpg"
              alt="/#"
            />
            <p>KenixKua</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/member/41/41028-m.jpg"
              alt="/#"
            />
            <p>MichelleTan</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/member/37/37767-m.jpg"
              alt="/#"
            />
            <p>KooTY</p>
          </Link>

          <Link to="/#">
            <img
              src="https://www.kindmeal.my/photos/member/28/28045-m.jpg"
              alt="/#"
            />
            <p>MandyHew</p>
          </Link>
        </div>
      </div>
      <div id="container3">
        <div>Introducing The World's 1st  Lifestyle Platform</div>
        <div id="con3-img">
          <div>Brought to you by</div>
          <img
            src="https://www.kindmeal.my/images/logo-petfinder.png"
            alt="/#"
          />
        </div>
        <div>
          Instant coupon & dining. No upfront coupon payment, booking or
          printing.
        </div>
        <div id="container4">
          <div>
            <img src="https://www.kindmeal.my/images/intro_deal.png" alt="/#" />
            <h3>Get Great Deals</h3>
            <p>
              Show our FREE digital coupons to instantly enjoy exciting deals
            </p>
          </div>
          <div>
            <img
              src="https://www.kindmeal.my/images/intro_kindmoment.png"
              alt="/#"
            />
            <h3>Share KindMoments</h3>
            <p>Spread the joy by sharing your yummy dining moments</p>
          </div>
          <div>
            <img src="https://www.kindmeal.my/images/intro_menu.png" alt="/#" />
            <h3>Discover Delicious Food</h3>
            <p>Explore the latest exquisite offerings and creative menus</p>
          </div>
          <div>
            <img
              src="https://www.kindmeal.my/images/intro_friends.png"
              alt="/#"
            />
            <h3>Meet Food Lovers</h3>
            <p>Make new, compassionate friends and share great food tips</p>
          </div>
        </div>
        {/* <p id="con4-para">
          Any restaurant or cafe can join Basspro, vegetarian or not, as long
          as the deals and menu featured are meat-free. Enjoy a great meat-free
          dining experience. Easily save animal lives, health, environment and
          money now!
        </p>

        <div id="red-btn">
          <h1>
            <Link to="/signup">Join Basspro Now</Link>
          </h1>
          <p>Your tasty journey begins here</p>
        </div>
        <div id="As-featured">As Featured In</div>
        <div id="last-image">
          <img
            width="100%"
            src="https://www.kindmeal.my/images/media-feature2.png"
            alt="/#"
          />
        </div> */}
      </div>
      <br />
      <br />
      <SimpleGrid columns={{ base: 2, md: 2, lg: 4 }} gap="30px" className="main-cont">
        <Box>
          <img className='image' src="https://assetshare.basspro.com/content/dam/bps-general-assets/web/site-elements/home-page/club/images/card_BPS_classic-new.png" alt="" />
        </Box>
        <Box>
          <p className='first'>SIGN UP TODAY AND EARN UP TO</p>
          <h1 className='heading'>$50 <span className='grayline'>In <br /> CLUB <br /> Points </span> </h1>
          <Button>Sign Up</Button>
        </Box>
        <Box>
          <h2 className='heading2'>Club Member Sign In</h2> <hr />
          <p className='second'>Manage your account online.</p>
          <Button>Manage my account</Button>
        </Box>
        <Box>
          <h2 className='heading2'>CLUB Member Offers</h2> <hr />
          <p className='second'>Check out the latest perks and discounts for CLUB Members.</p>
          <Button>Check Offers & Events</Button>
        </Box>

      </SimpleGrid>
    </>
  );
};

export default Home;
