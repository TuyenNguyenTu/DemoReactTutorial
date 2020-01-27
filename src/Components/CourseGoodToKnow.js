import React from 'react'

class CourseGoodToKnow extends React.Component {

    ShowButtonFree() {
        var isFree = this.props.free;
        if (isFree == 'true') {
            return <div >
                <button className="btn btn-success">View</button>
            </div>;
        } else {
            return <div>
                <button className="btn-danger btn">$15</button>
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
                            <li className="list-group-item li-hover">Cách giao tiếp</li>
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