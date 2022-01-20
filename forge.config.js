module.exports = {
  packagerConfig: {
    dir: "dist",
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "v2ray",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
