const axios = require('axios');
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
// for scope of the assignment, since I have demonstrated usage of config files
// in the backend portion, will use hard coded strings

const getInitialActivity = async () => {
    return axios.get('http://localhost:8000/activity');
}

const addUser = async (user) => {
    return axios({
        method: 'post',
        url: 'http://localhost:8000/user',
        data: user,
     });
}

// ideally, this should be a post request utilizing id to do a lookup on the user
// hoever, for purpose of this exercise, kept it as a generic get call
// since we are assuming last user as the currentUser entity
const getUserCustomedActivities = () => {
    return axios.get('http://localhost:8000/user/activity?id=foo');
}

export {getInitialActivity, addUser, getUserCustomedActivities}
