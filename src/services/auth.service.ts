import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserModel } from '../persistence/user.model.js';
import { env } from '../config/env.config.js';
import { BadRequestError, AuthenticationError } from '../utils/errors.js';

export class AuthService {
  static async register(nombre: string, email: string, password: string) {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestError('El correo electrónico ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ nombre, email, password: hashedPassword });
    await newUser.save();

    return { id: newUser._id, nombre: newUser.nombre, email: newUser.email };
  }

  static async login(email: string, password: string) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new AuthenticationError('Credenciales inválidas');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new AuthenticationError('Credenciales inválidas');
    }

    const token = jwt.sign({ id: user._id, email: user.email }, env.JWT_SECRET, {
      expiresIn: '1d',
    });

    return { token, user: { id: user._id, nombre: user.nombre, email: user.email } };
  }
}