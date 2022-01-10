import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Footer from "./footer.jsx"

const App = lazy(() => import('./App.jsx'));
const LessonMenu = lazy(() => import('./lesson.jsx'));

const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<center><h2>Loading...</h2></center>}>
      <Routes>
        <Route exact path="/" element={<App />}/>
        <Route path="/lesson/:unit/:id" element={<LessonMenu />}/>
      </Routes>
    </Suspense>
  </BrowserRouter>
)

ReactDOM.render(<Suspense fallback={<center><h2>Loading...</h2></center>}><AppRouter /><Footer /></Suspense>, document.getElementById("root"))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
