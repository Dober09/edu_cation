import whoweare from "../assets/images/whoweare.jpg"
import "../Styles/section.css"


export default function Section({title ,order,margin}){
    return (
      <section id="home-sect-comp">
        <div className="rightside" style={{"order":order}}>
          <div className="title" style={{"marginTop":`${margin}px`}}>
            <h3>{title}</h3>
          </div>
          <div className="para">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              molestias ex doloribus quas deserunt eum fugit cupiditate. Iure,
              minus praesentium?
            </p>
          </div>
        </div>
        <div className="leftsite">
          <img src={whoweare} alt="whoweare" width={200} />
        </div>
      </section>
    );
}