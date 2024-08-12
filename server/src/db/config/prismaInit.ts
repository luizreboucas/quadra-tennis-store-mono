import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const User = db.user;
const Profile = db.profile;
const Product = db.product;
const Purchase = db.purchase;

export { db, User, Profile, Product, Purchase };
