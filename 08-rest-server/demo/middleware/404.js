'use strict';

export default (req,res) => {
  console.log('Do not have this');
  res.status(404);
  res.send('No idea what you want');
  res.end();
};
