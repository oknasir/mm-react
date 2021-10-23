import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCoffee} from "@fortawesome/free-solid-svg-icons"

function Home() {
  return (
    <div className="App">
      <h1>Welcome to our Apllication</h1>
      <FontAwesomeIcon size="10x" icon={faCoffee} />
    </div>
  );
}

export default Home;
