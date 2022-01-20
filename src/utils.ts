function getQueryStringArgs(url: string) {
  if (url && url.includes("?")) {
    const arr = url.split("?");
    let qs = arr[1],
      args: { [x: string]: any } = {},
      items = qs.length ? qs.split("&") : [],
      item = null,
      name = null,
      value = null,
      i = 0,
      len = items.length;
    for (i = 0; i < len; i++) {
      item = items[i].split("=");
      name = decodeURIComponent(item[0]);
      value = decodeURIComponent(item[1]);
      if (name.length) {
        args[name] = value;
      }
    }
    return args;
  }
  return {};
}
/**解析v2ray uri */
export const decodeV2rayUri = (str: string) => {
  let rawConfigs = str.split(" ");
  let configs = [];
  let decodedConfigs = [];
  for (const conf of rawConfigs) {
    // 替换#字符开始的字符串
    if (conf !== "") configs.push(conf.replace(/#\w.*/, ""));
  }
  if (configs.length) {
    for (let rawConf of configs) {
      let isSs = Boolean(rawConf.match(/^ssr?:\/\//));
      let text = rawConf.replace(/(vmess|ssr?):\/\//, "");
      let decode = Buffer.from(text, "base64").toString();
      if (isSs) {
        let config: { [x: string]: any } = {};
        let ssrConfig = decode.split(":");
        if (rawConf.match(/^ssr:\/\//)) {
          let formatConfig = getQueryStringArgs(ssrConfig[5]);
          config["IP"] = ssrConfig[0];
          config["端口"] = ssrConfig[1];
          config["协议"] = ssrConfig[2];
          config["加密"] = ssrConfig[3];
          config["混淆"] = ssrConfig[4];
          if (Object.keys(formatConfig).length)
            config["密码"] = Buffer.from(
              ssrConfig[5].split("/")[0],
              "base64"
            ).toString();
          if (formatConfig.group)
            config["分组"] = Buffer.from(
              formatConfig.group,
              "base64"
            ).toString();
          if (formatConfig.remarks)
            config["备注"] = Buffer.from(
              formatConfig.remarks,
              "base64"
            ).toString();
          if (formatConfig.protoparam)
            config["协议参数"] = Buffer.from(
              formatConfig.protoparam,
              "base64"
            ).toString();
          if (formatConfig.obfsparam)
            config["混淆参数"] = Buffer.from(
              formatConfig.obfsparam,
              "base64"
            ).toString();
        } else {
          config["加密"] = ssrConfig[0];
          config["密码"] = ssrConfig[1].split("@")[0];
          config["IP"] = ssrConfig[1].split("@")[1];
          config["端口"] = ssrConfig[2];
        }
        decodedConfigs.push(config);
      } else {
        try {
          decodedConfigs.push(JSON.parse(decode));
        } catch (error) {
          decodedConfigs.push("解析失败，请检查配置是否正确");
        }
      }
    }
    return decodedConfigs;
  } else {
    return false;
  }
};
