import React from 'react'
import MVC from './Mvc.Component'
import Rest from './Rest.Component'
import Razor from './RazorPage.Component'
import Middle from './Middleware.Component'
import RazorComponent from './Razor.Component'
import Filter from './Filter.Component'
import AppSetting from './AppSetting.Component'

class CoreBasic extends React.Component {
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-log-4 margin">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title title">ASP .NET Core Basics</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            <MVC />
                            <Rest />
                            <Razor />
                            <Middle/>
                            <RazorComponent/>
                            <Filter/>
                           <AppSetting/>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
export default CoreBasic