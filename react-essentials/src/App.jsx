import reactImg from "./assets/react-core-concepts.png"
import componentImg from "./assets/components.png"
import TabButton from "./components/TabButton"
import {useState} from "react"

const descriptors = ["Fundamental","Crucial","Core"];

function genRandomNumber(max)
{
  return Math.floor(Math.random()*(max + 1));
}


function Header() {
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

function CoreConcepts(props)
{
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}




function App() {

  const [content,setContent] = useState("Please select a value")

  function handleSelect(item) {
    console.log(item);
    setContent(item);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts!</h2>
          <ul>
            <CoreConcepts image = {componentImg}
                          title = "Components"
                          description = "Basic UI building Blocks"
              />

              <CoreConcepts image = {componentImg}
                          title = "Props"
                          description = "Pass data to components"
              />
          </ul>
          
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect = {() => handleSelect("Components")}>Components</TabButton>
            <TabButton onSelect = {() => handleSelect("Props")}>Props</TabButton>
          </menu>
        </section>

        {content}
        
      </main>
    </div>
  );
}

export default App;
