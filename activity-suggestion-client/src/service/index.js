import axios from 'axios'
import config from '../config';

const getInitialActivity = async () => {
    return axios.get(`${config.SERVICE_URL}/activity`);
}

const addUser = async (user) => {
    return axios({
        method: 'post',
        url: `${config.SERVICE_URL}/user`,
        data: user,
     });
}

// ideally, this should be a post request utilizing id to do a lookup on the user
// hoever, for purpose of this exercise, kept it as a generic get call
// since we are assuming last user as the currentUser entity
const getUserCustomedActivities = () => {
    return axios.get(`${config.SERVICE_URL}/user/activity?id=foo`);
}

export {getInitialActivity, addUser, getUserCustomedActivities}
