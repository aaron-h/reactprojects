var React = require('react');
var _=require("lodash");

var SearchBar = require("./SearchBar")
var LocalePropertyTable = require("./LocalePropertyTable")


var FilterableLocalePropertyTable = React.createClass({

    getInitialState(){
        return {data: {}}
    },

    searchLocaleProperyValues(propertyName){
        $.ajax({
            url: "http://localhost:8000/api/localeDelimeters/"+propertyName,
            dataType: 'json',
        }).then(function(responseData) {
            this.setState({data: responseData});
        }.bind(this));

    },

    removeProperty(propertyName){
        $.ajax({
            url: "http://localhost:8000/api/localeDelimeters/"+propertyName,
            type:"DELETE",
            dataType: 'json',
            headers: {
                'Access-Control-Allow-Origin' : "*",
            }
        }).then(function(responseData) {
            this.setState({data: responseData});
        }.bind(this),function(err){
            console.log(err);
        });

    },
    addProperty(newProperty){

        $.ajax({
            url: "http://localhost:8000/api/localeDelimeters",
            dataType: 'json',
            type: "POST",
            data:{prop:newProperty},
        }).then(function(responseData) {
            this.setState({data: responseData});
        }.bind(this),function(err){
            console.log(err);
        });
    },


    render: function () {
        return (
            <div>
                <SearchBar onSearch={this.searchLocaleProperyValues} onAddProperty={this.addProperty}/>
                <LocalePropertyTable delimeters={this.state.data} onDelete={this.removeProperty}/>
            </div>
        );
    }
});


module.exports = FilterableLocalePropertyTable;
