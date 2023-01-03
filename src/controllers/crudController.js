import CURDService from "../services/CURDService";

class CrudController {
  // [get] /crud
  index(req, res, next) {
    res.render("crud");
  }

  //   [post] /crud/create-user
  async postCRUD(req, res, next) {
    let massage = await CURDService.createNewUser(req.body);
    res.send(massage);
  }

  //   [post] /crud/get
  async displayCRUD(req, res, next) {
    let data = await CURDService.getAllUsers();
    console.log(data);

    return res.render("displayCRUD", { data });
  }
}

export default new CrudController();
