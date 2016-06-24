
var React = require('react/addons'),
    assert = require('assert'),
    SearchBar = require('../../components/SearchBar'),
    TestUtils = React.addons.TestUtils;


describe('SearchBar component', function () {


    before('render and locate element', function () {
        var renderedComponent = TestUtils.renderIntoDocument(
            <SearchBar onSearch={this.searchLocaleProperyValues} onAddProperty={this.addProperty}/>
        );

        var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
            renderedComponent,
            'input'
        );

        this.inputElement = inputComponent.getDOMNode();
    });

    it('<input> should be of type "Search"', function () {
        assert(this.inputElement.getAttribute('type') === 'Search');
    });

});