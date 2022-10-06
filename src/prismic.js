import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "mon-blog-react";

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    "MC5ZejdScUJFQUFDTUFpTEFX.77-9D1lx77-9Ze-_ve-_ve-_ve-_ve-_vWbvv701Wwfvv73vv71uAkZmE2tz77-977-977-977-9H--_ve-_vQ",

  // This defines how you will structure URL paths in your project.
  // Update the types to match the Custom Types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: "article",
      path: "/",
    },
  ],
});
