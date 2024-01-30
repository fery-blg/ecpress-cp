module.exports = function test(req, res, next) {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const hours = currentDate.getHours()
  
    if (day < 1 || day > 5 || hours < 9 || hours > 16)
      res.render("Error");
  
    next();
  };
  