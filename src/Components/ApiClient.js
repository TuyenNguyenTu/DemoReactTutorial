import React from 'react'

class ApiClient extends React.Component{
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title title">API Client</h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        <li className="list-group-item li-hover">REST</li>
                        <li className="list-group-item li-hover">GraphQL</li>
                        <li className="list-group-item li-hover">gRPC</li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
export default ApiClient