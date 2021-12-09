import { IconContext } from "react-icons";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ExternalLink from "../components/ExternalLink.jsx";

export default function Lesson0() {
    return (
        <IconContext.Provider value={{size: "0.7em"}}>
            <main>
                <span>Unit 0 - Lesson 0</span>
                <h1>Introduction</h1>
                <p>
                    Hello and welcome to the <b>StoryScript</b> course!<br/>
                    In this lesson, We will talk about the basics of StoryScript.
                </p>
                <h2>What is StoryScript?</h2>
                <p>
                    StoryScript is a <i>Mixed paradigm</i> programming language. Which means there's objects (<ExternalLink href="https://en.wikipedia.org/wiki/Object-oriented_programming">OOP <FaExternalLinkAlt/></ExternalLink>), and there's functions (<ExternalLink href="https://en.wikipedia.org/wiki/Functional_programming">Functional <FaExternalLinkAlt/></ExternalLink>).<br/>
                    And StoryScript is very simple. like Python.
                </p>
                <h2>StoryScript complexity</h2>
                <p>
                    StoryScript is a very simple programming language. It has a simple syntax, and it's very easy to understand. Especially If you ever touched the C family language (like C, C++, C#) before.
                </p>
                <h2>The speed of StoryScript</h2>
                <p>
                    StoryScript is an <ExternalLink href="https://en.wikipedia.org/wiki/Interpreter_(computing)">interpreter <FaExternalLinkAlt/></ExternalLink> which has an interactive <ExternalLink href="https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop">language shell <FaExternalLinkAlt/></ExternalLink> and a File execution support. Just like <ExternalLink href="https://en.wikipedia.org/wiki/Python_(programming_language)">Python. <FaExternalLinkAlt/></ExternalLink><br/>
                    And StoryScript interpreter is made in Python. Which you may think "then, StoryScript would be pretty slow", But, Remember that in every programming languages, If you write it to be slow, it will be slow. If you write it to be fast, it will be fast.<br/>
                    Here is the Benchmarking result of basic expression evaluation time of StoryScript:<br/>
                    </p><pre>
Hello world (Once): 0.0001996999999999971ms<br/>
Hello world (Once): 0.0007591000000000125ms<br/>
Hello world (Once): 9.880000000000999e-05ms<br/>
Hello world (25): 0.0012548000000000004ms<br/>
Hello world (50): 0.0023697999999999775ms<br/>
Variable declaration (Once): 9.660000000000224e-05ms<br/>
Variable declaration (Once): 7.009999999998962e-05ms<br/>
Variable declaration (Once): 6.570000000000187e-05ms<br/>
Hello world loopfor (10) loop (Once): 4.609999999999337e-05ms<br/>
Hello world loopfor (10) loop (Once): 2.5200000000002998e-05ms<br/>
tingtong loopfor (10) loop (Once): 2.5700000000017376e-05ms<br/>
tingtong loopfor (10) loop (Once): 2.569999999998962e-05ms<br/>
                    </pre><p>
                    <ExternalLink href="https://github.com/StoryScriptorg/StoryScript/tree/main/src/benchmark.txt">See this on Github <FaGithub/></ExternalLink><br/>
                    <ExternalLink href="https://github.com/StoryScriptorg/StoryScript/tree/main/src/benchmarking.py">See the benchmarking code <FaGithub/></ExternalLink><br/><br/>
                    But for people who still love other languages or cares about speed, StoryScript has a <ExternalLink href="https://en.wikipedia.org/wiki/Source-to-source_compiler">transpiler <FaExternalLinkAlt/></ExternalLink> for other programming languages.
                    Here are the known ones:
                </p>
                <table className="table1">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Is official</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CTranspiler</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </IconContext.Provider>
    );
}