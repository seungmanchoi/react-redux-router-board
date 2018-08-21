import React, { Component, Fragment } from 'react';
import ListItem from './ListItem';

export default class ListTable extends Component {

  componentDidMount() {
    this.props.getListData({ pageNum: this.props.pageNum });
  }

  render () {

    // if(this.props.listData.loading) {
    //   return (
    //    <LoadingSpinner />
    //   )
    // }

    // if(this.props.listData.error) {
    //   return (
    //     <ErroComponent message={this.props.listData.error.message} />
    //   )
    // }

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
          {
            //list = [{ id:1, title:'', content: '' }, { id:1, title:'', content: '' }, { id:1, title:'', content: '' }]

            this.props.listData.list.map((row, key) => {
              return (
                <ListItem { ...row } key={ key } />
              )
            })
          }

          </tbody>
        </table>
      </Fragment>
    )
  }
}