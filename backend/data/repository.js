// Add all of the used models to the db
const db = {
  'Message': require('./db/models/message')
};

const init = () => {
  const create = request =>
    db[request.modelName].create(request.newObject);

  const find = request =>
    db[request.modelName].find(request.options);

  const update = request =>
    db[request.modelName].save(request.updatedRecord);

  const remove = request =>
    db[request.modelName].remove({ _id: request._id })

  return {
    create,
    find,
    update,
    remove
  };
};

module.exports = { init };
