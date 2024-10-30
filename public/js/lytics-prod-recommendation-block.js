var S = Object.defineProperty;
var j = (n, s, l) => s in n ? S(n, s, { enumerable: true, configurable: true, writable: true, value: l }) : n[s] = l;
var E = (n, s, l) => (j(n, s + "", l), l);
async function H(n, s, l) {
  let o = `https://api.lytics.io/api/content/recommend/${n}/user/_uid/${s}`, i = [];
  if (!n)
    return console.error("Account ID is required to generate recommendations."), [];
  i.push(`account=${n}`), l.collection && i.push(`contentsegment=${l.collection}`), l.engine && i.push(`config=${l.engine}`), l.noShuffle ? i.push("shuffle=false") : i.push("shuffle=true"), l.includeViewed ? i.push("visited=true") : i.push("visited=false"), i.push("limit=15");
  const w = `${o}?${i.join("&")}`;
  return (await (await fetch(w)).json()).data;
}
const r = class r2 {
  static injectStyles() {
    if (document.getElementById("lytics-recommendation-styles"))
      return;
    const s = document.createElement("style");
    s.id = "lytics-recommendation-styles", s.textContent = `
      [id^="lytics-rec-container-"] {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }

      [id^="lytics-rec-container-"] .lytics-rec-item {
        flex: 1;
      }
        
      [id^="lytics-rec-container-"] .lytics-rec-item .lytics-rec-img {
        
      }

      [id^="lytics-rec-container-"] .lytics-rec-item .lytics-rec-title {
        font-size: 16px;
        font-weight: bold;
      }

      [id^="lytics-rec-container-"] .lytics-rec-item .lytics-rec-description {
        font-size: 14px;
        line-height: 14px;
      }
    `, document.head.appendChild(s);
  }
  static attach(s) {
    if (!r2.attached) {
      r2.attached = true, r2.injectStyles();
      const l = async (o) => {
        var f, m;
        const i = (m = (f = o == null ? void 0 : o.data) == null ? void 0 : f.user) == null ? void 0 : m._uid, w = document.querySelectorAll(
          '[id*="lytics-rec-container-"]'
        );
        for (const I of Array.from(w)) {
          const t = JSON.parse(
            atob(I.getAttribute("data-rec-config") || "")
          ), _ = t == null ? void 0 : t.account_id, b = t == null ? void 0 : t.element, L = t == null ? void 0 : t.number_of_recommendations;
          if (!_) {
            console.warn("No account ID provided for recommendations.");
            continue;
          }
          if (!i) {
            console.warn("No visitor ID provided for recommendations.");
            continue;
          }
          const h = {
            element: t == null ? void 0 : t.element,
            type: t == null ? void 0 : t.recommendation_type,
            collection: t == null ? void 0 : t.content_collection_id,
            engine: t == null ? void 0 : t.interest_engine_id,
            segment: t == null ? void 0 : t.segment_id,
            url: t == null ? void 0 : t.url,
            noShuffle: t == null ? void 0 : t.dont_shuffle_results,
            includeViewed: t == null ? void 0 : t.include_viewed_content,
            maxItems: t == null ? void 0 : t.number_of_recommendations,
            showHeadline: (t == null ? void 0 : t.show_headline) || true,
            showImage: (t == null ? void 0 : t.show_image) || true,
            showBody: (t == null ? void 0 : t.show_body) || false
          };
          try {
            const d = await H(_, i, h), y = document.querySelector(`#${b}`);
            if (y) {
              y.innerHTML = "";
              let $ = 0;
              if (!d || d.length === 0) {
                y.innerHTML = "No recommendations available.";
                continue;
              }
              d.forEach((e) => {
                var x, v;
                if ($ >= L)
                  return;
                const u = document.createElement("div");
                if (u.classList.add("lytics-rec-item"), h.showImage)
                  if ((e == null ? void 0 : e.primaryimageurl) !== void 0 && (e == null ? void 0 : e.primaryimageurl) !== "" || ((x = e == null ? void 0 : e.imageurls) == null ? void 0 : x.length) > 0 && ((v = e == null ? void 0 : e.imageurls) == null ? void 0 : v[0]) !== "") {
                    const c = document.createElement("a"), p = window.location.protocol;
                    c.href = `${p}//${e.url}`;
                    const a = document.createElement("img");
                    a.classList.add("lytics-rec-img"), a.alt = `Image of ${e.title}`, a.src = e.primaryimageurl || e.imageurls[0], c.appendChild(a), u.appendChild(c);
                  } else
                    return;
                if (h.showHeadline) {
                  const c = document.createElement("div");
                  c.classList.add("lytics-rec-title"), u.appendChild(c);
                  const p = document.createElement("a"), a = window.location.protocol;
                  p.href = `${a}//${e.url}`, p.innerHTML = `<strong>${e.title}</strong>`, c.appendChild(p);
                }
                if (h.showBody && e.description) {
                  const c = document.createElement("p");
                  c.classList.add("lytics-rec-description"), c.textContent = e.description, u.appendChild(c);
                }
                y.appendChild(u), $++;
              });
            }
          } catch (d) {
            console.error("Error fetching recommendations:", d);
          }
        }
      };
      window.jstag.call("entityReady", l);
    }
  }
};
E(r, "attached", false);
let g = r;
const LyticsRecommendationBlockInit = () => {
  g.attach(document.body);
};
if (document.readyState === "complete" || document.readyState === "interactive") {
  LyticsRecommendationBlockInit();
} else {
  window.addEventListener("load", LyticsRecommendationBlockInit);
}
