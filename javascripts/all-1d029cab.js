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
+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return{end:e[n]}}t.fn.emulateTransitionEnd=function(e){var n=!1,i=this;t(this).one(t.support.transition.end,function(){n=!0});var s=function(){n||t(i).trigger(t.support.transition.end)};return setTimeout(s,e),this},t(function(){t.support.transition=e()})}(jQuery),/* ========================================================================
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
+function(t){"use strict";var e=function(n,i){this.$element=t(n),this.options=t.extend({},e.DEFAULTS,i),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e=t.Event("show.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.$parent&&this.$parent.find("> .panel > .in");if(n&&n.length){var i=n.data("bs.collapse");if(i&&i.transitioning)return;n.collapse("hide"),i||n.data("bs.collapse",null)}var s=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[s](0),this.transitioning=1;var a=function(){this.$element.removeClass("collapsing").addClass("in")[s]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return a.call(this);var o=t.camelCase(["scroll",s].join("-"));this.$element.one(t.support.transition.end,t.proxy(a,this)).emulateTransitionEnd(350)[s](this.$element[0][o])}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var n=this.dimension();this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?(this.$element[n](0).one(t.support.transition.end,t.proxy(i,this)).emulateTransitionEnd(350),void 0):i.call(this)}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var n=t.fn.collapse;t.fn.collapse=function(n){return this.each(function(){var i=t(this),s=i.data("bs.collapse"),a=t.extend({},e.DEFAULTS,i.data(),"object"==typeof n&&n);s||i.data("bs.collapse",s=new e(this,a)),"string"==typeof n&&s[n]()})},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=n,this},t(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(e){var n,i=t(this),s=i.attr("data-target")||e.preventDefault()||(n=i.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),a=t(s),o=a.data("bs.collapse"),r=o?"toggle":i.data(),l=i.attr("data-parent"),u=l&&t(l);o&&o.transitioning||(u&&u.find('[data-toggle=collapse][data-parent="'+l+'"]').not(i).addClass("collapsed"),i[a.hasClass("in")?"addClass":"removeClass"]("collapsed")),a.collapse(r)})}(jQuery),window.smoothScroll=function(t,e){"use strict";if("querySelector"in e&&"addEventListener"in t&&Array.prototype.forEach){var n=e.querySelectorAll("[data-scroll]"),i=function(n,i,s,a){var o,r,l=t.pageYOffset,u=e.querySelector("[data-scroll-header]"),c=null===u?0:u.offsetHeight,h=0,p=function(t,e){return"easeInQuad"==t?e*e:"easeOutQuad"==t?e*(2-e):"easeInOutQuad"==t?.5>e?2*e*e:-1+(4-2*e)*e:"easeInCubic"==t?e*e*e:"easeOutCubic"==t?--e*e*e+1:"easeInOutCubic"==t?.5>e?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1:"easeInQuart"==t?e*e*e*e:"easeOutQuart"==t?1- --e*e*e*e:"easeInOutQuart"==t?.5>e?8*e*e*e*e:1-8*--e*e*e*e:"easeInQuint"==t?e*e*e*e*e:"easeOutQuint"==t?1+--e*e*e*e*e:"easeInOutQuint"==t?.5>e?16*e*e*e*e*e:1+16*--e*e*e*e*e:e},d=function(t,e){"true"===t&&history.pushState&&history.pushState({pos:e.id},"","#"+e.id)},f=function(t){var e=0;if(t.offsetParent)do e+=t.offsetTop,t=t.offsetParent;while(t);return e-=c,e>=0?e:0},g=f(n),v=g-l,m=function(){var n=t.pageYOffset;(r==g||n==g||t.innerHeight+n>=e.body.scrollHeight)&&clearInterval(b)},C=function(){h+=16,o=h/i,o=o>1?1:o,r=l+v*p(s,o),t.scrollTo(0,r),m()};d(a,n);var b=setInterval(C,16)},s=function(t){var n=this.getAttribute("href"),s=e.querySelector(n),a=this.getAttribute("data-speed"),o=this.getAttribute("data-easing"),r=this.getAttribute("data-url");t.preventDefault(),s&&i(s,a||500,o||"easeInOutCubic",r||"false")};Array.prototype.forEach.call(n,function(t){t.addEventListener("click",s,!1)}),t.onpopstate=function(e){null===e.state&&""===t.location.hash&&t.scrollTo(0,0)}}}(window,document);