import React, { Component, Fragment } from 'react';

export default class ListTable extends Component {
  render () {
    return (
      <Fragment>
        <table className="table">
          <thead className="thead-dark">
          <tr>
            <th scope="col" className="text-center">#</th>
            <th scope="col" className="text-center">제목</th>
            <th scope="col" className="text-center">작성자</th>
            <th scope="col" className="text-center">작성일</th>
            <th scope="col" className="text-center">조회수</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row" className="text-center">1</th>
            <td><a href="#">게시글 샘플 데이터 입니다.</a></td>
            <td className="text-center">소보로</td>
            <td className="text-center">2018-08-02 20:50</td>
            <td className="text-center">77</td>
          </tr>
          <tr>
            <th scope="row" className="text-center">2</th>
            <td><a href="#">게시글 샘플 데이터 입니다.</a></td>
            <td className="text-center">소보로</td>
            <td className="text-center">2018-08-02 20:50</td>
            <td className="text-center">77</td>
          </tr>
          <tr>
            <th scope="row" className="text-center">3</th>
            <td><a href="#">게시글 샘플 데이터 입니다.</a></td>
            <td className="text-center">소보로</td>
            <td className="text-center">2018-08-02 20:50</td>
            <td className="text-center">77</td>
          </tr>
          <tr>
            <th scope="row" className="text-center">4</th>
            <td><a href="#">게시글 샘플 데이터 입니다.</a></td>
            <td className="text-center">소보로</td>
            <td className="text-center">2018-08-02 20:50</td>
            <td className="text-center">77</td>
          </tr>
          <tr>
            <th scope="row" className="text-center">5</th>
            <td><a href="#">게시글 샘플 데이터 입니다.</a></td>
            <td className="text-center">소보로</td>
            <td className="text-center">2018-08-02 20:50</td>
            <td className="text-center">77</td>
          </tr>
          </tbody>
        </table>
      </Fragment>
    )
  }
}