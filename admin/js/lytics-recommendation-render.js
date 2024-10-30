import { _ as __awaiter, a as __generator } from "../../assets/tslib.es6-OrcEiBuJ.js";
function getRecommendation(options) {
  return __awaiter(this, void 0, void 0, function() {
    var baseURL, parts, url, response, data;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          baseURL = "https://api.lytics.io/api/content/recommend/".concat(options.accountId, "/user/_uid/").concat(options.previewUID);
          parts = [];
          if (!options.accountId) {
            console.error("Account ID is required to generate recommendations.");
            return [2, []];
          }
          parts.push("account=".concat(options.accountId));
          if (options.collection) {
            parts.push("contentsegment=".concat(options.collection));
          }
          if (options.engine) {
            parts.push("config=".concat(options.engine));
          }
          if (options.noShuffle) {
            parts.push("shuffle=false");
          } else {
            parts.push("shuffle=true");
          }
          if (options.includeViewed) {
            parts.push("visited=true");
          } else {
            parts.push("visited=false");
          }
          parts.push("limit=15");
          url = "".concat(baseURL, "?").concat(parts.join("&"));
          return [4, fetch(url)];
        case 1:
          response = _a.sent();
          return [4, response.json()];
        case 2:
          data = _a.sent();
          return [2, data.data];
      }
    });
  });
}
var LyticsRender = (
  /** @class */
  /* @__PURE__ */ function() {
    function LyticsRender2() {
      var _this = this;
      this._uid = "";
      this.placeholder = {
        title: "Example recommendation title",
        imageurls: [
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23CCCCCC'/%3E%3Cg opacity='0.9'%3E%3Cpath d='M383.973 215.615H216.028C204.43 215.615 195.035 225.034 195.035 236.663V362.951C195.035 374.58 204.43 383.999 216.028 383.999H383.973C395.572 383.999 404.966 374.58 404.966 362.951V236.663C404.966 225.034 395.572 215.615 383.973 215.615ZM279.008 257.711C284.802 257.711 289.504 262.426 289.504 268.235C289.504 274.045 284.802 278.759 279.008 278.759C273.214 278.759 268.511 274.045 268.511 268.235C268.511 262.426 273.214 257.711 279.008 257.711ZM373.477 352.427H226.525L263.252 305.08L289.504 336.747L326.242 289.294L373.477 352.427Z' fill='white' fill-opacity='0.7'/%3E%3C/g%3E%3C/svg%3E"
        ],
        url: "#"
      };
      this.render = function() {
        return __awaiter(_this, void 0, void 0, function() {
          var recContainers, _loop_1, _i, _a, element, state_1;
          var _this2 = this;
          return __generator(this, function(_b) {
            switch (_b.label) {
              case 0:
                recContainers = document.querySelectorAll('[id*="lytics-rec-container-"]');
                _loop_1 = function(element2) {
                  var recWrapper, env, recommendationConfig, options, recs, count;
                  return __generator(this, function(_c) {
                    switch (_c.label) {
                      case 0:
                        recWrapper = element2.querySelector(".lytics-rec-wrapper");
                        if (!recWrapper) {
                          console.error('No element found with the class "lytics-rec-wrapper"');
                          return [2, { value: void 0 }];
                        }
                        env = element2.getAttribute("data-rec-env");
                        if (env === "prod") {
                          console.log("exiting because production");
                          return [2, { value: void 0 }];
                        }
                        recommendationConfig = JSON.parse(atob(element2.getAttribute("data-rec-config") || ""));
                        options = {
                          accountId: recommendationConfig === null || recommendationConfig === void 0 ? void 0 : recommendationConfig.account_id,
                          type: recommendationConfig === null || recommendationConfig === void 0 ? void 0 : recommendationConfig.recommendation_type,
                          collection: recommendationConfig === null || recommendationConfig === void 0 ? void 0 : recommendationConfig.content_collection_id,
                          engine: recommendationConfig === null || recommendationConfig === void 0 ? void 0 : recommendationConfig.interest_engine_id,
                          // segment: recommendationConfig?.segment_id,
                          // url: recommendationConfig?.url,
                          noShuffle: recommendationConfig === null || recommendationConfig === void 0 ? void 0 : recommendationConfig.dont_shuffle_results,
                          includeViewed: recommendationConfig === null || recommendationConfig === void 0 ? void 0 : recommendationConfig.include_viewed_content,
                          maxItems: recommendationConfig === null || recommendationConfig === void 0 ? void 0 : recommendationConfig.number_of_recommendations,
                          previewUID: recommendationConfig === null || recommendationConfig === void 0 ? void 0 : recommendationConfig.preview_uid,
                          showHeadline: recommendationConfig === null || recommendationConfig === void 0 ? void 0 : recommendationConfig.show_headline,
                          showImage: recommendationConfig === null || recommendationConfig === void 0 ? void 0 : recommendationConfig.show_image,
                          showBody: recommendationConfig === null || recommendationConfig === void 0 ? void 0 : recommendationConfig.show_body
                        };
                        recWrapper.innerHTML = "";
                        recs = [];
                        if (!options.previewUID) return [3, 2];
                        return [4, getRecommendation(options)];
                      case 1:
                        recs = _c.sent();
                        return [3, 3];
                      case 2:
                        recs = Array.from({ length: recommendationConfig.number_of_recommendations }, function() {
                          return _this2.placeholder;
                        });
                        _c.label = 3;
                      case 3:
                        count = 0;
                        recs.forEach(function(rec) {
                          var _a2, _b2;
                          if (count >= recommendationConfig.number_of_recommendations) {
                            return;
                          }
                          var recItem = document.createElement("div");
                          recItem.classList.add("lytics-rec-item");
                          if (options.showImage) {
                            if ((rec === null || rec === void 0 ? void 0 : rec.primaryimageurl) !== void 0 && (rec === null || rec === void 0 ? void 0 : rec.primaryimageurl) !== "" || ((_a2 = rec === null || rec === void 0 ? void 0 : rec.imageurls) === null || _a2 === void 0 ? void 0 : _a2.length) > 0 && ((_b2 = rec === null || rec === void 0 ? void 0 : rec.imageurls) === null || _b2 === void 0 ? void 0 : _b2[0]) !== "") {
                              var img = document.createElement("img");
                              img.classList.add("lytics-rec-img");
                              img.alt = "Image of ".concat(rec.title);
                              img.src = rec.primaryimageurl || rec.imageurls[0];
                              recItem.appendChild(img);
                            } else {
                              return;
                            }
                          }
                          if (options.showHeadline) {
                            var recTitle = document.createElement("div");
                            recTitle.classList.add("lytics-rec-title");
                            recItem.appendChild(recTitle);
                            var titleLink = document.createElement("a");
                            var protocol = window.location.protocol;
                            titleLink.href = "".concat(protocol, "//").concat(rec.url);
                            titleLink.innerHTML = "<strong>".concat(rec.title, "</strong>");
                            recTitle.appendChild(titleLink);
                          }
                          if (options.showBody && rec.description) {
                            var description = document.createElement("p");
                            description.classList.add("lytics-rec-description");
                            description.textContent = rec.description;
                            recItem.appendChild(description);
                          }
                          recWrapper.appendChild(recItem);
                          count++;
                        });
                        return [
                          2
                          /*return*/
                        ];
                    }
                  });
                };
                _i = 0, _a = Array.from(recContainers);
                _b.label = 1;
              case 1:
                if (!(_i < _a.length)) return [3, 4];
                element = _a[_i];
                return [5, _loop_1(element)];
              case 2:
                state_1 = _b.sent();
                if (typeof state_1 === "object")
                  return [2, state_1.value];
                _b.label = 3;
              case 3:
                _i++;
                return [3, 1];
              case 4:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      };
      this.render();
    }
    return LyticsRender2;
  }()
);
window.onload = function() {
  window._lytics_rec_render = new LyticsRender();
};
