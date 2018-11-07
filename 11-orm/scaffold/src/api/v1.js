'use strict';

import express from 'express';

import notes from '../models/notes.js';

const router = express.Router();

let sendJSON = (data,response) => {
  response.statusCode = 200;
  response.statusMessage = 'OK';
  response.setHeader('Content-Type', 'application/json');
  response.write( JSON.stringify(data) );
  response.end();
};

router.get('/api/v1/notes/schema', (request, response) => {
});

router.get('/api/v1/notes', (request,response,next) => {
});

router.get('/api/v1/notes/:id', (request,response,next) => {
});

router.post('/api/v1/notes', (request,response,next) => {
});

router.put('/api/v1/notes/:id', (request,response,next) => {
});

router.patch('/api/v1/notes/:id', (request,response,next) => {
});

router.delete('/api/v1/notes/:id', (request,response,next) => {
});

export default router;
