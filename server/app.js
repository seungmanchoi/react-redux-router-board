import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql';
import dotenv from 'dotenv';

const app = express();
const server = http.Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

const {
  SERVER_HOST, SERVER_PORT,
  DB_HOST, DB_NAME, DB_USER, DB_PASSWORD
} = dotenv.config().parsed;

const getMySQLConnection = () => {
  const connection = mysql.createConnection({
    host     : DB_HOST,
    user     : DB_USER,
    password : DB_PASSWORD,
    database : DB_NAME
  });

  return connection;
}

app.post('/api/board', (req, res) => {
  const { title, content, user_name } = req.body;
  const sql = "insert into board(title, content, user_name) value(?, ?, ?)";
  const params = [title, content, user_name];

  if(!title) {
    return res.status(400).json({msg: '제목에 입력된 값이 없습니다.', success: false});
  }

  if(!content) {
    return res.status(400).json({msg: '내용에 입력된 값이 없습니다.', success: false});
  }

  const connection = getMySQLConnection();
  const formattedSql = mysql.format(sql, params);

  connection.connect((err) => {
    if (err) {
      return res.status(500).json({ msg: 'Internal Server Error.', success: false });
    }

    connection.query(formattedSql, (error, results, fields) => {
      if (error) {
        return res.status(500).json({ msg: 'Internal Server Error.', success: false });
      }

      res.status(200).json({ success: true });
      connection.end();
    });
  });
});

app.get('/api/board', (req, res) => {
  const page_num = req.query.page_num || 1;
  const page_size = req.query.page_size || 10;
  const offset = (page_num - 1) * page_size;
  let sql = `
    SELECT id, title, content, user_name, view_count, FROM_UNIXTIME(UNIX_TIMESTAMP(created_at), "%Y-%m-%d %H:%i:%s") as created_at  
    FROM board
  `;

  let sql_total = `
    SELECT count(*) as view_count 
    FROM board
    Limit 1
  `;

  if(page_num) {
    sql += ` LIMIT ${offset}, ${page_size}`;
  }

  const connection = getMySQLConnection();
  const formattedSql = mysql.format(sql);

  connection.connect((err) => {
    if (err) {
      return res.status(500).json({ msg: 'Internal Server Error.', success: false });
    }

    connection.query(sql_total, (error, total_result, fields) => {
      connection.query(formattedSql, (error, results, fields) => {
        if (error) {
          return res.status(500).json({ msg: 'Internal Server Error.', success: false });
        }

        res.status(200).json({ success: true, response: {
          list: results,
          page_size,
          page_num,
          totalCount: total_result[0].view_count
        }});
        connection.end();
      });
    })
  });
});

app.get('/api/board/:id', (req, res) => {
  const id = req.params.id;
  const params = [id];
  const sql = `select id, title, content, user_name, view_count, FROM_UNIXTIME(UNIX_TIMESTAMP(created_at), "%Y-%m-%d %H:%i:%s") as created_at from board where id=?`;
  const connection = getMySQLConnection();
  const formattedSql = mysql.format(sql, params);

  connection.connect((err) => {
    if (err) {
      return res.status(500).json({ msg: 'Internal Server Error.', success: false });
    }

    connection.query(formattedSql, (error, results, fields) => {
      if (error) {
        return res.status(500).json({ msg: 'Internal Server Error.', success: false });
      }

      res.status(200).json({ success: true, response: results[0] });
      connection.end();
    });
  });
});

app.delete('/api/board/:id', (req, res) => {
  const id = req.params.id;
  const sql = "delete from board where id=?";
  const params = [id];

  if(!id) {
    return res.status(400).json({ msg: '아이디 값이 없습니다.', success: false });
  }

  const connection = getMySQLConnection();
  const formattedSql = mysql.format(sql, params);

  connection.connect((err) => {
    if (err) {
      return res.status(500).json({ msg: 'Internal Server Error.', success: false, error: err });
    }

    connection.query(formattedSql, (error, results, fields) => {
      if (error) {
        return res.status(500).json({ msg: 'Internal Server Error.', success: false, error: error });
      }

      const count = results.affectedRows;
      let response = { success: count > 0 ? true : false, id };

      if(count === 0) {
        response.msg = '이미 삭제되었거나 게시글이 없습니다.';
      }

      res.status(200).json(response);
      connection.end();
    });
  });
});

app.put('/api/board/:id', (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  let subQuery = '';
  let params = [];

  console.log(title, content);

  if(title) {
    subQuery += 'title=?';
    params.push(title);
  }

  if(content) {
    subQuery += ',content=?';
    params.push(content);
  }

  const sql = `update board set ${subQuery} where id=?`;
  params.push(id);  // [title, content, id]

  console.log(sql);

  const connection = getMySQLConnection();
  const formattedSql = mysql.format(sql, params);

  console.log(formattedSql);

  connection.connect((err) => {
    if (err) {
      return res.status(500).json({ msg: 'Internal Server Error.', success: false, error: err });
    }

    connection.query(formattedSql, (error, results, fields) => {
      if (error) {
        return res.status(500).json({ msg: 'Internal Server Error.', success: false, error: error });
      }

      const count = results.affectedRows;
      let response = { success: count > 0 ? true : false, id };

      console.log(results.affectedRows);
      if(count === 0) {
        response.msg = '게시글이 존재하지 않습니다.';
      }

      res.status(200).json(response);
      connection.end();
    });
  });
});

app.put('/api/board/:id/count', (req, res) => {
  const id = req.params.id;
  const params = [id];

  const sql = `update board set view_count=(view_count + 1) where id=?`;
  const connection = getMySQLConnection();
  const formattedSql = mysql.format(sql, params);

  connection.connect((err) => {
    if (err) {
      return res.status(500).json({ msg: 'Internal Server Error.', success: false, error: err });
    }

    connection.query(formattedSql, (error, results, fields) => {
      if (error) {
        return res.status(500).json({ msg: 'Internal Server Error.', success: false, error: error });
      }

      const count = results.affectedRows;
      let response = { success: count > 0 ? true : false, id };

      console.log(results.affectedRows);
      if(count === 0) {
        response.msg = '게시글이 존재하지 않습니다.';
      }

      res.status(200).json(response);
      connection.end();
    });
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`listen ${SERVER_PORT}`);
});
