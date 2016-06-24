var React = require('react');

var LocalePropertyRow = React.createClass({

    render: function() {
        var delimeter=this.props.delimeter;

        return (
            <tr>
                {Object.keys(delimeter).map(function(key){{
                    return <td>{delimeter[key]}</td>
                }})}
            </tr>
        );
    }
});

module.exports=LocalePropertyRow