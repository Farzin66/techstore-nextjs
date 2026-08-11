const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://localhost:27017/tech-store";

async function deleteUser() {
  await mongoose.connect(MONGODB_URI);

  const result = await mongoose.connection.db
    .collection("users")
    .deleteOne({
      email: "farzinpn66@gmail.com",
    });

  console.log("Deleted users:", result.deletedCount);

  await mongoose.disconnect();
}

deleteUser().catch(console.error);