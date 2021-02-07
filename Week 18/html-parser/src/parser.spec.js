var assert = require('assert');

// import {parseHTML} from './parser.js';
var parseHTML = require('./parser.js').parseHTML;

describe("parse html", function() {
    // it('<a>abc</a>', function() {
    //     let tree = parseHTML('<a>abc</a>');
    //     console.log(tree);
    //     // assert.equal(1,1);
    //     assert.equal(tree.children[0].tagName, "a");
    //     assert.equal(tree.children[0].children.length, 0);
    // })
    it('<a></a>', function() {
        let tree = parseHTML('<a></a>');
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });

    it('<a href="//time.geekbang.org"></a>', function() {
        let tree = parseHTML('<a href="//time.geekbang.org"></a>');
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });

    it('<a href ></a>', function() {
        let tree = parseHTML('<a href ></a>');
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });
    it('<a href />', function() {
        let tree = parseHTML('<a href />');
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });
    it('<a />', function() {
        let tree = parseHTML('<a />');
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });
    // Line: 179-180
    it('<a id="link"/>', function() {
        let tree = parseHTML('<a id="link"/>');
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });
    // it('<a id=\"link\" />', function() {
    //     let tree = parseHTML('<a id=\"link\" />');
    //     assert.equal(tree.children[0].tagName, "a");
    //     assert.equal(tree.children[0].children.length, 0);
    // });
    it('<a/>', function() {
        let tree = parseHTML('<a/>');
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });
    it('<A /> uppercase', function() {
        let tree = parseHTML('<A />');
        assert.equal(tree.children[0].tagName, "A");
        assert.equal(tree.children[0].children.length, 0);
    });
    it('<a href id></a>', function() {
        let tree = parseHTML('<a href id></a>');
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });
    it('<a href="abc" id></a>', function() {
        let tree = parseHTML('<a href="abc" id></a>');
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });
    it('<a id=abc ></a>', function() {
        let tree = parseHTML('<a id=abc ></a>');
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });
    // Fail: TypeError: state is not a function fix bug
    it('<a id=abc></a>', function() {
        let tree = parseHTML('<a id=abc></a>');
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });
    it('<a id=\'abc\' ></a>', function() {
        let tree = parseHTML('<a id=\'abc\' ></a>');
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });
    it('<>', function() {
        let tree = parseHTML('<>');
        assert.equal(tree.children.length, 1);
        assert.equal(tree.children[0].type, 'text');
    });
    it('<style>a{width: 100px;}</style><a href="abc" style="width:100px;"></a>', function() {
        let tree = parseHTML('<style>a{width: 100px;}</style><a href="abc" style="width:100px;"></a>');
        assert.equal(tree.children[0].tagName, "style");
        assert.equal(tree.children[0].children.length, 1);
    });
    it('<style>a{width: 100px;}#link{color: red;}</style><a id="link" href="abc" ></a>', function() {
        let tree = parseHTML('<style>a{width: 100px;}#link{color: red;}</style><a id="link" href="abc" ></a>');
        assert.equal(tree.children[0].tagName, "style");
        assert.equal(tree.children[0].children.length, 1);
    });
    it('<style>.link{color: red;}</style><a class="link" href="abc" ></a>', function() {
        let tree = parseHTML('<style>.link{color: red;}</style><a class="link" href="abc" ></a>');
        assert.equal(tree.children[0].tagName, "style");
        assert.equal(tree.children[0].children.length, 1);
    });
    // layout.js
    it('<style>#container {width: 500px;height:500px;display:flex;flex-direction:row;justify-content:center;align-items:center;}.link{color: red;}</style><div id="container"><a class="link" href="abc" ></a></div>', function() {
        let tree = parseHTML('<style>#container {width: 500px;height:500px;display:flex;flex-direction:row;justify-content:center;align-items:center;}.link{color: red;}</style><div id="container"><a class="link" href="abc" ></a></div>');
        assert.equal(tree.children[0].tagName, "style");
        assert.equal(tree.children[0].children.length, 1);
    });
    it('<style>#container {width: 500px;height:500px;display:flex;flexDirection:column;justifyContent:center;alignItems:center;alignContent:flex-start;}.link{color: red;}</style><div id="container"><a class="link" href="abc" ></a></div>', function() {
        let tree = parseHTML('<style>#container {width: 500px;height:500px;display:flex;flexDirection:column;justifyContent:center;alignItems:center;alignContent:flex-start;}.link{color: red;}</style><div id="container"><a class="link" href="abc" ></a></div>');
        assert.equal(tree.children[0].tagName, "style");
        assert.equal(tree.children[0].children.length, 1);
    });
    // flexWrap
    it('<style>#container {flexWrap:wrap;width: 500px;height:500px;display:flex;flexDirection:column;justifyContent:center;alignItems:center;alignContent:flex-start;}.link{color: red;}</style><div id="container"><a class="link" href="abc" ></a></div>', function() {
        let tree = parseHTML('<style>#container {flexWrap:wrap;width: 500px;height:500px;display:flex;flexDirection:column;justifyContent:center;alignItems:center;alignContent:flex-start;}.link{color: red;}</style><div id="container"><a class="link" href="abc" ></a></div>');
        assert.equal(tree.children[0].tagName, "style");
        assert.equal(tree.children[0].children.length, 1);
    });
    // alignContent
    it('<style>#container {alignContent:flex-end;flexWrap:wrap;width: 500px;height:500px;display:flex;flexDirection:column;justifyContent:center;alignItems:center;}.link{color: red;}</style><div id="container"><a class="link" href="abc" ></a></div>', function() {
        let tree = parseHTML('<style>#container {alignContent:flex-end;flexWrap:wrap;width: 500px;height:500px;display:flex;flexDirection:column;justifyContent:center;alignItems:center;}.link{color: red;}</style><div id="container"><a class="link" href="abc" ></a></div>');
        assert.equal(tree.children[0].tagName, "style");
        assert.equal(tree.children[0].children.length, 1);
    });
    // TypeError: state is not a function
    // it('<a id=abc</a>', function() {
    //     let tree = parseHTML('<a id=abc</a>');
    //     assert.equal(tree.children[0].tagName, "a");
    //     assert.equal(tree.children[0].children.length, 0);
    // });
})