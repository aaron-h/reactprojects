var React = require('react');

var LocalePropertyRow = React.createClass({
    render: function() {
        return (<tr><th colSpan="2">{this.props.category}</th></tr>);
    }
});

var LocalePropertyValueRow = React.createClass({
    render: function() {
        var name = this.props.delimeter.stocked ?
            this.props.delimeter.name :
        <span style={{color: 'red'}}>
        {this.props.delimeter.name}
        </span>;
        return (
            <tr>
            <td>{name}</td>
            <td>{this.props.delimeter.price}</td>
        </tr>
        );
    }
});

var LocalePropertyValueTable = React.createClass({
    render: function() {
        var rows = [];
        var lastCategory = null;
        this.props.delimeters.forEach(function(delimeter) {
            if (delimeter.category !== lastCategory) {
                rows.push(<LocalePropertyRow category={delimeter.category} key={delimeter.category} />);
            }
            rows.push(<LocalePropertyValueRow delimeter={delimeter} key={delimeter.name} />);
            lastCategory = delimeter.category;
        });
        return (
            <table>
            <thead>
            <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
            </table>
        );
    }
});

var SearchBar = React.createClass({
    render: function() {
        return (
            <form>
            <input type="text" placeholder="Search..." />
            <p>
            <input type="checkbox" />
            {' '}
        Only show delimeters in stock
        </p>
        </form>
        );
    }
});

var FilterableLocalePropertyValueTable = React.createClass({
    render: function() {
        return (
            <div>
            <SearchBar />
            <LocalePropertyValueTable delimeters={this.props.delimeters} />
        </div>
        );
    }
});




module.exports=FilterableLocalePropertyValueTable;
