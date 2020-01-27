import React from 'react'

class Entity extends React.Component {
    render() {
        return (

            <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title title">Entity Framework</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item li-hover">Learn the basics of EntityFramework</li>
                            <li className="list-group-item li-hover">Code First + Migrations</li>
                            <li className="list-group-item li-hover">Change Tracker API</li>
                            <li className="list-group-item li-hover">lazy Loading, Eager Loading, Explicit Loading</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
export default Entity