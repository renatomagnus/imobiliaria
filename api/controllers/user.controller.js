import Prisma from "../lib/prisma.js";

export const getUsers = async (req, res) => {
  console.log("test");
  try {
    const users = await Prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get users!" });
  }
};
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const users = await Prisma.user.findUnique({
      where: { id },
    });
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get users!" });
  }
};
export const updateUser = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get users!" });
  }
};
export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get users!" });
  }
};
