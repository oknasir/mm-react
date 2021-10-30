import { useEffect, useState } from 'react';

import {Container, Button} from 'react-bootstrap';

import {Pagination, DataTable} from '../../helpers'
import NavigationBar from "../../navs/NavigationBar"

function ViewForm() {
  const [applications, setApplications] = useState([])
  const [results, setResults] = useState(null)

  useEffect(()=>{
    fetchData()
  }, [])

  const fetchData = () => {
    const data = [
      {id: 1, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 2, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 3, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 4, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 5, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 6, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 7, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 8, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 9, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 10, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 11, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 12, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 13, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 14, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 15, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 16, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 17, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 18, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 19, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 20, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 21, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 22, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 23, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 24, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
      {id: 25, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir'},
    ]

    setApplications(data)
  }

  const testLoops = () => {
    console.log('test loops area')

    const results = applications.map((user, index) => {

      // const name = user.first_name +' '+ user.last_name
      // const name = `${user.first_name} ${user.last_name}`

      user.name = `${user.first_name} ${user.last_name}`
      
      // console.log(name)

      // if(index===5){
      //   return user?.id
      // }
      return user
    });
    
    // user ? user.id : null
 /*
    if(user) {
      return user.id
    } else {
      return null
    }


    const numbers = [4, 9, 16, 25];
    document.getElementById("demo").innerHTML = numbers.map((item) => {
        return Math.sqrt(item)
    });
*/
    console.log('results: ', results);
    console.log('applications: ', applications);
  }

  /*
  - map
  - filter
  - find
  - forEach
  - findIndex
  - reduce
  - reverse
  - some
  - sort
  */

  return (
    <Container>
      <NavigationBar />

      <Button variant="success" onClick={testLoops}>Run Loop</Button>

      {results}
      
      <DataTable data={applications} />

      <Pagination />
    </Container>
  );
}

export default ViewForm;
