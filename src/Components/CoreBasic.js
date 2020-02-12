import React from 'react'
import MVC from './Mvc.Component'
import Rest from './Rest.Component'
import Razor from './RazorPage.Component'
import Middle from './Middleware.Component'
import RazorComponent from './Razor.Component'
import Filter from './Filter.Component'
import AppSetting from './AppSetting.Component'

class CoreBasic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowOutLine: false,
      show: true
    }
    this.ShowCourse = this.ShowCourse.bind(this)
    this.deleteHeader = this.deleteHeader.bind(this)
  }
  ShowCourse() {
    this.setState({
      isShowOutLine: !this.state.isShowOutLine
    })
  }
  deleteHeader = () => {
    this.setState({
      show: false
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log('nextState', nextState)
    return true; //return false sẽ k thay đổi vì k chạy tiếp các luồng will hay did Update
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  render() {
    let elementCourse = null
    if (this.state.isShowOutLine) {
      elementCourse = <ul className="list-group">
        <MVC />
        <Rest />
        <Razor />
        <Middle />
        <RazorComponent />
        <Filter />
        <AppSetting />
      </ul>;
    } else {

    }
    let header;
    if (this.state.show) {
      header = <MVC />
    };

    console.log('render')
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title title">ASP .NET Core Basics</h3>
            <button className="btn btn-success" onClick={this.ShowCourse}>Toggle Course</button>
          </div>
          {header}
          <button onClick={this.deleteHeader}>Delete header</button>
          <div className="panel-body">
            {elementCourse}
          </div>
        </div>
      </div>

    )
  }
}
export default CoreBasic