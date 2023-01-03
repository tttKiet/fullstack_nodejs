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

  //   [get] /crud/get
  async displayCRUD(req, res, next) {
    let data = await CURDService.getAllUsers();

    return res.render("displayCRUD", { data });
  }

  //   [get] /crud/edit?id=
  async editCRUD(req, res, next) {
    const userId = req.query.id;
    if (userId) {
      let userData = await CURDService.getUserById(req.query.id);

      // Check user exists
      if (userData) {
        res.locals.id = userData.id;
        res.render("editCRUD", { data: userData });
      }
    } else {
      return res.send("User not found!!!");
    }
  }

  //   [put] /crud/put-user
  async putCRUD(req, res, next) {
    const data = req.body;
    console.log(data);

    await CURDService.updateUser(req.query.id, data);

    res.redirect("/crud/get");
  }
}

export default new CrudController();
