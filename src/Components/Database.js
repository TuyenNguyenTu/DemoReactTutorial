import React from 'react'

class Database extends React.Component{
    render() {
        return (

                <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title title">Databases</h3>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                <li className="list-group-item li-hover">Relational</li>
                                <li className="list-group-item li-hover">Cloud Databases</li>
                                <li className="list-group-item li-hover">Search Engines</li>
                                <li className="list-group-item li-hover">No SQL</li>
                            </ul>
                        </div>
                    </div>
                </div>

        )
    }
}
export default Database