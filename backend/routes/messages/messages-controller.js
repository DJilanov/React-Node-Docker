const modelName = 'Message';

const messageController = (repository) => {
  const createMessage = async (req, res) => {
    // TODO: Add validation of the data
    const messageData = req.body;
    return repository.create({ modelName, newObject: messageData })
      .then((response) => {
        res.status(200).send(response._doc);
      })
      .catch(error => console.log(error));
  };

  const editMessage = async (req, res) => {
    const { messageData } = req.params;
    return repository.create({ modelName, newObject: messageData })
      .catch(error => console.log(error));
  };

  const deleteMessage = async (req, res) => {
    const { messageData } = req.params;
    return repository.create({ modelName, newObject: messageData })
      .catch(error => console.log(error));
  };

  const getMessages = async (req, res) => {
    console.log('get messages');
    return repository.find({ modelName })
      .then((response) => {
        res.status(200).send(response);
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
