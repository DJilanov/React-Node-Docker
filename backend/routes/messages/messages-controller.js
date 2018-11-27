const modelName = 'Message';

const messageController = (repository) => {
  const createMessage = async (req, res) => {
    const { messageData } = req.params;
    return repository.create({ modelName, newObject: messageData })
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
