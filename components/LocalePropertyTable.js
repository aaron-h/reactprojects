var React = require('react');

var LocalePropertyRow = require("./LocalePropertyRow")

var LocalePropertyTable = React.createClass({

    deleteProperty(event){
        if (event.target && event.target.matches("span.glyphicon-remove")) {
            this.props.onDelete(event.target.attributes["data-key"].value);
        }
    },

    addTableHeader(){
        if (this.props.delimeters.length > 1)
            return Object.keys(this.props.delimeters[0]).map(function (key) {
                {
                    return <th>{key} {key != "locale" ?
                        <span data-key={key} className="glyphicon glyphicon-remove"></span> : ""} </th>
                }
            });
    },

    render: function () {
        var rows = [];
        if (this.props.delimeters.length > 0) {
            this.props.delimeters.forEach(function (delimeter) {
                rows.push(<LocalePropertyRow delimeter={delimeter}/>);
            });
        }

        return (
            <table className="table">
                <thead className="thead-inverse">
                <tr onClick={this.deleteProperty}>
                    {this.addTableHeader()}
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

module.exports = LocalePropertyTable