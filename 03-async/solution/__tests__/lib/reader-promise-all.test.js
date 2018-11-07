'use strict';

jest.mock('fs');

const reader = require('../../lib/reader-promise-all.js');

describe('File Reader Module', () => {

  it('when given a bad file, returns an error', () => {
    let files = ['bad.txt'];
    return reader(files)
      .then(good => {
      })
      .catch(err => expect(err).toBeDefined());
  });

  it('read a single, good file', () => {
    let files = ['file1.txt'];
    return reader(files)
      .then( data => {
        expect(data instanceof Array ).toBeTruthy();
        expect(data.length ).toBe(1);
      })
      .catch(err => expect(err).toBeNull());
  });

  it('reads multiple files', () => {
    let files = ['file1.txt', 'file2.txt', 'file3.txt'];
    return reader(files)
      .then( data => {
        expect(data instanceof Array ).toBeTruthy();
        expect(data.length ).toBe(3);
      })
      .catch(err => expect(err).toBeNull());
  });

});
