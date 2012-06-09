/* =========================================================
 * bootstrap-modal-builder.js v0.1.0
 * =========================================================
 * Copyright 2012 Piotrek Okoński
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict";


  /* MODAL BUILDER PRIVATE METHODS
   * ===================== */
  function disposeModal(e) {
    $(e.target).remove()
  }

  function buildButton(button, options) {
    var html;
    button = $.extend({}, $.modal.defaults.button, button)

    if (button.html) {
      html = $(button.html)
    } else {
      html = $(options.buttonTemplate).text(button.text).attr('href', button.href);
      if (button.classes) html.addClass(button.classes)
      if (button.close) html.attr('data-dismiss','modal')
    }
    if (button.click) html.on('click', button.click)

    return html
  }

  /* MODAL BUILDER PLUGIN DEFINITION
   * ======================= */

  $.modal = function (options) {
    var modal = $($.modal.defaults.template)
      , options = $.extend({}, $.modal.defaults, options)
    modal.children('.modal-header')[options.header ? 'show' : 'hide']().children('h3').text(options.title)
    modal.children('.modal-body').html(options.content)
    modal.children('.modal-footer')[options.footer ? 'show' : 'hide']()

    if (options.dispose) modal.on('hidden', disposeModal)

    if (options.footer && options.buttons) {
      var footer = modal.find('.modal-footer')
      $.each(options.buttons, function (i, btn) {
        buildButton(btn, options).prependTo(footer)
      })
    }

    return modal.appendTo(document.body)
  }

  $.modal.defaults = {
      buttonTemplate: '<a class="btn"></a>'
    , button: {
          href: "#"
        , text: ""
        , close: false
      }
    , template: '<div class="modal hide"><div class="modal-header"><button class="close" data-dismiss="modal">×</button><h3></h3></div><div class="modal-body"></div><div class="modal-footer"></div></div>'
    , dispose: true
    , footer: true
    , header: true
    , title: ""
    , content: ""

  }

}(window.jQuery);