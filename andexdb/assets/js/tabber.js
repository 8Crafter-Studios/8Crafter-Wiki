/* eslint-disable @typescript-eslint/no-unused-vars */
function waitForjQueryLoad() {
  if (window.jQuery) {
    $(() => {
      function escapeIdForAttribute(str) {
        str = String(str);
        return encodeURIComponent(str.replace(/ /g, "_"));
      }
      (function ($) {
        $.fn.tabber = function () {
          return this.each(function () {
            // create tabs
            var $this = $(this),
              tabContent = $this.children(".tabbertab"),
              nav = $("<ul>").addClass("tabbernav");

            tabContent.each(function () {
              var title = $(this).data("title");
              $(this).attr("data-hash", escapeIdForAttribute(title));
              var anchor = $("<a>")
                .text(title)
                .attr("alt", title)
                .attr("data-hash", $(this).attr("data-hash"))
                .attr("href", "#");
              $("<li>").append(anchor).appendTo(nav);

              // Append a manual word break point after each tab
              nav.append($("<wbr>"));
            });

            $this.prepend(nav);

            /**
             * Internal helper function for showing content
             * @param  {string} title to show, matching only 1 tab
             * @return {bool} true if matching tab could be shown
             */
            function showContent(title) {
              var content = tabContent.filter('[data-hash="' + title + '"]');
              if (content.length !== 1) {
                return false;
              }
              tabContent.hide();
              content.show();
              nav.find(".tabberactive").removeClass("tabberactive");
              nav
                .find('a[data-hash="' + title + '"]')
                .parent()
                .addClass("tabberactive");
              return true;
            }

            // setup initial state
            var tab = new URL(location.href).hash.slice(1);
            if (tab === "" || !showContent(tab)) {
              showContent(tabContent.first().attr("data-hash"));
            }

            // Respond to clicks on the nav tabs
            nav.on("click", "a", function (e) {
              var title = $(this).attr("data-hash");
              e.preventDefault();
              if (history.replaceState) {
                history.replaceState(null, null, "#" + title);
                switchTab();
              } else {
                location.hash = "#" + title;
              }
            });

            $(window).on("hashchange", function (event) {
              switchTab();
            });

            function switchTab() {
              var tab = new URL(location.href).hash.slice(1);
              if (!tab.length) {
                showContent(tabContent.first().attr("data-hash"));
              }
              if (nav.find('a[data-hash="' + tab + '"]').length) {
                showContent(tab);
              }
            }

            $this.addClass("tabberlive");
          });
        };
      })(jQuery);

      $(function () {
        $(".tabber").tabber();
      });
      console.log("tabber loaded");
    });
  } else {
    setTimeout(function () {
      waitForjQueryLoad();
    }, 50);
  }
}
waitForjQueryLoad();
