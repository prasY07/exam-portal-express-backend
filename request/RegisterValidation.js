import { check } from 'express-validator';
import { returnValidationErrors } from './ReturnValidationErrors.js';

export const validateQuestionName = [
  check('name').notEmpty().withMessage('Name is required'),
  check('option_one').notEmpty().withMessage('please enter option one'),
  check('option_two').notEmpty().withMessage('please enter option two'),
  check('option_three').notEmpty().withMessage('please enter option three'),
  check('option_four').notEmpty().withMessage('please enter option four'),
  check('correct_option').notEmpty().withMessage('please enter correct option').isIn(['option_one', 'option_two','option_three','option_four']).withMessage('Invalid role'),
  returnValidationErrors
];


