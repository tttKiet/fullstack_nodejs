class SiteController {
  // [get] home,  /
  index(req, res) {
    res.render("homepage");
  }
}

export default new SiteController();
