import bannerImage from "../assets/images/hero-image.jpg"
import '../Styles/banner.css'

export default function Banner(){
    return (
      <div className="banner">
        <div id="image">
          <img style={{ width: "100%" }} src={bannerImage} alt="hero" />
        </div>
        <div className="label">
            <h1>Qaulity & Learning Links Consulting:QLL Consulting</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat sequi impedit cumque, nobis autem facilis praesentium harum.</p>
        </div>
      </div>
    );
}