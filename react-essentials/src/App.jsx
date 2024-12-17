import componentImg from "./assets/components.png"
import CoreConcepts from "./components/CoreConcepts"
import Examples from "./components/Examples";
import Header from "./components/Header";



const components = [
  {
    image:componentImg,
    title:"Components",
    description:"Basic UI building Blocks"
  },

  {
    image:componentImg,
    title:"Props",
    description:"Pass data"
  },

  {
    image:componentImg,
    title:"State",
    description:"Change state"
  }

]



function App() {

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts components = {components} />
        <Examples/>
      </main>
    </div>
  );
}

export default App;
