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
                </p><pre>
                    print ("message")<br/>
                    print (69)<br/>
                    print (3.14)
                </pre>
                <h2>The limitation</h2>
                <p>
                    You may see in Lesson 0 (StoryScript complexity section) that <code>print("something")</code> is invalid but <code>print ("something")</code> is the correct way of doing it<br/>
                    This is because the code processor needs to know what <i>function</i> you are looking for exactly.<br/>
                    You can read more about this in the <a className="link" href="https://gitbook.io/StoryScript/">language reference</a> documentation.
                </p>
            </main>
        </IconContext.Provider>
    )
}