import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

let href: string;

export default defineConfig({
  projectId: "v8h2nh",
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:3000",
    taskTimeout: 10000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        setHref: (val) => {
          return (href = val);
        },
        getHref: () => {
          return href;
        },
      });
    },
  },
});
