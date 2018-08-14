// import dotenv from 'dotenv';
import axios from 'axios';

// const { SERVER_HOST, SERVER_PORT } = dotenv.config().parsed;
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = '8800';

export const getBoard = async (id) => {
  return await axios.get(
      `http://${SERVER_HOST}:${SERVER_PORT}/api/board/${id}`,
      {
        crossDomain: true,
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
};

export const getBoardList = async () => {
  return await axios.get(
    `http://${SERVER_HOST}:${SERVER_PORT}/api/board`,
    {
      crossDomain: true,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}

export const updateBoard = async ({ id, title, content }) => {
  return await axios.put(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${id}`,{ title, content }, {
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

