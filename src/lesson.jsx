import './css/index.css';
import { useState, lazy, Suspense, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaHome, FaBars } from "react-icons/fa";
import "./css/lessonMenu.css";
import hljs from "highlight.js";
import "highlight.js/styles/monokai.css";

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

const lessons = [
	[
		{id: 0, title: "Introduction", content: () => {
			const Comp = lazy(() => import("./lessons/Lesson0.jsx"));
			return <Comp/>;
		}},
		{id: 1, title: "Installing StoryScript", content: () => {
			const Comp = lazy(() => import("./lessons/Lesson1.jsx"));
			return <Comp/>;
		}}, 
		{id: 2, title: "Arithmatic operators", content: () => {
			const Comp = lazy(() => import("./lessons/Lesson2.jsx"));
			return <Comp/>;
		}},
		{id: 3, title: "Hello, world!", content: () => {
			const Comp = lazy(() => import("./lessons/Lesson3.jsx"));
			return <Comp/>;
		}},
		{id: 4, title: "Comments", content: () => {
			const Comp = lazy(() => import("./lessons/Lesson4.jsx"));
			return <Comp/>;
		}},
		{id: 5, title: "Playing with math", content: () => {
			const Comp = lazy(() => import("./practices/Practice0.jsx"));
			return <Comp/>;
		}}
	], // Unit 0
	[
		{id: 0, title: "Data types", content: () => {
			const Comp = lazy(() => import("./lessons/Lesson5.jsx"));
			return <Comp/>;
		}},
        {id: 1, title: "Variables", content: () => {
            const Comp = lazy(() => import("./lessons/Lesson6.jsx"));
            return <Comp/>;
        }}
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
		let resultId = parseInt(props.lid) - 1;
		if (lessons[props.unit]?.[resultId]) {
			previousInfo = {unit: props.unit, lesson: resultId};
			return <button onClick={goPrevious} id="second"><FaArrowLeft/> Previous</button>
		}
		if (props.unit - 1 < 0) {
			console.log("This is the first lesson. Cannot go to the previous lesson.");
			return "";
		}
        let unitId = props.unit;
		if (lessons[--unitId]) {
			previousInfo = {unit: unitId, lesson: lessons[unitId].length - 1};
			return <button onClick={goPrevious} id="second"><FaArrowLeft/> Previous</button>;
		}
		console.error("Unexpected error: Unexpected unreachable code, but reached.");
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
		console.error("Unexpected error: Unexpected unreachable code, but reached.");
		return "";
	}

	function goHome() {
		window.location.href = "/";
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

function LessonMenu(props) {
	let params = useParams();
	let [unit, setUnit] = useState(params.unit);
	let [id, setId] = useState(params.id);
	let [sideBarShouldAppear, setSideBarShouldAppear] = useState(false);

    function LoadingText() {
        useEffect(() => {
            return () => {
                hljs.highlightAll();
            }
        }, []);

        return <main><h1>Loading lesson...</h1></main>;
    }

	function getLessonContent() {
		try {
			return lessons[unit][id].content();
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
			<Suspense fallback={<LoadingText/>}>
				{getLessonContent()}
			</Suspense>
		</div>
	);
}

export default LessonMenu;
