import db from "../models/index";

class SiteController {
  // [get] home,  /
  async index(req, res) {
    try {
      let data = await db.User.findAll();

      res.render("homepage", { data: JSON.stringify(data) });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SiteController();
