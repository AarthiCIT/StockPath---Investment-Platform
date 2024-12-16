const Stock = require('../models/stockModel');

// Get all stocks
const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find({ user: req.user.id });
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add more stock-related controllers (create, update, delete)

module.exports = {
  getStocks,
  // export other controllers
};
