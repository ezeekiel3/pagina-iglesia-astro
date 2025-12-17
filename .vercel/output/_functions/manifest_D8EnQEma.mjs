import 'piccolore';
import { o as decodeKey } from './chunks/astro/server_CWYKJYLk.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DcN-MwB4.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/pclinuxroom/Documentos/pagina-iglesia-astro/","cacheDir":"file:///home/pclinuxroom/Documentos/pagina-iglesia-astro/node_modules/.astro/","outDir":"file:///home/pclinuxroom/Documentos/pagina-iglesia-astro/dist/","srcDir":"file:///home/pclinuxroom/Documentos/pagina-iglesia-astro/src/","publicDir":"file:///home/pclinuxroom/Documentos/pagina-iglesia-astro/public/","buildClientDir":"file:///home/pclinuxroom/Documentos/pagina-iglesia-astro/dist/client/","buildServerDir":"file:///home/pclinuxroom/Documentos/pagina-iglesia-astro/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/pagina-iglesia-astro/_astro/Agenda.BzzZNnX6.css"}],"routeData":{"route":"/agenda","isIndex":false,"type":"page","pattern":"^\\/Agenda\\/?$","segments":[[{"content":"Agenda","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Agenda.astro","pathname":"/Agenda","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/upload-pdf","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/upload-pdf\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"upload-pdf","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/upload-pdf.ts","pathname":"/api/upload-pdf","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/pagina-iglesia-astro/_astro/Agenda.BzzZNnX6.css"}],"routeData":{"route":"/cdc","isIndex":false,"type":"page","pattern":"^\\/Cdc\\/?$","segments":[[{"content":"Cdc","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Cdc.astro","pathname":"/Cdc","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/pagina-iglesia-astro/_astro/Agenda.BzzZNnX6.css"}],"routeData":{"route":"/material","isIndex":false,"type":"page","pattern":"^\\/Material\\/?$","segments":[[{"content":"Material","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Material.astro","pathname":"/Material","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/pagina-iglesia-astro/_astro/Agenda.BzzZNnX6.css"}],"routeData":{"route":"/nenes","isIndex":false,"type":"page","pattern":"^\\/Nenes\\/?$","segments":[[{"content":"Nenes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Nenes.astro","pathname":"/Nenes","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/pagina-iglesia-astro/_astro/Agenda.BzzZNnX6.css"}],"routeData":{"route":"/nuestracomunidad","isIndex":false,"type":"page","pattern":"^\\/NuestraComunidad\\/?$","segments":[[{"content":"NuestraComunidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/NuestraComunidad.astro","pathname":"/NuestraComunidad","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/pagina-iglesia-astro/_astro/Agenda.BzzZNnX6.css"}],"routeData":{"route":"/ubicaciones","isIndex":false,"type":"page","pattern":"^\\/Ubicaciones\\/?$","segments":[[{"content":"Ubicaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Ubicaciones.astro","pathname":"/Ubicaciones","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/pagina-iglesia-astro/_astro/Agenda.BzzZNnX6.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://ezeekiel3.github.io","base":"/pagina-iglesia-astro","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Agenda.astro",{"propagation":"none","containsHead":true}],["/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Cdc.astro",{"propagation":"none","containsHead":true}],["/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Material.astro",{"propagation":"none","containsHead":true}],["/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Nenes.astro",{"propagation":"none","containsHead":true}],["/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/NuestraComunidad.astro",{"propagation":"none","containsHead":true}],["/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/Ubicaciones.astro",{"propagation":"none","containsHead":true}],["/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/Agenda@_@astro":"pages/agenda.astro.mjs","\u0000@astro-page:src/pages/api/upload-pdf@_@ts":"pages/api/upload-pdf.astro.mjs","\u0000@astro-page:src/pages/Cdc@_@astro":"pages/cdc.astro.mjs","\u0000@astro-page:src/pages/Material@_@astro":"pages/material.astro.mjs","\u0000@astro-page:src/pages/Nenes@_@astro":"pages/nenes.astro.mjs","\u0000@astro-page:src/pages/NuestraComunidad@_@astro":"pages/nuestracomunidad.astro.mjs","\u0000@astro-page:src/pages/Ubicaciones@_@astro":"pages/ubicaciones.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D8EnQEma.mjs","/home/pclinuxroom/Documentos/pagina-iglesia-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C5ll10hY.mjs","/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/Conocenos.tsx":"_astro/Conocenos.C-Ejt6Hw.js","/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/CitySelector.tsx":"_astro/CitySelector.BNsQeBEP.js","/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/HeaderButton.tsx":"_astro/HeaderButton.CdeUT3TH.js","/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/CreemosEn.tsx":"_astro/CreemosEn.BDV7hFrR.js","@astrojs/react/client.js":"_astro/client.Nnj6Kmf-.js","/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/SeccionBiblica.tsx":"_astro/SeccionBiblica.CBJlc4d-.js","/home/pclinuxroom/Documentos/pagina-iglesia-astro/src/components/SeccionBiblica":"_astro/SeccionBiblica.DWv2tnT7.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/pagina-iglesia-astro/_astro/logo2.BOkTE7tv.png","/pagina-iglesia-astro/_astro/fotoscamping.BK7yv3M7.jpg","/pagina-iglesia-astro/_astro/edificio1.CXdjlz5_.jpg","/pagina-iglesia-astro/_astro/edificio2.mqvrsSrd.jpg","/pagina-iglesia-astro/_astro/edificio3.lqy0RH8o.jpg","/pagina-iglesia-astro/_astro/edificio4.Unv4PA2E.jpg","/pagina-iglesia-astro/_astro/interior1.VHXGkw_F.jpg","/pagina-iglesia-astro/_astro/interior2.0TmUIiPd.jpg","/pagina-iglesia-astro/_astro/cocina.A1109yOs.jpg","/pagina-iglesia-astro/_astro/patio.DS_Y5GTu.jpg","/pagina-iglesia-astro/_astro/habitacion1.D6OGsfsn.jpg","/pagina-iglesia-astro/_astro/habitacion2.CoYgIwxh.jpg","/pagina-iglesia-astro/_astro/habitacion3.VJD5KcS-.jpg","/pagina-iglesia-astro/_astro/banio.BOMjGnUx.jpg","/pagina-iglesia-astro/_astro/parque.BNykvFNL.jpg","/pagina-iglesia-astro/_astro/parque2.Bqwt8kDv.jpg","/pagina-iglesia-astro/_astro/parque3.BjjCvdtl.jpg","/pagina-iglesia-astro/_astro/logo1.CKroCrmu.png","/pagina-iglesia-astro/_astro/logo_asociacion.OdyHBUi9.png","/pagina-iglesia-astro/_astro/objetivo2.Ck6Ip-Gk.png","/pagina-iglesia-astro/_astro/objetivo4.CsG6-Sfm.png","/pagina-iglesia-astro/_astro/objetivo1.C2jC1C4W.png","/pagina-iglesia-astro/_astro/objetivo3.CjPqvOFh.png","/pagina-iglesia-astro/_astro/objetivo5.CkmYNUTr.png","/pagina-iglesia-astro/_astro/objetivo6.BBnb--Qj.png","/pagina-iglesia-astro/_astro/objetivo8.Cx1bosTm.png","/pagina-iglesia-astro/_astro/objetivo7.De7Shzoy.png","/pagina-iglesia-astro/_astro/pastor.B8oqGe9I.png","/pagina-iglesia-astro/_astro/bautismo1.B2MSXaUA.jpg","/pagina-iglesia-astro/_astro/bautismo2.DyHUYVl7.jpg","/pagina-iglesia-astro/_astro/santacena2.CTQmXSy0.jpg","/pagina-iglesia-astro/_astro/santacena1.DMqeGTlH.jpg","/pagina-iglesia-astro/_astro/menu.BzrBl02q.png","/pagina-iglesia-astro/_astro/close.D6IBavBg.png","/pagina-iglesia-astro/_astro/arrowRight.B_SfYfgd.png","/pagina-iglesia-astro/_astro/arrowBack.CxjxD2zG.png","/pagina-iglesia-astro/_astro/location.DMixO1nW.png","/pagina-iglesia-astro/_astro/clock.CUboc8-T.png","/pagina-iglesia-astro/_astro/Agenda.BzzZNnX6.css","/pagina-iglesia-astro/favicon.png","/pagina-iglesia-astro/_astro/CitySelector.BNsQeBEP.js","/pagina-iglesia-astro/_astro/Conocenos.C-Ejt6Hw.js","/pagina-iglesia-astro/_astro/CreemosEn.BDV7hFrR.js","/pagina-iglesia-astro/_astro/HeaderButton.CdeUT3TH.js","/pagina-iglesia-astro/_astro/SeccionBiblica.CBJlc4d-.js","/pagina-iglesia-astro/_astro/SeccionBiblica.DWv2tnT7.js","/pagina-iglesia-astro/_astro/client.Nnj6Kmf-.js","/pagina-iglesia-astro/_astro/index.BVOCwoKb.js","/pagina-iglesia-astro/_astro/jsx-runtime.D_zvdyIk.js","/pagina-iglesia-astro/_astro/store.AWnX43J5.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"Cg+27DeKanOxJ/ALGncYHMN71BmxYAp5x1Tzc9T2tJM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
