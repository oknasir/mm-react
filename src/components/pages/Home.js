import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCoffee} from "@fortawesome/free-solid-svg-icons"

import NavigationBar from "../navs/NavigationBar"

function Home() {
  return (
    <>      
      <NavigationBar />

      <h1>Welcome to our Apllication</h1>
      <FontAwesomeIcon size="10x" icon={faCoffee} />
    </>
  );
}

export default Home;
