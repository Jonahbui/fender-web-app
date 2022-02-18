import React from "react";

import ResponsiveAppBar from "./Appbar/ResponsiveAppBar";

// Export a component that renders the routes within fragments
// Component will be rendered at entry point of application, making routes available when app loads
export default function App(props){
  return <div>
    <ResponsiveAppBar/>
  </div>
}