import * as Model from "../model/model.js";

function initURLListener() {
  $(window).on("hashchange", Model.changeRoute);
  Model.changeRoute();
}

$(document).ready(function () {
  initURLListener();
});

$(".hamburger").on("click", () => {
  $(".hamburger").toggleClass("open");
  console.log("Hello");
});
