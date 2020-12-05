import "./header.styles.css";
import banner from "../../assets/banner.jpg";

const Header = () => {
  return (
    <div className="top">
      <header className="top__header">
        <div className="top__imgContainer">
          <img
            className="top__logoImg"
            src="https://dummyimage.com/60x60/632824/fff.png&text=demo"
            alt="logo"
          />
        </div>
        <div className="top__logoNameContainer">
          <h4 className="top__logoName">Healthy Fruits</h4>
        </div>
      </header>
      <figure className="top__bannerImgCntainer">
        <img src={banner} alt="banner" />
      </figure>
    </div>
  );
};

export default Header;
