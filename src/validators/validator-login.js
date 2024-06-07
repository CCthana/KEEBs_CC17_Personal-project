import Joi from 'joi';

const loginSchema = Joi.object({
   email: Joi.string().email({tlds: false}).required().trim().messages({'string.empty': 'email require', 'string.email' : 'invalid email'}),
   password: Joi.string().required().messages({'string.empty': 'Password required'})
});

const validateLogin = input => {
   const { error } = loginSchema.validate(input, {abortEarly: false})

   if (error) {
      const result = error.details.reduce((acc,el) => {
         acc[el.path[0]] = el.message;
         return acc;
      }, {});

      return result;
      
   }
}

export default validateLogin;
