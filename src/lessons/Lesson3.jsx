import { IconContext } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";
import ExternalLink from "../components/ExternalLink.jsx";

export default function Lesson3() {
    return (
        <IconContext.Provider value={{size: "0.7em"}}>
            <main>
                <span>Unit 0 - Lesson 3</span>
                <h1>Hello, world!</h1>
                <p>
                    Finally, you've reached the lesson where you gonna know what in the world is <code>print</code> exactly.<br/>
                    As the name suggest, <code>print</code> prints out the message to the screen.<br/>
                    Its accept 1 <ExternalLink href="https://en.wikipedia.org/wiki/Parameter_(computer_programming)">argument <FaExternalLinkAlt/></ExternalLink>. which is the data you wanted to print.<br/>
                    And, <code>print</code> is a <i>built-in function</i> which means that you can use this anywhere in your program<br/>
                    And yes, you can print almost everything.<br/>
                    Example of the print method:
                </p><pre><code className="language-python">
{`print("message")
print(69)
print(3.14)`}
                </code></pre>
            </main>
        </IconContext.Provider>
    )
}