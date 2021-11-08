import { useEffect, useState } from 'react';

import {Container, Button} from 'react-bootstrap';

import {Pagination, DataTable} from '../../helpers'
import NavigationBar from "../../navs/NavigationBar"

function ViewForm() {
  const [applications, setApplications] = useState([])
  const [results] = useState(null)

  useEffect(()=>{
    fetchData()
    document.title = 'Application Form\'s List | Nasir Mehmood\'s Resume'
  }, [])

  const fetchData = () => {
    const data = [
      {id: 1, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 10},
      {id: 2, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 11},
      {id: 3, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 8},
      {id: 4, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 11},
      {id: 5, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 11},
      {id: 6, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 7},
      {id: 7, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 11},
      {id: 8, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 11},
      {id: 9, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 1},
      {id: 10, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 11},
      {id: 11, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 5},
      {id: 12, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 19},
      {id: 13, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 11},
      {id: 14, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 20},
      {id: 15, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 15},
      {id: 16, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 11},
      {id: 17, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 11},
      {id: 18, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 18},
      {id: 19, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 11},
      {id: 20, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 13},
      {id: 21, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 6},
      {id: 22, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 11},
      {id: 23, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 9},
      {id: 24, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 12},
      {id: 25, first_name: 'Nasir', last_name: 'Mehmood', username: 'oknasir', age: 16},
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


data.filter((item) => {
  return item.id > 5 && item.id < 10
})

data.filter((item) => (item.id > 5 && item.id < 10)).map((item) => (item.first_name))

data.splice(data.findIndex((item) => (item.id===14)), 1)
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
