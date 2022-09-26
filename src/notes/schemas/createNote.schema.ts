import Joi from 'joi';

export const createNoteSchema = Joi.object()
  .keys({
    name: Joi.string().min(0).required(),
    date: Joi.string().min(0).required(),
    category: Joi.string()
      .min(0)
      .valid('Task', 'Idea', 'Quote', 'Random Thought')
      .required(),
    content: Joi.string().min(0).required(),
  })
  .options({ abortEarly: false });
