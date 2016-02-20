'use strict';

var assert = require('assert');
var nameUsed = require('./');

describe('test', function(){
  
  it('test seccessful', function(done) {
    nameUsed('npm')
      .then(function (res) {
        assert.equal(res, true);
        done();
      })
      .catch(function (err) {
        assert(false);
        done();
      })
  });

  it('test non-exist package', function(done) {
    nameUsed('dasjdjshdjas')
      .then(function (res) {
        assert(false);
        done();
      })
      .catch(function (err) {
        assert.equal(err, false);
        done();
      })
  });

});