'use server';

import { revalidatePath } from 'next/cache';
import User from '../database/models/user.model';
import { connectToDatabase } from '../database/mongoose';

interface CreateUserParams {
  clerkId: string;
  email: string;
  username: string;
  photo: string;
  firstName?: string;
  lastName?: string;
}

type UpdateUserParams = Pick<
  CreateUserParams,
  'photo' | 'username' | 'firstName' | 'lastName'
>;

export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    console.log(err);
  }
}

export async function getUser(userId: string) {
  try {
    await connectToDatabase();
    const user = await User.findOne({ clerkId: userId });
    if (!user) throw new Error('User not found');
    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    console.log(err);
  }
}

export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });
    if (!updatedUser) throw new Error('User not updated');
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (err) {
    console.log(err);
  }
}

export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();
    const userToDelete = await User.findOne({ clerkId });
    if (!userToDelete) throw new Error('User not found');

    const deleteUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath('/');

    return deleteUser ? JSON.parse(JSON.stringify(deleteUser)) : null;
  } catch (err) {
    console.log(err);
  }
}
