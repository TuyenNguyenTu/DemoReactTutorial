import React from 'react'

class MVC  extends React.Component{
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    render() {
        return (
            <li className="list-group-item li-hover">MVC</li>
        )
    }
}
export default MVC