import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Header, List } from 'semantic-ui-react';

function App() {

  const [activities, setActivities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log('response', response)
      setActivities(response.data)
    })
  }, [])

  return (
    <div>
      <Header icon='users' content='Reactivities'/>
        <List>
        {activities.map((act: any) =>
          <List.Item key={act.id}>{act.venue}
          </List.Item>
         )
         }
        </List>
    </div>
  );
}

export default App;
