import React from 'react';
import $ from 'jquery';
class LifeCycle extends React.Component{
    constructor(params) {
        super(params);
        this.state = {
            title:"Tuyen Nguyen Tu",
            childrentCoure:"SignalR"
        }
        this.ViewTitle = this.ViewTitle.bind(this)
        console.log("Contructor")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")
    }
    componentWillMount(){
        console.log("Will mount")
    }
    componentDidMount(){
        $(document).ready(function () {
           $('#btnTitle').click(function () {
                $('#pannel').css('color','red')
            })
        });
        console.log("Did Mount")
    }
    ViewTitle(){
        this.setState({
            title:"Hello Gosu"
        })
    }
    render() {
        console.log('render')
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title title" id="pannel">{this.state.title}</h3>
                </div>
                <button className="btn btn-success" id="btnTitle" onClick={this.ViewTitle}>Change</button>
                <div className="panel-body">
                    <ul className="list-group">
                        <li className="list-group-item li-hover">{this.state.childrentCoure}</li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
export default LifeCycle