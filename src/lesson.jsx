import './css/index.css';
import React, { useState } from 'react';
import { IconContext } from "react-icons";
import { FaArrowLeft, FaArrowRight, FaHome, FaExternalLinkAlt, FaGithub, FaBars } from "react-icons/fa";
import "./css/lessonMenu.css";

const theme = localStorage.getItem("theme");
switch(theme) {
	case "light":
		break;
	case "dark":
		require("./css/dark/index-dark.css");
	  require("./css/dark/lessonMenu-dark.css");
	  break;
	case "solarized":
		require("./css/solarized/index-solarized.css");
		require("./css/solarized/lessonMenu-solarized.css");
		break;
	default:
		console.error(`Unexpected theme value "${theme}"`);
		break;
}

let practiceCompleted = localStorage.getItem("practiceCompleted") ?? 0;

function ExternalLink(props) {
	return <a className="link" href={props.href} target="_blank" rel="noopener noreferrer">{props.children}</a>
}

function Lesson1() {
	function download() {
		let req = window.fetch("https://");
		window.open("");
	}

	return (
		<IconContext.Provider value={{size: "0.7em"}}>
			<main>
				<span>Unit 0 - Lesson 1</span>
				<h1>Installing StoryScript</h1>
				<p>
					In this lesson, We will setup StoryScript interpreter.<br/>
					First, Go to <ExternalLink href="https://github.com/StoryScriptorg/StoryScript/releases">this page</ExternalLink>. which lists all of available StoryScript releases.<br/>
					Then, you could download the lastest one.<br/>
					Or, Click at the button below to download the latest version:<br/>
					<button onClick={download} className="btn1">Download StoryScript <FaGithub/></button><br/>
					After you've downloaded StoryScript, you can just unzip the file, and open <code>shell.exe</code> !<br/>
					When opening it, type <code>print ("Hello, world!")</code>, then press Enter.<br/>
					Then you will see a message said <code>Hello, world!</code>. Congrats! You just tell StoryScript to print <code>Hello, world!</code>
				</p>
				<h2>File execution</h2>
				<p>
					Most of the time, you won't type in shell to make a complete program. you put the code in a file and execute them.<br/>
					In this section, you will learn how to execute a file.<br/>
					First, create a file. you can call it anything. and use <code>.sts</code> as the file extension.<br/>
					For example, <code>hello.sts</code>. Then put the same code you typed before in it.<br/>
					Which is <code>print ("Hello, world!")</code>.<br/>
					After you have saved the file, You can go into your Command line (For beginners, click <ExternalLink href="https://www.howtogeek.com/235101/10-ways-to-open-the-command-prompt-in-windows-10/">here <FaExternalLinkAlt/></ExternalLink> for how)<br/>
					Then, type the following command (and replace it with the real info):
				</p><pre>
					<i>path/to/StoryScript/shell/shell.exe</i> -i <i>filename</i>.sts
				</pre><p>
					For example:
				</p><pre>
					C:\Users\OwOuser\Downloads\shell\shell.exe -i hello.sts
				</pre><p>
					And then you should receive a message said <code>Hello, world!</code>
				</p>
			</main>
		</IconContext.Provider>
	);
}

function Practice1() {
	const [ans1, setAns1] = useState("");
	const [ans2, setAns2] = useState("");

	function handleChange(e) {
		if(e.target.id === "ans1") {
			setAns1(e.target.value);
		} else if(e.target.id === "ans2") {
			setAns2(e.target.value);
		}
	}

	function checkAnswer() {
		let correct = true;
		if (ans1 === "print") {
			if (theme === "light") {
				document.getElementById("ans1").style.color = "green";
			} else {
				document.getElementById("ans1").style.color = "lime";
			}
		} else {
			document.getElementById("ans1").style.color = "red";
			correct = false;
		}
		if (ans2 === "**") {
			if (theme === "light") {
				document.getElementById("ans2").style.color = "green";
			} else {
				document.getElementById("ans2").style.color = "lime";
			}
		} else {
			document.getElementById("ans2").style.color = "red";
            correct = false;
		}
		if (correct) {
			alert("Correct! You can now click next to go to the next lesson.");
			if (practiceCompleted < 1) {
				practiceCompleted = 1;
				localStorage.setItem("practiceCompleted", 1);
			}
		} else {
			alert("Incorrect! Try edit your answer. You can go back to the previous lesson in the unit to learn again.");
		}
	}

	return (
		<IconContext.Provider value={{size: "0.7em"}}>
			<main>
				<span>Unit 0 - Practice 0</span>
				<h1>Playing with math</h1>
				<p>
					Fill in the blank, And then click Finish to check your answer.
				</p>
				<h2>Hello, world!</h2>
				<pre>
<input onChange={handleChange} id="ans1" size="5" maxLength="5" type="text"/> ("Hello, " + "world!")
				</pre>
				<h2>Exponentiation</h2>
				<pre>
2 <input onChange={handleChange} id="ans2" size="2" maxLength="2" type="text"/> 2
				</pre>
				<button onClick={checkAnswer} className="btn2">Finish</button>
			</main>
		</IconContext.Provider>
	);
}

