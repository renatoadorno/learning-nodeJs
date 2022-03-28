const imc = (weight, height) => {
  return (weight / Math.pow(height, 2)).toFixed(2)
}

module.exports = imc;