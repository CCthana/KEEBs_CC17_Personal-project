import Joi from 'joi';

const registerSchema = Joi.object(
   {
      email: Joi.string().email({tlds: false}).required().trim().messages({'string.empty': 'email require', 'string.email' : 'invalid email'}),
      userName: Joi.string().required().trim(),
      password: Joi.string().required().pattern(/^[a-zA-Z0-9]{6,}$/).messages({'string.empty': 'password require', 'string.pattern.base' : 'password must be at least 6 character long'}),
      confirmPassword : Joi.string().required().valid(Joi.ref('password')).strip().messages({'string.empty': 'confirm password require', 'any.only' : 'confirm password does not match'})
      
   }
);



const validateRegister = input => {
   const {value, error} = registerSchema.validate(input,{abortEarly: false});
   
   if (error) {
      const result = error.details.reduce((acc,el) => {
         acc[el.path[0]] = el.message;
         return acc;
      }, {});
      console.dir(error);
      return result;
      
      
   }
};


export default validateRegister;