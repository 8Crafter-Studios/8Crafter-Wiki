function waitForjQueryLoad() {
    if (window.jQuery) {
        $(() => {
            $("article").on(
                "mouseenter mouseleave touchstart",
                ".animated-container, .mcui, .minetip",
                function (e) {
                    $(this)
                        .find(".animated")
                        .toggleClass("animated-paused", e.type === "mouseenter");
                }
            );
            if (
                document.location.search.indexOf("undo=") !== -1 &&
                document.getElementsByName("wpAutoSummary")[0]
            ) {
                document.getElementsByName("wpAutoSummary")[0].value = "1";
            }
            (function () {
                var escapeChars = {
                    "\\u0026": "&#38;" /* , "§": "&#167;" */,
                    "<": "&#60;",
                    ">": "&#62;",
                };
                var escape = function (text) {
                    return text.replace(/\\/g, "&#92;").replace(/\\u0026|[<>]/g, function (char) {
                        return escapeChars[char];
                    });
                };
                var $tooltip = $();
                var $win = $(window),
                    winWidth,
                    winHeight,
                    width,
                    height;
                $("article").on(
                    {
                        "mouseenter.minetip, touchstart.minetip": function (e) {
                            $tooltip.remove();
                            var $elem = $(this),
                                title = $elem.attr("data-minetip-title");
                            if (title === undefined) {
                                title = $elem.attr("title");
                                if (title !== undefined) {
                                    title = $.trim(title.replace(/[\u0026§]/g, "\\u0026"));
                                    $elem.attr("data-minetip-title", title);
                                }
                            }
                            if (
                                title === undefined ||
                                (title !== "" &&
                                    title.replace(
                                        /[\u0026§]([0-9a-jl-qs-vyzr]|#[0-9a-fA-F]{6}|\$[0-9a-fA-F]{3})/g,
                                        ""
                                    ) === "")
                            ) {
                                var childElem = $elem[0],
                                    childTitle;
                                do {
                                    if (childElem.hasAttribute("title")) {
                                        childTitle = childElem.title;
                                    }
                                    childElem = childElem.firstChild;
                                } while (childElem && childElem.nodeType === 1);
                                if (childTitle === undefined) {
                                    return;
                                }
                                if (!title) {
                                    title = "";
                                }
                                title += $.trim(childTitle.replace(/[\u0026§]/g, "\\u0026"));
                                $elem.attr("data-minetip-title", title);
                            }
                            if (!$elem.data("minetip-ready")) {
                                $elem.find("[title]").addBack().removeAttr("title");
                                $elem.data("minetip-ready", true);
                            }
                            if (title === "") {
                                return;
                            }
                            var content =
                                '<span class="minetip-title">' + escape(title) + "\u0026r</span>";
                            var description = $.trim($elem.attr("data-minetip-text"));
                            if (description) {
                                description = escape(description).replace(/\\\//g, "&#47;");
                                content +=
                                    '<span class="minetip-description">' +
                                    description.replace(/\//g, "<br>") +
                                    "\u0026r</span>";
                            }
                            while (
                                content.search(
                                    /[\u0026§](?:[0-9a-jl-qs-vyz]|#[0-9a-fA-F]{6}|\$[0-9a-fA-F]{3})/
                                ) > -1
                            ) {
                                content = content.replace(
                                    /[\u0026§]([0-9a-jl-qs-vyz])(.*?)([\u0026§]r|$)/g,
                                    '<span class="format-$1">$2</span>\u0026r'
                                );
                                content = content.replace(
                                    /[\u0026§](?:#([0-9a-fA-F]{6})|\$([0-9a-fA-F]{3}))(.*?)([\u0026§]r|$)/g,
                                    '<span class="format-custom" style="color: #$1$2;">$3</span>\u0026r'
                                );
                            }
                            content = content.replace(/[\u0026§]r/g, "");
                            $tooltip = $('<div id="minetip-tooltip">');
                            $tooltip.html(content).appendTo("body");
                            winWidth = $win.width();
                            winHeight = $win.height();
                            width = $tooltip.outerWidth(true);
                            height = $tooltip.outerHeight(true);
                            $elem.trigger("mousemove", e);
                        },
                        "mousemove.minetip": function (e, trigger) {
                            if (!$tooltip.length) {
                                $(this).trigger("mouseenter");
                                return;
                            }
                            e = trigger || e;
                            const targetPos = $(e.target).offset();
                            var top = (e.pageY ?? targetPos.top) - 34;
                            var left = (e.pageX ?? targetPos.left) + 14;
                            if (left + width > winWidth) {
                                left -= width + 36;
                            }
                            if (left < 0) {
                                left = 0;
                                top -= height - 22;
                                if (top < 0) {
                                    top += height + 47;
                                }
                            } else if (top < 0) {
                                top = 0;
                            } else if (top + height > winHeight) {
                                top = winHeight - height;
                            }
                            $tooltip.css({ top: top, left: left });
                        },
                        "mouseleave.minetip": function () {
                            if (!$tooltip.length) {
                                return;
                            }
                            $tooltip.remove();
                            $tooltip = $();
                        },
                    },
                    ".minetip, .invslot-item"
                );
            })();
            $(".ns-14 .redirect-in-category .mw-redirect").each(function () {
                this.href += (this.href.includes("?") ? "&" : "?") + "redirect=no";
            });
            const portal = document.querySelector(".mp-portal-wrapper");
            if (portal) {
                const thisPage = portal.querySelector(".mp-portal-active");
                portal.addEventListener("click", (event) => {
                    if (event.target.tagName !== "A") return;
                    const isNewTab = event.ctrlKey || event.metaKey;
                    if (isNewTab) return;
                    thisPage.classList.remove("mp-portal-active");
                    event.target.closest(".mp-portal").classList.add("mp-portal-active");
                });
                document.addEventListener("visibilitychange", () => {
                    if (document.visibilityState === "visible") {
                        portal
                            .querySelector(".mp-portal-active")
                            .classList.remove("mp-portal-active");
                        thisPage.classList.add("mp-portal-active");
                    }
                });
            }
            console.log("minetip loaded");
        });
    } else {
        setTimeout(function () {
            waitForjQueryLoad();
        }, 50);
    }
}
waitForjQueryLoad();
