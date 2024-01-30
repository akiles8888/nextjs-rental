import { graph, config } from "@grafbase/sdk";

const g = graph.Standalone();

const UserType = g.type("User", {
  name: g.string().length({ min: 2, max: 20 }),
  age: g.int().optional(),
  profile: g.ref("Profile"),
  parent: g.ref("User"),
});

const ProfileType = g.type("Profile", {
  bio: g.string().optional(),
  user: g.ref("User"),
});

export default config({
  graph: g,
});
