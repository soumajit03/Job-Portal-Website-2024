import mongoose, { mongo } from "mongoose";


export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "JOB_PORTAL_WEBSITE"
    }).then(()=>{
        console.log("Connected to database!");
    }).catch((err)=>{
        console.log(`Some error occured while connecting to database: ${err}`);
    });
};
