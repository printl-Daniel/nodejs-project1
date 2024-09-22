const main = {
  main: (req, res) => {
    res.render("index");
  },
  about: (req, res) => {
    res.render("about");
  },
  news: (req, res) => {
    res.render("news");
  },
  credentials: (req, res) => {
    res.render("credentials");
  },
  contact: (req, res) => {
    res.render("contact");
  },
};

module.exports = main;
