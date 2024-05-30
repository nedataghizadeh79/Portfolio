import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import Skills from "./component/Skills";
import Projects from "./component/Projects";

function App() {
    return (
        <div>
            <NavBar/>
            <Banner/>
            <Skills/>
            <Projects/>
        </div>

    );
}

export default App;
