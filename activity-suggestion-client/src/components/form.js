import { useState } from 'react';
import PropTypes from 'prop-types'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {addUser, getUserCustomedActivities} from '../service'

// Note: In real implication settings, we should not use alert, but use snackbars
// to address is gracefully - also, we should probably have a customized rendering UI
// than empty space ( probably common component ) but for scope of this exercise
// component is rendering without crashing even with no data
// Note 2: Also, I would think having a radio/dropdown would be more suitable for the 
// accesibility and price setting, but for testing purposes, please use 'High or Low'
// as input value.
const Form = ({ currentUser, setCurrentUser, setActivity }) => {
  const [name, setName] = useState(currentUser?.name);
  const [acc, setAcc] = useState(currentUser?.accessibility);
  const [price, setPrice] = useState(currentUser?.price);

  const handleSubmit = async () => {
    // TODO: should have some type of FE validation here or on the TextField itself //
    setCurrentUser(await addUser({name: name, accessibility: acc, price: price}))
    alert('Thanks for signing up!')
  };

  const handleCustomActivitySubmit = async () => {
    const res = await getUserCustomedActivities()
    if(res.data.message){
      alert(`Try again! ${res.data.message}`)
    } else {
      alert(`Lucky Day! How about you try this activity today? ${res.data.activity}`)
      setActivity(res.data)
    } 
  }

  return (
    <Box>
      <Box>
        <Box>Current User Name : {name}</Box>
        <Box>Current User Accessbility Preference: {acc}</Box>
        <Box>Current User Price Preference : {price}</Box>
      </Box>
      <br/>
      <Box>
        <form>
          <TextField label="Name" variant="filled" required value={name} onChange={e => setName(e.target.value)}/>
          <TextField label="Accessibility preferences" variant="filled" required value={acc} onChange={e => setAcc(e.target.value)}/>
          <TextField label="Price preferences" variant="filled" type="email" required value={price} onChange={e => setPrice(e.target.value)} />
        </form>
        <div>
          <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}> Signup</Button>
        </div>
      </Box>
          {currentUser && <Button type="submit" variant="contained" color="secondary" onClick={handleCustomActivitySubmit}> Try this randomize activity!</Button>}
    </Box>
  )
}

Form.propTypes = {
  currentUser: PropTypes.object,
  setCurrentUser: PropTypes.func,
  setActivity: PropTypes.func,
}

export default Form

