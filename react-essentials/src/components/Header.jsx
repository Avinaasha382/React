const descriptors = ["Fundamental","Crucial","Core"];
import reactImg from "../assets/react-core-concepts.png"

function genRandomNumber(max)
{
  return Math.floor(Math.random()*(max + 1));
}

export default function Header() {
    const descriptor = descriptors[genRandomNumber(2)];
  return (
    <header>
        <img src= {reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descriptor} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}