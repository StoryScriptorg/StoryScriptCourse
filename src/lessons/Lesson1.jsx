import { IconContext } from "react-icons";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ExternalLink from "../components/ExternalLink.jsx";

export default function Lesson1() {
	async function download() {
		let req = await fetch("https://api.github.com/repos/StoryScriptorg/StoryScript/releases/latest");
		let data = await req.json();
		window.open(data.html_url, "_blank");
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