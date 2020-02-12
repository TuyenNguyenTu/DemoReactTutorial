import React from 'react'

class Nodejs extends React.Component {
    constructor(props) {
        super(props)
        this.VierwCourse = this.VierwCourse.bind(this)
        this.state = {
            isShowOutLine: false,
            totalStudent: 69
        }
    }
    VierwCourse() {
        this.setState({
        isShowOutLine: !this.state.isShowOutLine
        })
    }
    render() {
        let elementOutLine = null
        if (this.state.isShowOutLine === true) {
            elementOutLine = <ul className="list-group">
                <li className="list-group-item li-hover">{this.props.liChildren1}</li>
                <li className="list-group-item li-hover">{this.props.liChildren2} </li>
                <li className="list-group-item li-hover">{this.props.liChildren3} </li>
                <li className="list-group-item li-hover">{this.props.liChildren4} </li>
            </ul>;
        }
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title title">{this.props.Tuyen}</h3>
                    </div>

                    <div className="panel-body">
                        <p className="text-info">Thời gian: {this.props.time}</p>
                        <button className="btn btn-success" onClick={this.VierwCourse}>View Course</button>
                        <p>{this.props.children}</p>
                        {elementOutLine}
                    </div>
                </div>
            </div>
        )
    }
}
export default Nodejs