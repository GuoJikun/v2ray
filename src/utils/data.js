export const menuList = (app, isMac) => {
  return [
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              { role: "about" },
              { type: "separator" },
              { role: "services" },
              { type: "separator" },
              { role: "hide" },
              { role: "hideOthers" },
              { role: "unhide" },
              { type: "separator" },
              { role: "quit" },
            ],
          },
        ]
      : []),
    {
      label: "服务器",
      submenu: [
        {
          label: "添加 VMess 服务器",
        },
        {
          label: "添加 VLess 服务器",
        },
        {
          label: "添加 ShadowSocket 服务器",
        },
        {
          label: "添加 Socket 服务器",
        },
        {
          label: "添加 Trojan 服务器",
        },
        {
          label: "添加 自定义配置 服务器",
        },
        { type: "separator" },
        {
          label: "移除所选服务器",
        },
      ],
    },
    {
      label: "设置",
      submenu: [
        {
          label: "参数设置",
        },
        {
          label: "路由设置",
        },
      ],
    },
    {
      label: "关于",
      submenu: [
        {
          label: "Github",
          click: async () => {
            const { shell } = require("electron");
            await shell.openExternal("https://github.com/GuoJikun/v2ray");
          },
        },
        {
          label: "提 Bug/Feature",
          click: async () => {
            const { shell } = require("electron");
            await shell.openExternal(
              "https://github.com/GuoJikun/v2ray/issues/new"
            );
          },
        },
        {
          label: "v2ray-core 官网",
          click: async () => {
            const { shell } = require("electron");
            await shell.openExternal("https://www.v2fly.org");
          },
        },
        {
          label: "版本信息",
        },
      ],
    },
  ];
};
