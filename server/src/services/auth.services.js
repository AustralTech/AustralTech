import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../db/models/user.js';
import customError from '../middlewares/customError.js';

const generateToken = async (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, isAdmin: user.isAdmin },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  )
};

const signin = async (email, password) => {
  try {
    const validUser = await User.findOne({ where: { email } });
    if (!validUser) {
      throw customError(404, "Usuario no encontrado");
    }
    if (!validUser.isActive) {
      throw customError(403, "Cuenta inactiva");
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      throw customError(404, "Credenciales incorrectas");
    }
    const token = await generateToken(validUser);
    return { user: validUser, token };
  } catch (error) {
    throw error;
  }
};

const signup = async (user) => {
  try {
    const {
      firstName,
      lastName,
      email,
      dni,
      phone,
      gender,
      birthDate,
      healthInsurance,
      password,
    } = user;

    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      if (existingEmail.isActive) {
        throw customError(400, `El email ${email} ya está en uso`);
      } else {
        throw customError(400, `El email ${email} ya está en uso pero la cuenta está inactiva`);
      }
    }

    const existingDNI = await User.findOne({ where: { dni } });
    if (existingDNI) {
      if (existingDNI.isActive) {
        throw customError(400, `Ya existe una cuenta registrada con DNI ${dni}`);
      } else {
        throw customError(400, `Ya existe una cuenta registrada con DNI ${dni} pero la cuenta está inactiva`);
      }
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      dni,
      phone,
      gender,
      birthDate,
      healthInsurance,
      password: hashedPassword
    });

    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

const createAdminUser = async (user) => {
  try {
    const {
      firstName,
      lastName,
      email,
      dni,
      phone,
      gender,
      birthDate,
      healthInsurance,
      password,
    } = user;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      dni,
      phone,
      gender,
      birthDate,
      healthInsurance,
      password: hashedPassword,
      isAdmin: true
    });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const authService = {
  signin,
  signup,
  createAdminUser
};