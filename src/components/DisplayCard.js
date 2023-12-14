import Card from "./Card";
import image from "../assets/images/pexels-pixabay-209728.jpg";
import "../Styles/card.css";
export default function DisplayCard() {
  return (
    <Card
      title={"Project Manager"}
      url={image}
      bgcolor={"rgb(233,102,41)"}
      btntxt={"add course"}
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora su enim praesentium iste dolorum. Iusto at quae atque optio!"
    />
  );
}
