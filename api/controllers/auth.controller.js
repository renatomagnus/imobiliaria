import bcrypt from "bcrypt";
import Prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created succesfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const login = (req, res) => {
  console.log("login");
};

export const logout = (req, res) => {
  console.log("1");
};
