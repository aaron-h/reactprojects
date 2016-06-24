var React = require('react');

var NewPropertyWrapper = React.createClass({

    getInitialState(){
        return {addNew: false}
    },

    handleClick(){
        this.setState({addNew: this.state.addNew ? false : true});
    },

    submitProperty(property){
        this.props.onAddProperty(property);
        this.setState({addNew: this.state.addNew ? false : true});
    },

    render: function () {
        var display = this.state.addNew;
        return (display ? <PropertyInputField onSubmitProperty={this.submitProperty}/> :
            <AddButton onClickAddNewProperty={this.handleClick}/>);
    }
});

var AddButton = React.createClass({

    handleClick(){
        this.props.onClickAddNewProperty();
    },

    render: function () {
        return (
            <button onClick={this.handleClick} className="btn btn-primary">
                Add New Property
            </button>)
    }
});

var PropertyInputField = React.createClass({

    getInitialState(){
        return {value: ""}
    },

    setValue(event){
        event.preventDefault();
        this.setState({value: event.target.value});
    },

    submitValue(event){
        this.props.onSubmitProperty(this.refs.myPropertyInput.props.value);
        this.refs.myPropertyInput.props.value = "";

    },
    render: function () {
        return (
            <div>
                <input type="text" placeholder="Input property..." className="form-control add-new-input" value={this.state.value} onChange={this.setValue}
                       ref="myPropertyInput"/>
                <button type="button" onClick={this.submitValue} className="btn btn-primary add-button">Add</button>
            </div>
        );
    }
});

module.exports = NewPropertyWrapper