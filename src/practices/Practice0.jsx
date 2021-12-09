import { useState } from 'react';
import { IconContext } from 'react-icons';

let practiceCompleted = localStorage.getItem("practiceCompleted") ?? 0;
const theme = localStorage.getItem("theme");

export default function Practice0() {
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
            return 0;
		}
        alert("Incorrect! Try edit your answer. You can go back to the previous lesson in the unit to learn again.");
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