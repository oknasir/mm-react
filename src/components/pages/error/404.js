import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom"

function NotFound() {
  const history = useHistory();
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <div className="position-relative">
          <h1 className="display-xxl m-0">OOPS!</h1>
          <p className="position-absolute bottom-0 start-50 translate-middle-x text-nowrap d-inline-block display-5 mb-0 bg-white py-1 px-3">404 - The page can't be found</p>
        </div>

        <Button onClick={(e) => {
          e.preventDefault()

          history.push('/')
        }} variant="orange" className="mt-4">Go To Homepage</Button>
      </div>
    </div>
  );
}

export default NotFound;
  