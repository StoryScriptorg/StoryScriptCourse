import { IconContext } from "react-icons";

export default function Lesson6() {
	return (
		<IconContext.Provider value={{size: "0.7em"}}>
			<main>
				<span>Unit 1 - Lesson 1</span>
				<h1>Variables</h1>
				<p>
                    Variable is a way to store data and use a data multiple times to prevent code duplication and allowing for a more flexible application.<br/>
                    Here's how you can declare a variable in StoryScript:
                </p>
                <pre><code className="language-csharp">
Type name &#61; value
                </code></pre>
                <p>
                    Replace <code>Type</code> with one of the data types from the previous lesson that matches the value of the variable, and replace the <code>name</code> with the descriptive name of what the value is describing. And replace the <code>value</code> with anything that has the type to the type you specified earliar.<br/>
                    For example:
                </p>
                <pre><code className="language-csharp">
{`// This is not valid as \`3.12\` is a float and isn't an int.
int x = 3.12
// This is valid as \`12.33247\` is a float and it matches the type specified.
float y = 12.33247`}
                </code></pre>
                <p>
                    And then, you may wonder why do you need to declare variables instead of just typing the value out?<br/>
                    Consider the following example:
                </p>
                <pre><code className="language-python">
{`// Do some calculations
print(3.14 ** 2)
print(3.14 * 4)
print(3.14 / 2)`}
                </code></pre>
                <p>
                    This program is completely static. And you may think that there's nothing wrong with this code. Yes! There isn't.
                    But there's a little problem that you might didn't look into. which is:<br/>
                    If you wanted to change <code>3.14</code> to something else, You would need to replace them all to the new number.<br/>
                    And again, you would think "eh, that's easy. I could just press <kbd>Ctrl</kbd> + <kbd>H</kbd> (Keybind for replace text in most editors) and replace them all."<br/>
                    That's right. But in the case of receiving inputs, you doesn't know what is the user is going to type in. so that would be a problem later on.<br/>
                    Now, consider the following program that uses variable:
                </p>
                <pre><code className="language-python">
{`// Do some calculations
float num = 32.41
print(num ** 2)
print(num * 4)
print(num / 2)`}
                </code></pre>
                <p>
                    Now, as you can see, The input number that is going to be processed is now a variable. Which means, You can just change the <code>num</code> variable to be something else and the calculations will automatically be changed.
                </p>
			</main>
		</IconContext.Provider>
	);
}
