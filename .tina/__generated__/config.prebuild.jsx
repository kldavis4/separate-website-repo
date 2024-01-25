// .tina/config.js
import { defineConfig } from "tinacms";
var config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  branch: "main",
  // Relative to the _root_ of your repo
  localContentPath: "../../demo-content-repo",
  build: {
    publicFolder: "public",
    // The public asset folder for your framework
    outputFolder: "admin"
    // within the public folder
  },
  schema: {
    collections: [
      {
        label: "Page Content",
        name: "pages",
        format: "mdx",
        path: "/",
        fields: [
          {
            name: "body",
            label: "Main Content",
            type: "rich-text",
            isBody: true
          }
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return `/`;
            }
            return void 0;
          }
        }
      }
    ]
  }
});
var config_default = config;
export {
  config,
  config_default as default
};
