import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/Hero.css';
// import { data } from "./data";
import { BiRightArrow } from 'react-icons/bi'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
// import { ArrowBackIos, ArrowForwardIos } '@mui/icons-material';
var data = [

    {
        imgsrc: 'https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'
    },
    {
        imgsrc: 'https://www.kindmeal.my/photos/deal/6/685-4392-l.jpg'
    },
    {
        imgsrc: 'https://www.kindmeal.my/photos/deal/7/708-4923-l.jpg'
    }
]
const PreviousBtn = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <AiFillCaretLeft style={{ color: "blue", fontSize: "30px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <AiFillCaretRight style={{ color: "blue", fontSize: "30px" }} />
        </div>
    );
};

const Hero = () => {
    return (
        <div style={{ margin: "30px" }} className="carousel">
            {/* <h1>Basic carousel</h1> */}
            <Slider
                autoplay
                autoplaySpeed={2000}
                // dots
                initialSlide={2}
                infinite
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                customPaging={(i) => {
                    return (
                        <div>
                            <img
                                src={data.imgsrc[i]}
                                alt=""
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                }}
                            />
                        </div>
                    );
                }}
                dotsClass="slick-dots custom-indicator"
            >
                {data.map((item) => (
                    <div >
                        <img src={item.imgsrc} alt="" style={{ width: "100%", height: "60vh" }} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero;