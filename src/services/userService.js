import db from "../models";
import bcrypt from "bcryptjs";

const handleLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          where: {
            email,
          },
          attributes: ["email", "roleId", "password"],
          raw: true,
        });

        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = `Ok~!`;
            delete user.password;
            userData.user = user;
            resolve(userData);
          } else {
            userData.errCode = 3;
            userData.errMessage = `Wrong password~!`;
            resolve(userData);
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User's not found~!`;
          resolve(userData);
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your's email isn't exits in system. Please enter!`;
        resolve(userData);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export default {
  handleLogin,
};
