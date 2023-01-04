import CURDService from "../services/CURDService";

class CrudController {
  // [get] /crud/create-user
  index(req, res, next) {
    res.render("createCRUD");
  }

  //   [post] /crud/create-user
  async postCRUD(req, res, next) {
    let massage = await CURDService.createNewUser(req.body);
    if (massage) {
      console.log(massage);
      res.redirect("/crud");
    } else {
      res.send("Fail !!!");
    }
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
    try {
      await CURDService.updateUser(req.query.id, data);
      res.redirect("/crud");
    } catch (e) {
      res.send(e);
    }
  }

  //   [delete] /crud/delete-user
  async deleteUser(req, res, next) {
    const id = req.query.id;
    try {
      await CURDService.deleteUserById(id);
      res.redirect("back");
    } catch (e) {
      res.send(e);
    }
  }
}

export default new CrudController();
