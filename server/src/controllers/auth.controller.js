import { authService } from '../services/auth.services.js';
import { userService } from '../services/user.services.js';

const signin = (req, res, next) => {
  const { email, password } = req.body;
  authService.signin(email, password)
    .then(({ user, token }) => {
      res.cookie('access_token', token, { httpOnly: true })
      res.status(200).json({ success: true, user, token })
    })
    .catch((err) => {
      console.log("Error en el controlador al iniciar sesión", err);
      next(err);
    })
};

const signup = (req, res, next) => {
  const user = req.body;
  authService.signup(user)
    .then((response) => {
      res.status(201).json({ success: true, message: "Usuario creado exitosamente", user: response });
    })
    .catch((err) => {
      next(err)
    })
};

const createAdminUser = async (req, res, next) => {
  try {
    const existingAdmin = await userService.getAdminUser();

    if (!existingAdmin) {
      const adminData = {
        firstName: process.env.ADMIN_FIRSTNAME,
        lastName: process.env.ADMIN_LASTNAME,
        email: process.env.ADMIN_EMAIL,
        dni: process.env.ADMIN_DNI,
        phone: process.env.ADMIN_PHONENUMBER,
        gender: process.env.ADMIN_GENDER,
        birthDate: process.env.ADMIN_BIRTHDATE,
        healthInsurance: process.env.ADMIN_HEALTHINSURANCE,
        password: process.env.ADMIN_PASSWORD,
      }
      const createdAdmin = await authService.createAdminUser(adminData);
      console.log("Administrador creado exitosamente", createdAdmin)
    } else {
      console.log("Ya existe un administrador", existingAdmin);
    }
  } catch (error) {
    console.error("Error al crear administrador", error);
  }
};

export {
  signin,
  signup,
  createAdminUser
};
