import db from "../models";
import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPasswordFormBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFormBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phonenumber: data.phonenumber,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });
      resolve("Created User Success!!!");
    } catch (error) {
      reject(error);
    }
  });
};

const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      db.User.findAll({ raw: true }).then((data) => {
        resolve(data);
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

const getUserById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.User.findOne({ where: { id: id }, raw: true }).then((data) => {
        if (data) {
          resolve(data);
        } else {
          resolve({});
        }
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

const updateUser = (id, data) => {
  console.log("data");
  console.log(data);
  return new Promise(async (resolve, reject) => {
    try {
      db.User.update(data, { where: { id } }).then(() => {
        console.log("----Update successful----(CRUDService.js)");
        resolve();
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

const deleteUserById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      db.User.destroy({ where: { id } }).then(() => {
        console.log("----Delete User successful----(CRUDService.js)");
        resolve();
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export default {
  createNewUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUserById,
};
