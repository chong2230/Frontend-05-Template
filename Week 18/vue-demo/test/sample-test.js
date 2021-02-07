// const { assert } = require('chai');
var add = require('./add.js').add;
var assert = require('assert');
// import {add} from './add.js';
var { expect } = require('chai');//.export;

describe('加法函数的测试', function() {
    it('1 + 1 = 2', function() {
        // expect(add(1, 1)).to.be.equal(2);
        assert.equal(add(1, 1), 2);
    })

    it('-1 + 1 = 0', function() {
        // expect(add(-1, 1)).to.be.equal(0);
        assert.equal(add(1, 1), 2);
    })
})