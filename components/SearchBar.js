var React = require('react');

var NewPropertyWrapper=require("./NewPropertyWrapper")

var SearchBar = React.createClass({

    getInitialState(){
        return {propertyName:""}
    },

    loadPropertyValue(event){
        event.preventDefault();
        var searchValue=event.target.value;
        this.setState({propertyName:searchValue});
        this.props.onSearch(searchValue);

    },
    handleOnBlur(event){
        event.preventDefault();
        this.setState({propertyName:""});
    },
    addProperty(property){
        this.props.onAddProperty(property);
    },

    render: function () {
        return (
            <div className="header-section">
            <form>
                <div className="search-div">
                <input type="Search" placeholder="Search Property..." className="form-control"
                       value={this.state.propertyName} onChange={this.loadPropertyValue} onBlur={this.handleOnBlur} />
                </div>
                    <div className="add-new-div">
                    <NewPropertyWrapper onAddProperty={this.addProperty}></NewPropertyWrapper>
                </div>

            </form>
            </div>
        );
    }
});

module.exports = SearchBar