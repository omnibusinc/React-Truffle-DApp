import axios from 'axios';
import exampleActions from '../actions/exampleActions';

const apiRoutes = {
  example: 'http://localhost:3000/api/example',
  mongooseExample: 'http://localhost:3000/api/mongoose'
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

export function getMongooseExample() {
  return function(dispatch) {
    return axios
      .get(apiRoutes.mongooseExample)
      .then(function(response) {
        dispatch(receiveExample(response.data));
      })
      .catch(function(error) {
        console.log('ERROR', error);
      })
  }
}

