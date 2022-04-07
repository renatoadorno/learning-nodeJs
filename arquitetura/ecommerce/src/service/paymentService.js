const PaymentModel = require('../model/paymentModel');

const create = (paymentOption) => PaymentModel.create(paymentOption);

module.exports = {
  create,
}
