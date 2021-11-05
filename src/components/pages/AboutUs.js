import NavigationBar from "../navs/NavigationBar"
import {useEffect} from "react";

function AboutUs() {
    useEffect(() => {
        document.title = 'About Us | Nasir Mehmood\'s Resume'
    }, [])

    return (
        <>
            <NavigationBar/>

            <h1>About page is here</h1>
        </>
    );
}

export default AboutUs;
