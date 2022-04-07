const PaymentService = require('../service/paymentService');

const create = async (req, res, next) => {
  try {
    const {
      user_id,
      credit_card,
      security_code,
      expiration_date
    } = req.body;

    const created = await PaymentService.create({
      user_id,
      credit_card,
      security_code,
      expiration_date
    });
    
    return res.status(200)
  } catch (e) {
    next(e)
  }
};
