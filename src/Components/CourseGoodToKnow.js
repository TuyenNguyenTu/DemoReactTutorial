import React from 'react'

class CourseGoodToKnow extends React.Component {
    constructor(params) {
        super(params)
        this.ViewDetail = this.ViewDetail.bind(this)
        this.RefClick = this.RefClick.bind(this);
    }
    SetClick() {
        alert("Set nè")
    }
    DangerClick() {
        alert("Danger nè")
    }
    ViewClick() {
        window.location.href = "http://www.w3schools.com";
    }
    MouseEnter(x) {
        console.log(x);
    }
    ViewDetail() {
        alert(this.props.Tuyen);
    }
    handleClick = () => {
        console.log(this)
    }
    View(e) {
        alert(e);
    }
    RefClick(){
        console.log(this.refs.userName.value) //gọi đến ref có tên là userName và lấy thuộc tính value
    }
    ShowButtonFree() {
        var isFree = this.props.free;
        if (isFree === 'true') {
            return <div >
                <div className="btn-group">
                    <button className="btn btn-success" onClick={this.ViewClick}>View</button>
                    <button className="btn btn-secondary" id="btnSet" onClick={this.SetClick}>Set</button>
                    <button className="btn btn-danger" onClick={this.DangerClick}>Danger</button>
                    {/* truyền vào tham số sử dụng arrow function */}
                    <button className="btn" onMouseEnter={() => this.MouseEnter()}>Mouse Enter</button>
                    <button className="btn btn-outline-dark" onClick={this.ViewDetail}>Detail</button>
                    <button className="btn" onClick={() => this.View("Tao")}>Hello</button>
                </div>
            </div>;
        } else {
            return <div>

                    <div className="input-group">
                                {/*Ref */}
                        <input type="text" className="form-control" placeholder="Register.."  ref="userName"/>
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button" onClick={this.RefClick}>Register</button>
                        </span>
                    </div>{/* /input-group */}

                <button className="btn-danger btn" onClick={this.handleClick}>$15</button>
            </div>
        }
    }

    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title title">{this.props.Tuyen}</h3>
                    </div>

                    <div className="panel-body">
                        <p className="text-info">Thời gian: {this.props.time}</p>
                        <p>{this.props.children}</p>
                        <ul className="list-group">
                            <li className="list-group-item li-hover">{this.props.liChildren}</li>
                            <li className="list-group-item li-hover">Khả năng phán đoán </li>
                        </ul>
                    </div>
                    {this.ShowButtonFree()}

                </div>
            </div>
        )
    }
}
export default CourseGoodToKnow