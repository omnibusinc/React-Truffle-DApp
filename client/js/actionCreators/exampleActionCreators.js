import axios from 'axios';
import exampleActions from '../actions/exampleActions';

const apiRoutes = {
  example: 'http://localhost:3000/api/example'
};

function receiveExample(data) {
  return {
    type: exampleActions.GET_EXAMPLE,
    payload: {
      example: data.example
    }
  }
}

export function getExample() {
  return function(dispatch) {
    return axios
      .get(apiRoutes.example)
      .then(function(response) {
        dispatch(receiveExample(response.data));
      })
      .catch(function(error) {
        console.log('ERROR', error);
      })
  }
}
