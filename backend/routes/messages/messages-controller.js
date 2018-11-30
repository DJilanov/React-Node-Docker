const modelName = 'Message';

const messageController = (repository) => {
  const createMessage = async (req, res) => {
    // TODO: Add validation of the data
    const messageData = req.body;
    return repository.create({ modelName, newObject: messageData })
      .then((response) => {
        if(response.ok !== 0) {
          res.status(200).send(response._doc);
        } else {
          res.status(500).send(response);
        }
      })
      .catch(error => console.log(error));
  };

  const editMessage = async (req, res) => {
    // TODO: Add validation of the data
    const messageData = req.body;
    console.log('messageData: ', messageData)
    return repository.update({ modelName, updatedRecord: messageData })
      .then((response) => {
        if(response.ok !== 0) {
          res.status(200).send(response._doc);
        } else {
          res.status(500).send(response);
        }
      })
      .catch(error => console.log(error));
  };

  const deleteMessage = async (req, res) => {
    // TODO: Add validation of the data
    const messageData = req.body;
    return repository.update({ modelName, updatedRecord: messageData })
      .then((response) => {
        if(response.ok !== 0) {
          res.status(200).send(response._doc);
        } else {
          res.status(500).send(response);
        }
      })
      .catch(error => console.log(error));
  };

  const getMessages = async (req, res) => {
    return repository.find({ modelName })
      .then((response) => {
        if(response.ok !== 0) {
          res.status(200).send(response);
        } else {
          res.status(500).send(response);
        }
      })
      .catch(error => console.log(error));
  };

  return {
    createMessage,
    editMessage,
    deleteMessage,
    getMessages
  };
};

module.exports = messageController;
