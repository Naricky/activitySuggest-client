import PropTypes from 'prop-types'
import Box from '@mui/material/Box';

const Activity =  ({activity}) => { 
    //based on an assumption that activity is all or nothing package from bored api
    return (
        <Box style={{flexDirection:'column'}}>
            <Box>{activity?.activity ? `Activity Name: ${activity.activity}` : "Nothing to suggest!"} </Box>
            {activity?.activity && <Box>Activity Type : {activity.type} </Box>}
            {activity?.activity &&<Box>Activity Price: {activity.price} </Box>}
            {activity?.activity && <Box>Activity Accessbility: {activity.accessibility} </Box>}
        </Box>
    )
}

Activity.propTypes = {
    activity: PropTypes.object,
}

export default Activity
