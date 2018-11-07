'use strict';

export default (err, req, res, next) => {
  console.log(`ERROR: ${err}`);
  res.status(500);
  res.send('WTF?');
  res.end();
};
