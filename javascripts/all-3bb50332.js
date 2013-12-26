/* ========================================================================
 * Bootstrap: transition.js v3.0.3
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */
+function(t){"use strict";function n(){var t=document.createElement("bootstrap"),n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var e in n)if(void 0!==t.style[e])return{end:n[e]}}t.fn.emulateTransitionEnd=function(n){var e=!1,i=this;t(this).one(t.support.transition.end,function(){e=!0});var s=function(){e||t(i).trigger(t.support.transition.end)};return setTimeout(s,n),this},t(function(){t.support.transition=n()})}(jQuery),/* ========================================================================
 * Bootstrap: collapse.js v3.0.3
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
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
 * ======================================================================== */
+function(t){"use strict";var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var n=t.Event("show.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){var e=this.$parent&&this.$parent.find("> .panel > .in");if(e&&e.length){var i=e.data("bs.collapse");if(i&&i.transitioning)return;e.collapse("hide"),i||e.data("bs.collapse",null)}var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("in")[s]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var o=t.camelCase(["scroll",s].join("-"));this.$element.one(t.support.transition.end,t.proxy(a,this)).emulateTransitionEnd(350)[s](this.$element[0][o])}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var n=t.Event("hide.bs.collapse");if(this.$element.trigger(n),!n.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?(this.$element[e](0).one(t.support.transition.end,t.proxy(i,this)).emulateTransitionEnd(350),void 0):i.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var e=t.fn.collapse;t.fn.collapse=function(e){return this.each(function(){var i=t(this),s=i.data("bs.collapse"),a=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);s||i.data("bs.collapse",s=new n(this,a)),"string"==typeof e&&s[e]()})},t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=e,this},t(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(n){var e,i=t(this),s=i.attr("data-target")||n.preventDefault()||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""),a=t(s),o=a.data("bs.collapse"),l=o?"toggle":i.data(),r=i.attr("data-parent"),p=r&&t(r);o&&o.transitioning||(p&&p.find('[data-toggle=collapse][data-parent="'+r+'"]').not(i).addClass("collapsed"),i[a.hasClass("in")?"addClass":"removeClass"]("collapsed")),a.collapse(l)})}(jQuery);