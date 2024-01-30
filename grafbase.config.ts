import { schema } from "grafbase";

const userSchema = schema({
  models: {
    User: {
      fields: {
        name: {
          type: "String",
          validation: {
            length: {
              min: 2,
              max: 20,
            },
          },
        },
      },
    },
  },
});

export default userSchema;
