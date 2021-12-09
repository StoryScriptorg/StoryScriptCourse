import { IconContext } from "react-icons";

export default function Lesson5() {
	return (
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
	);
}
