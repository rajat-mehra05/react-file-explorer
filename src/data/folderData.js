export const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        {
          name: "public_nested_1",
          isFolder: true,
          items: [
            {
              name: "public_nested_2",
              isFolder: false
            },

            {
              name: "public_nested_3",
              isFolder: false
            }
          ]
        }
      ]
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          name: "App.js",
          isFolder: false
        },
        {
          name: "index.js",
          isFolder: false
        }
      ]
    }
  ]
};
