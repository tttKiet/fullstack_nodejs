import CURDService from "../services/CURDService";

class CrudController {
  // [get] /crud
  index(req, res, next) {
    res.render("crud");
  }

  //   [post] /crud/create-user
  async postCRUD(req, res, next) {
    let massage = await CURDService.createNewUser(req.body);
    console.log(massage);
    res.send("Success!!!");
  }
}

export default new CrudController();
