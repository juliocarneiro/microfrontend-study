import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@jccj/reactapp",
  app: () => System.import("@jccj/reactapp"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "@jccj/vueapp",
  app: () => System.import("@jccj/vueapp"),
  activeWhen: ["/vue"],
});

registerApplication({
  name: "@jccj/navbar",
  app: () => System.import("@jccj/navbar"),
  activeWhen: () => true,
});

start({
  urlRerouteOnly: true,
});
