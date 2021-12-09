import { IconContext } from "react-icons";

export default function Lesson4() {
    return (
        <IconContext.Provider value={{size: "0.7em"}}>
            <main>
                <span>Unit 0 - Lesson 4</span>
                <h1>Comments</h1>
                <p>
                    In the world of programming, comments are being used for explaining <i>what does the code do.</i><br/>
                    But note that sometimes, If the code is already pretty <i>self-explanatory</i>, then you don't have to comment anything into it.<br/>
                    There are 2 types of Comments in StoryScript. <b>Multiline comments</b> and <b>Inline comments</b>.<br/>
                    { /* eslint-disable */ }
                    Multiline comments are comments that use <code>/*</code> as the sign to start the comment section, and <code>*/</code> as the sign to end the comment section.<br/>
                    For example:
                </p><pre>
print ("Hello, world!") /*<br/>
This is multiline comment.<br/>
As the name suggest, This comment can be expand to many lines<br/>
like this.<br/>
*/
                </pre><p>
                    And next, <b>Inline comments</b>. Inline comments are a comments that is only limit to one line.<br/>
                    It uses <code>//</code> as the sign to start the comment. But it has to end sign. meaning anything after that will be considered comments.<br/>
                    For example:
                </p><pre>
print ("Hello, world!") // this is inline comments<br/>
// inline comments cannot expand to other lines normally<br/>
// like multiline commands does
                </pre>
            </main>
        </IconContext.Provider>
    )
}