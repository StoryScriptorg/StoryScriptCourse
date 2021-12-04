import './css/index.css';
import "./css/bootstrap.min.css";
import './css/App.css';
import { FaSquare, FaCheckSquare } from "react-icons/fa";

const theme = localStorage.getItem("theme");
if(!theme) {
  localStorage.setItem("theme", "light");
} else if(theme === "dark") {
  require("./css/dark/index-dark.css");
  require('./css/dark/App-dark.css');
} else if(theme === "solarized") {
  require("./css/solarized/index-solarized.css");
  require('./css/solarized/App-solarized.css');
}

function App() {
  let lesson = localStorage.getItem("currentLesson") ?? "Lesson 0 - Introduction";
  let lessonInfo = {unit: localStorage.getItem("currentUnit") ?? 0, id: localStorage.getItem("currentLessonId") ?? 0};
  let unit = 0;
  let practiceCompleted = localStorage.getItem("practiceCompleted") ?? 0;

  function getCompletionRepresentation(lunit, lessonId) {
    if(unit > lunit) return <FaCheckSquare/>;
    if(lessonInfo.id > lessonId && lunit <= unit) return <FaCheckSquare/>;
    return <FaSquare/>;
  }

  function getPracticesCompletionRepresentation(pId) {
    if(pId < practiceCompleted) return <FaCheckSquare/>;
    return <FaSquare/>;
  }

  return (
    <div className="App">
      <h1>Learn StoryScript</h1><br/>
      <div id="WhereYouLeftOff">
        <div className="lessonInfo">
          <b>{lesson}</b><br/>
          <span>Unit {unit}</span>
        </div>
        <a href={`lesson/${lessonInfo.unit}/${lessonInfo.id}`}><button className="btn btn-primary">Continue</button></a>
      </div><br></br>
      <h2>Unit 0 - First code</h2>
      <ul>
        <li><a href="lesson/0/0">{getCompletionRepresentation(0, 0)} Lesson 0 - Introduction</a></li>
        <li><a href="lesson/0/1">{getCompletionRepresentation(0, 1)} Lesson 1 - Installing StoryScript</a></li>
        <li><a href="lesson/0/2">{getCompletionRepresentation(0, 2)} Lesson 2 - Arithmatic operators</a></li>
        <li><a href="lesson/0/3">{getCompletionRepresentation(0, 3)} Lesson 3 - Hello, world!</a></li>
        <li><a href="lesson/0/4">{getCompletionRepresentation(0, 4)} Lesson 4 - Comments</a></li>
        <li><a href="lesson/0/5">{getPracticesCompletionRepresentation(0)} Practice 0 - Playing with Math</a></li>
      </ul>
      <h2>Unit 1 - Playing with Data</h2>
      <ul>
        <li><a href="lesson/1/0">{getCompletionRepresentation(1, 0)} Lesson 0 - Data types</a></li>
        <li><a href="lesson/1/1">{getCompletionRepresentation(1, 1)} Lesson 1 - Variables</a></li>
        <li><a href="lesson/1/2">{getCompletionRepresentation(1, 2)} Lesson 2 - Built-in methods</a></li>
        <li><a href="lesson/1/3">{getCompletionRepresentation(1, 3)} Lesson 3 - Lists</a></li>
        <li><a href="lesson/1/4">{getCompletionRepresentation(1, 4)} Lesson 4 - Type conversion</a></li>
        <li><a href="lesson/1/5">{getPracticesCompletionRepresentation(1)} Practice 0 - Index someone!</a></li>
      </ul>
      <div id="WhereYouLeftOff">
        You have completed {lessonInfo.unit} out of 2 units.<br/>
        And {practiceCompleted} out of 2 practices. Keep learning!
      </div>
    </div>
  );
}

export default App;
