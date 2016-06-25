var Ahrefy = require('./ahrefy');
var beforeHtml = require('html!./test.before.html');
var afterHtml = require('html!./test.after.html');

describe('Ahrefy.traverse', () => {
  it('', () => {
    var div = document.createElement('div');
    div.innerHTML = beforeHtml;
    Ahrefy.traverse(div);
    expect(div.innerHTML).toEqual(afterHtml);
  })
})
