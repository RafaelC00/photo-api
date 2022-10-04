import { connect } from "mongoose";

export async function startConnection() {
  await connect("mongodb+srv://rcdev00:DQBhEiGDVu1TZvwx@cluster0.ybmjtcf.mongodb.net/photo-gallety-db");
  console.log("Database is connected");
}