import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Form from './components/form'
import Activity from './components/activity'
import {getInitialActivity} from './service'

function App() {
  const [activity, setActivity] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    async function getActivity() {
        const res = await getInitialActivity()
        setActivity(res.data);
    }
    getActivity();
 }, [])
  return (
    <Box>
      <Activity activity={activity}/>
      <br/>
      <Form currentUser={currentUser} setCurrentUser={setCurrentUser} setActivity={setActivity}/>
    </Box>
  );
}

export default App;
