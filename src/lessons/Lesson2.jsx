import { IconContext } from "react-icons";

export default function Lesson2() {
    return (
        <IconContext.Provider value={{size: "0.7em"}}>
            <main>
                <span>Unit 0 - Lesson 2</span>
                <h1>Arithmatic operators</h1>
                <p>
                    In almost every programming language, there will be a very important part, called <b>math</b>.<br/>
                    In this lesson, you will learn about basic math operations in StoryScript.<br/>
                    First, there are 5 arithmatic operators in StoryScript. You can see all of them in the below table:
                </p>
                <table className="table1">
                    <thead>
                        <tr>
                            <td>Operator</td>
                            <td>Operation</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>+</code></td>
                            <td>Add</td>
                        </tr>
                        <tr>
                            <td><code>-</code></td>
                            <td>Subtract</td>
                        </tr>
                        <tr>
                            <td><code>*</code></td>
                            <td>Multiplication</td>
                        </tr>
                        <tr>
                            <td><code>/</code></td>
                            <td>Division</td>
                        </tr>
                        <tr>
                            <td><code>**</code></td>
                            <td>Exponentiation</td>
                        </tr>
                    </tbody>
                </table><p>
                    And that's all the arithmatic operators there are in StoryScript.<br/>
                    In StoryScript shell, you can test them by typing the math expression directly.<br/>
                    For example, <code>2 ** 2</code> should output 4.
                </p>
                <h2>Basic string operations</h2>
                <p>
                    In this section, you will learn about basic string (message) operations.<br/>
                </p>
                <h3>String concatination</h3>
                <p>
                    By connect message together, We call it <b>String concatination</b>.<br/>
                    Basic String concatination can be done by using the plus (<code>+</code>) sign.<br/>
                    For example:
                </p><pre>
    "Hello, " + "world!"
                </pre>
                <h3>String multiplication</h3>
                <p>
                    By "String multiplication", this means you <i>multiply</i> the message.<br/>
                    This can be done using the star (<code>*</code>) sign.<br/>
                    It may sounds a bit hard to understand, But here's the example:
                </p><pre>
    "Hello!" * 4
                </pre><p>
                    The output of the code above should be "Hello!Hello!Hello!Hello!".
                </p>
            </main>
        </IconContext.Provider>
    )
}