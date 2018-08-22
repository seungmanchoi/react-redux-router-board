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

export const getBoardList = async ({ pageNum, pageSize }) => {
  var param = '?';

  if (pageNum) {
    param += `page_num=${pageNum}&`;
  }

  if (pageSize) {
    param += `page_size=${pageSize}&`;
  }

  return await axios.get(
    `http://${SERVER_HOST}:${SERVER_PORT}/api/board${param}`,
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

export const createBoard = async ({ title, content, user_name }) => {
  return await axios.post(`http://${SERVER_HOST}:${SERVER_PORT}/api/board`,{ title, content, user_name }, {
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const requestDeleteBoard = async (id) => {
  return await axios.delete(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${id}`, {
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
  })
}