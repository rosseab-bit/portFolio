import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="python" element={() => {
        window.location.replace('https://www.python.org/');
        return null;
      }} />
      <Route path="flask" element={() => {
        window.location.replace('https://flask.palletsprojects.com/en/2.2.x/');
        return null;
      }} />
      <Route path="django" element={() => {
        window.location.replace('https://www.djangoproject.com/');
        return null;
      }} />
      <Route path="javascript" element={() => {
        window.location.replace('https://www.javascript.com/');
        return null;
      }} />
      <Route path="reacjs" element={() => {
        window.location.replace('https://es.reactjs.org/');
        return null;
      }} />
      <Route path="docker" element={() => {
        window.location.replace('https://www.docker.com/');
        return null;
      }} />
      <Route path="linux" element={() => {
        window.location.replace('https://es.wikipedia.org/wiki/GNU/Linux');
        return null;
      }} />
      <Route path="github" element={() => {
        window.location.replace('https://github.com/');
        return null;
      }} />
      <Route path="bash" element={() => {
        window.location.replace('https://es.wikipedia.org/wiki/Bash');
        return null;
      }} />
      <Route path="mysql" element={() => {
        window.location.replace('https://www.mysql.com/');
        return null;
      }} />
      <Route path="tkinter" element={() => {
        window.location.replace('https://docs.python.org/es/3/library/tkinter.html');
        return null;
      }} />
      <Route path="linkedin" element={() => {
        window.location.replace('https://www.linkedin.com/in/roseabdev/');
        return null;
      }} />
      <Route path="gmail" element={() => {
        window.location.replace('https://www.gmail.com');
        return null;
      }} />
      <Route path="whatsapp" element={() => {
        window.location.replace('https://wa.me/5491133476418');
        return null;
      }} />
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
