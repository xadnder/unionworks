/* ==========================================================================
   OFNHP site: small menu niceties.
   The menus already work with no script (<details>/<summary>). This only adds:
     - one dropdown open at a time,
     - close on Escape or a click outside,
     - close the phone menu after following an in-page link.
   ========================================================================== */
(function () {
  "use strict";

  // One dropdown open at a time, per menu.
  document.querySelectorAll("nav.nav").forEach(function (nav) {
    nav.addEventListener("toggle", function (e) {
      if (!e.target.open) return;
      nav.querySelectorAll("details[open]").forEach(function (d) {
        if (d !== e.target) d.open = false;
      });
    }, true); // "toggle" doesn't bubble, so listen in the capture phase
  });

  // Click outside a desktop dropdown closes it.
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".desktop-nav details[open]").forEach(function (d) {
      if (!d.contains(e.target)) d.open = false;
    });
  });

  // Escape closes everything.
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    document.querySelectorAll("details[open]").forEach(function (d) { d.open = false; });
  });

  // Phone menu: following an in-page link (#…) closes the menu.
  var toggle = document.querySelector(".menu-toggle");
  if (toggle) {
    toggle.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function () { toggle.open = false; });
    });
  }
})();
