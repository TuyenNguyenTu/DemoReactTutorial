import React from 'react'

class Caching extends React.Component {
    render() {
        return (

            <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title title">Caching</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <li className="list-group-item li-hover">Entity Framework 2nd Level Caching</li>
                            <li className="list-group-item li-hover">Distributed Cache</li>
                            <li className="list-group-item li-hover">Memory Cache</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
export default Caching