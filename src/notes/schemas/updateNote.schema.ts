import Joi from 'joi';

export const updateNoteSchema = Joi.object()
  .keys({
    name: Joi.string().min(0),
    date: Joi.string().min(0),
    category: Joi.string()
      .min(0)
      .valid('Task', 'Idea', 'Quote', 'Random Thought'),
    content: Joi.string().min(0),
  })
  .options({ abortEarly: false });
