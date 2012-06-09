$(document).on('click', '#basic-example', function () {
  $.modal({
    title: "Example title",
    content: "Here's some important message you must read.",
    buttons: [
      {
        text: "Roger that",
        close: true
      }
    ]
  }).modal('show');
});

$(document).on('click', '#full-example', function () {
  "use strict";

  $.modal({
    title: "Full example title",
    content: "<p>Rich content with some <strong>HTML</strong> tags <em>here</em> and <u>there</u></p>",
    header: true,
    footer: true,
    dispose: true,
    buttons: [
      {
        text: "Yup, I got it",
        href: "#",
        classes: "btn-primary",
        click: function(e) {
          alert("Seriously, I got it!");
        }
      },
      {
        text: "Get me out of here",
        href: "#",
        close: true
      },
      {
        html: "<a href='#' data-dismiss='modal' class='btn btn-danger'>Danger, custom button</a>",
        text: "Achtung!",
        classes: "btn-large",
        click: function() {
          alert("Custom  button");
        }
      }
    ]
  }).modal('show');
});

$(function () {
  window.prettyPrint && prettyPrint()
});