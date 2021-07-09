import axios from "axios";
import urlJoin from "url-join";

export const loadResources = async (url) => {
  let [css, js] = await getManifest(url);
  return Promise.all([loadStyles(css), loadScripts(js)]);
};

export const getFirstKey = (obj) => {
  if (!obj) return;
  return Object.keys(obj)[0];
};

export const getManifest = (url) =>
  new Promise(async (resolve) => {
    const u = urlJoin(url, "manifest.json");

    const { data } = await axios.get(u);

    const { entrypoints, publicPath } = data;
    const key = getFirstKey(entrypoints);
    if (!key) {
      return resolve([]);
    }
    const assets = (entrypoints[key].assets || []).filter((file) =>
      /(\.css|\.js)$/.test(file)
    );
    const css = [],
      js = [];
    for (let i = 0; i < assets.length; i++) {
      const asset = assets[i];
      const assetPath = urlJoin(publicPath, asset);
      if (/\.css$/.test(asset)) {
        css.push(assetPath);
      } else if (/\.js$/.test(asset)) {
        js.push(assetPath);
      }
    }
    resolve([css, js]);
  });

export const loadStyles = async (res) => {
  res = (res || []).filter((href) => !Boolean(hasLoadedStyle(href)));
  return Promise.all(res.map(createStyle));
};
export const loadScripts = async (res) => {
  res = (res || []).filter((src) => !Boolean(hasLoadedScript(src)));
  for (let i = 0; i < res.length; i++) {
    await createScript(res[i]);
  }
};
export const createScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.appendChild(script, firstScript);
  });
};

export const hasLoadedStyle = function (link) {
  return (Array.prototype.slice.apply(document.styleSheets) || []).find(
    (e) => e.href === link
  );
};

export const hasLoadedScript = function (src) {
  return (Array.prototype.slice.apply(document.scripts) || []).find(
    (e) => e.src === src
  );
};

export const createStyle = async (url) => {
  return new Promise((resolve, reject) => {
    const styleLink = document.createElement("link");
    styleLink.link = url;
    styleLink.onload = resolve;
    styleLink.onerror = reject;
    document.head.appendChild(styleLink);
  });
};
