import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

// Renders App
// React renders teh content of 'App' component inside the div on the page
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement("div"))
  );
});
