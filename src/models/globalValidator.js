import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (value) => {
    return value !== "";
  },
  message: ({path}) =>  `O campo (${path}) deve ser preenchido`,
});