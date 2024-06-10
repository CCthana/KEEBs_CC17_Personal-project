import Joi from 'joi';

const addressSchema = Joi.object(
   {
      firstName: Joi.string().required().messages({'string.empty': 'Firstname required'}),
      lastName: Joi.string().required().messages({'string.empty': 'Lastname required'}),
      phone: Joi.string().required().messages({'string.empty': 'phone number required'}),
      address : Joi.string().required().messages({'string.empty': 'address required'}),
      
   }
);



const validateAddress = input => {
   const {value, error} = addressSchema.validate(input,{abortEarly: false});
   
   if (error) {
      const result = error.details.reduce((acc,el) => {
         acc[el.path[0]] = el.message;
         return acc;
      }, {});
      console.dir(error);
      return result;
      
      
   }
};


export default validateAddress;