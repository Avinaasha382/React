import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section";

export default function Examples() {
    const [content,setContent] = useState("Please select a value")

    function handleSelect(item) {
        console.log(item);
        setContent(item);
    }

    return (
        <>
            <Section id="examples" title = "Examples">
            <menu>
                <TabButton onSelect = {() => handleSelect("Components")}>Components</TabButton>
                <TabButton onSelect = {() => handleSelect("Props")}>Props</TabButton>
            </menu>
            </Section>

            {content}
        </>
    )

}