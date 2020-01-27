import React from 'react'

class GoodKnow extends React.Component{
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title title">Good to Know Libraries</h3>
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        <li className="list-group-item li-hover">MediaR</li>
                        <li className="list-group-item li-hover">FluentValidation</li>
                        <li className="list-group-item li-hover">Swashbuckle</li>
                        <li className="list-group-item li-hover">Benchmark.NET</li>
                        <li className="list-group-item li-hover">Polly</li>
                        <li className="list-group-item li-hover">NodaTime</li>
                        <li className="list-group-item li-hover">GenFu</li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}
export default GoodKnow