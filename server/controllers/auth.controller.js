import express from "express";
import prisma from "../utils/prisma.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const userSignUpHandler = async (req, res) => {
  try {
    const { firstName, lastName, email, password, agreedToTerms } = req.body; // descrutcturing user data

    // Check if all fields are provided
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (!agreedToTerms) {
      return res.status(400).json({
        message: "You must agree to the terms and conditions",
      });
    }

    // validate password length
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // If user already exists, return error
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists with this email",
      });
    }

    // if user does not exist
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
        agreedToTerms: agreedToTerms,
        termsAcceptedAt: new Date(), // Set the current date and time for terms acceptance
      },
    });

    // If user creation fails, return error
    if (!newUser) {
      return res.status(500).json({
        message: "Error creating user",
      });
    }

    // If user creation is successful, generate a token for the user
    // const token = generateToken({ userId: newUser.id, email: newUser.email });

    // If user creation is successful, return success message and user data
    res.status(201).json({
      message: "User created successfully",
      newUser: {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const userLoginHandler = async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body; // destructuring user data

    // Check if all fields are provided
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // If user does not exist, return error
    if (!user) {
      return res.status(400).json({
        message: "User does not exist with this email",
      });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // If password is correct, generate a token for the user
    const token = generateToken({ userId: user.id, email: user.email });

    // If user login is successful, return success message and user data
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", // safer
      maxAge: rememberMe ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const userLogoutHandler = async (req, res) => {
  try {
    // Clear the cookie by setting its expiration date to a past date
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    // Respond with a success message
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

export const getUserHandler = async (req, res) => {
  try {
    const user = prisma.user.findUnique({
      where: { id: req.user.id },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", err);
    res.status(500).json({ message: "Server error" });
  }
};
