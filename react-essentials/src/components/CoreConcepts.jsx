import CoreConcept from "./CoreConcept";

export default function CoreConcepts({components}) {
    return (
        <section id="core-concepts">
        <h2>Core Concepts!</h2>
          <ul>
            {components.map((component) => {
              return <CoreConcept {...component}/>
            })}
          </ul>
          
        </section>
    )
}
