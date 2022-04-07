const connection = require('./connection');
const { v4: uuidv4 } = require('uuid');

// recebe o paymentOption = { id, user_id, credit_card, security_code, expiration_date }
const create = async (paymentOption) => {
  const query =`INSERT INTO
    Ecommerce.payment_option(id, user_id, credit_card, security_code, expiration_date)
  VALUES
    (?, ?, ?, ?, ?)`;

  const [ result ] = await connection.execute(query, 
    [
      uuidv4(), 
      paymentOption.user_id, 
      paymentOption.credit_card, 
      paymentOption.security_code, 
      paymentOption.expiration_date
    ]
  );

  return { id: result.insertId, ...paymentOption };
  // ou 
  // return {
  //   id: result.insertId,
  //   user_id, 
  //   credit_card, 
  //   security_code, 
  //   expiration_date
  // };
};

module.exports = {
  create,
}
