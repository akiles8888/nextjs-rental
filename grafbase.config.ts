import { graph, config } from "@grafbase/sdk";

const g = graph.Standalone();

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
});

export default config({
  graph: g,
});
