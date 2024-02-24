import { connect } from "mongoose";
// import "dotenv/config";

const connectToMongo = async () => {
  try {
    await connect(
      "mongodb+srv://arth:arth@login-jwt.tzmdcb4.mongodb.net/?retryWrites=true&w=majority&appName=login-jwt"
    );
    console.log("*** Database coonected Successfully ***");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
