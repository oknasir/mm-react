import { useEffect, useState } from 'react';

import {Container} from 'react-bootstrap';

import {Pagination, DataTable} from '../../helpers'
import NavigationBar from "../../navs/NavigationBar"

function ViewForm() {
  const [applications, setApplications] = useState([])

  useEffect(()=>{
    fetchData()
  }, [])

  const fetchData = () => {
    const data = [
      {id: 1, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 2, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 3, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 4, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 5, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 6, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 7, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 8, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 9, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 10, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 11, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 12, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 13, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 14, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 15, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 16, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 17, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 18, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 19, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 20, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 21, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 22, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 23, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 24, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
      {id: 25, first_name: 'test', last_name: 'asdasd', username: 'oknasirr'},
    ]

    setApplications(data)
  }

  return (
    <Container>
      <NavigationBar />

      <DataTable data={applications} />
      
      <Pagination />
    </Container>
  );
}

export default ViewForm;
