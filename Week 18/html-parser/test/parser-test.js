var assert = require('assert');

import {parseHTML} from '../src/parser.js';

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
        console.log(tree);
        // assert.equal(1,1);
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    });

    it('<a href="//time.geekbang.org"></a>', function() {
        let tree = parseHTML('<a href="//time.geekbang.org"></a>');
        console.log(tree);
        // assert.equal(1,1);
        assert.equal(tree.children[0].tagName, "a");
        assert.equal(tree.children[0].children.length, 0);
    })
})