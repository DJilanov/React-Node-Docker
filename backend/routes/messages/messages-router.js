const { Router } = require('express');

const attachTo = (app, repository) => {
  const router = new Router();
  const messagesController = require('./messages-controller')(repository);

  router
    .get('/messages', messagesController.getMessages)
    .patch('/message', messagesController.editMessage)
    .post('/message', messagesController.createMessage)
    .delete('/message', messagesController.deleteMessage)

  app.use('/api', router);
};

module.exports = { attachTo };
