import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger);
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <Cocktails />

        </main>
    );
};
export default App;