const lessons = [
	[
		{id: 0, title: "Introduction", content: (
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
						StoryScript is a very simple programming language. But it has a <i>big</i> limitation.<br/>
						Which is, StoryScript parsing is <i>space based</i>. But over time, StoryScript will make this limitation as a smallest limit as possible.<br/>
						Meaning, This will not possible:
					</p><pre>
print("Hello, world!")
					</pre><p>
						But it must be this instead:
					</p><pre>
print ("Hello, world!")
					</pre><p>
						This may sound like a hard to follow and a stupid limitation at the same time, But at the moment, It has to be like this.
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
		)}, {id: 1, title: "Installing StoryScript", content: <Lesson1/>}, 
		{id: 2, title: "Arithmatic operators", content: (
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
		)}, {id: 3, title: "Hello, world!", content: (
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
		)}, /* eslint-disable */
		{id: 4, title: "Comments", content: (
			<IconContext.Provider value={{size: "0.7em"}}>
				<main>
					<span>Unit 0 - Lesson 4</span>
					<h1>Comments</h1>
					<p>
						In the world of programming, comments are being used for explaining <i>what does the code do.</i><br/>
						But note that sometimes, If the code is already pretty <i>self-explanatory</i>, then you don't have to comment anything into it.<br/>
						There are 2 types of Comments in StoryScript. <b>Multiline comments</b> and <b>Inline comments</b>.<br/>
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
		)}, /* eslint-enable */
		{id: 5, title: "Playing with math", content: <Practice1/>}
	], // Unit 0
	[
		{id: 0, title: "Data types", content: (
			<IconContext.Provider value={{size: "0.7em"}}>
				<main>
					<span>Unit 1 - Lesson 0</span>
					<h1>Data types</h1>
					<p>
						In StoryScript, Data are <i>strictly typed</i>. But before we learn what is <i>strictly typed</i>, We will learn about basic data types in StoryScript first.<br/>
						Today, We will learn about 5 data types in StoryScript. You can see them in the table below:
					</p><table className="table1">
						<thead>
							<tr>
								<td>Data type</td>
								<td>Full name</td>
								<td>Description</td>
								<td>Example</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><code>int</code></td>
								<td>Integer</td>
								<td>Full Numbers</td>
								<td>69, 128, 16</td>
							</tr>
							<tr>
								<td><code>float</code></td>
								<td>Floating-point decimal</td>
								<td>Decimal</td>
								<td>3.141 6.9 141.3</td>
							</tr>
							<tr>
								<td><code>string</code></td>
								<td>String</td>
								<td>Message or Text</td>
								<td>"Hello, world!" "Good bye."</td>
							</tr>
							<tr>
								<td><code>bool</code></td>
								<td>Boolean</td>
								<td>Boolean values. (true or false)</td>
								<td>true false</td>
							</tr>
							<tr>
								<td><code>dynamic</code></td>
								<td>Dynamic</td>
								<td>Dynamic values. This type will <i>ignore</i> the strictly typed rule.</td>
								<td>new Dynamic (10)<br/>new Dynamic("string")</td>
							</tr>
						</tbody>
					</table>
				</main>
			</IconContext.Provider>
		)}
	] // Unit 1
]

function NavBar(props) {
	let previousInfo = {unit: 0, lesson: 0};
	let nextInfo = {unit: 0, lesson: 1};


	function goPrevious() {
		props.setters.unit(previousInfo.unit);
		props.setters.id(previousInfo.lesson);
		window.history.pushState("", "", `../${previousInfo.unit}/${previousInfo.lesson}`);
	}

	function goNext() {
		props.setters.unit(nextInfo.unit);
		props.setters.id(nextInfo.lesson);
		window.history.pushState("", "", `../${nextInfo.unit}/${nextInfo.lesson}`);
		localStorage.setItem("currentLesson", `Lesson ${nextInfo.lesson} - ${lessons[nextInfo.unit]?.[nextInfo.lesson]?.title}`);
		localStorage.setItem("currentUnit", nextInfo.unit);
		localStorage.setItem("currentLessonId", nextInfo.lesson);
	}

	function findPrevious() {
		let rId = parseInt(props.lid) - 1;
		if (lessons[props.unit]?.[rId]) {
			previousInfo = {unit: props.unit, lesson: rId};
			return <button onClick={goPrevious} id="second"><FaArrowLeft/> Previous</button>
		}
		if (props.unit - 1 < 0) {
			console.log("This is the first lesson. Cannot go to the previous lesson.");
			return "";
		}
		if (lessons[props.unit - 1]) {
			previousInfo = {unit: props.unit - 1, lesson: rId};
			return <button onClick={goPrevious} id="second"><FaArrowLeft/> Previous</button>;
		}
		console.error("Unexpected error: Expected unreachable code, but reached.");
		return "";
	}

	function findNext() {
		let rId = parseInt(props.lid) + 1;
		if(lessons[props.unit]?.[rId]) {
			nextInfo = {unit: props.unit, lesson: rId};
			return <button onClick={goNext} id="third"><FaArrowRight/> Next</button>;
		}
		if (parseInt(props.unit) + 1 > lessons.length - 1) {
			console.log("This is the last lesson. Cannot go to the previous lesson.");
			return "";
		}
		if(lessons[parseInt(props.unit) + 1]) {
			nextInfo = {unit: parseInt(props.unit) + 1, lesson: 0}
			return <button onClick={goNext} id="third"><FaArrowRight/> Next</button>;
		}
		console.error("Unexpected error: Expected unreachable code, but reached.");
		return "";
	}

	function goHome() {
		window.location.href = "../../";
	}

	function toggleSideBar() {
		if(props.sidebarShouldAppear) {props.setters.sidebar(false);}
		else props.setters.sidebar(true);
	}

	return (
		<nav>
			<button style={{flex: "15%"}} onClick={toggleSideBar}><FaBars/></button>
			<button onClick={goHome} id="first"><FaHome/> Home</button>
			{findPrevious()}
			{findNext()}
		</nav>
	);
}

function SideBar(props) {
	function changeLesson(e) {
		let [unit, lid] = e.target.dataset.value.split("|");
		props.setters.unit(unit);
		props.setters.id(lid);
		window.history.pushState("", "", `../${unit}/${lid}`);
	}

	return (
		<div className="sidebar">
			<b>Unit 0 - First code</b>
			<ul>
				<li><button data-value="0|0" onClick={changeLesson}>L0 - Introduction</button></li>
				<li><button data-value="0|1" onClick={changeLesson}>L1 - Installing StoryScript</button></li>
				<li><button data-value="0|2" onClick={changeLesson}>L2 - Arithmatic operators</button></li>
				<li><button data-value="0|3" onClick={changeLesson}>L3 - Hello, world!</button></li>
				<li><button data-value="0|4" onClick={changeLesson}>L4 - Comments</button></li>
				<li><button data-value="0|5" onClick={changeLesson}>P0 - Playing with math</button></li>
			</ul>
			<b>Unit 1 - Playing with Data</b>
			<ul>
				<li><button data-value="1|0" onClick={changeLesson}>L0 - Data types</button></li>
				<li><button data-value="1|1" onClick={changeLesson}>L1 - Variables</button></li>
				<li><button data-value="1|2" onClick={changeLesson}>L2 - Built-in methods</button></li>
				<li><button data-value="1|3" onClick={changeLesson}>L3 - Lists</button></li>
				<li><button data-value="1|4" onClick={changeLesson}>L4 - Type conversion</button></li>
				<li><button data-value="1|5" onClick={changeLesson}>P0 - Index someone!</button></li>
			</ul>
		</div>
	)
}

function LessonMenu({ match: { params }}) {
	let [unit, setUnit] = useState(params.unit);
	let [id, setId] = useState(params.id);
	let [sideBarShouldAppear, setSideBarShouldAppear] = useState(false);

	function getLessonContent() {
		try {
			return lessons[unit][id].content;
		} catch(err) {
			return (
				<center>
					<h1>404</h1>
					<h4>Uh oh! Looks like the unit or lesson you are looking for doesn't exist.</h4>
					<a href="classlist" className="link">Go back to lesson list</a><br/>
				</center>
			)
		}
	}

	function getSideBar() {
		if (sideBarShouldAppear) return <SideBar setters={{unit: setUnit, id: setId}}/>;
		return "";
	}

	return (
		<div className="lessonMenu">
			<NavBar unit={unit} lid={id} setters={{unit: setUnit, id: setId, sidebar: setSideBarShouldAppear}} sidebarShouldAppear={sideBarShouldAppear}/><br/>
			{getSideBar()}
			{getLessonContent()}
		</div>
	);
}

export default LessonMenu;
