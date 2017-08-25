/*
 * This program is free software; you can redistribute it and/or modify it under the
 * terms of the GNU Lesser General Public License, version 2.1 as published by the Free Software
 * Foundation.
 *
 * You should have received a copy of the GNU Lesser General Public License along with this
 * program; if not, you can obtain a copy at http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
 * or from the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Lesser General Public License for more details.
 *
 *
 * Copyright 2002 - 2017 Pentaho Corporation. All rights reserved.
 */

var webjarsAngularjsChildren = [
    'angular-animate',
    'angular-cookies',
    'angular-loader',
    'angular-mocks',
    'angular-resource',
    'angular-route',
    'angular-sanitize',
    'angular-scenario',
    'angular-touch'
]

var webjarsAngularjsLocales = [
    'angular-locale_en-in',
    'angular-locale_sk-sk',
    'angular-locale_en-dsrt-us',
    'angular-locale_cs-cz',
    'angular-locale_pt-pt',
    'angular-locale_ml-in',
    'angular-locale_ro-ro',
    'angular-locale_sr',
    'angular-locale_en-ie',
    'angular-locale_hr',
    'angular-locale_ko',
    'angular-locale_sw-tz',
    'angular-locale_de-ch',
    'angular-locale_ja',
    'angular-locale_sq-al',
    'angular-locale_ln',
    'angular-locale_zh-cn',
    'angular-locale_en-zz',
    'angular-locale_en-sg',
    'angular-locale_kn',
    'angular-locale_mr-in',
    'angular-locale_mr',
    'angular-locale_fil-ph',
    'angular-locale_zh-hans',
    'angular-locale_am',
    'angular-locale_he-il',
    'angular-locale_gl',
    'angular-locale_en',
    'angular-locale_en-mh',
    'angular-locale_hi',
    'angular-locale_ro',
    'angular-locale_pt',
    'angular-locale_hu',
    'angular-locale_sl-si',
    'angular-locale_fr-ca',
    'angular-locale_fil',
    'angular-locale_it',
    'angular-locale_fr-bl',
    'angular-locale_fr-gp',
    'angular-locale_ms',
    'angular-locale_sv-se',
    'angular-locale_it-it',
    'angular-locale_sr-latn-rs',
    'angular-locale_ar-eg',
    'angular-locale_en-vi',
    'angular-locale_vi-vn',
    'angular-locale_ja-jp',
    'angular-locale_ta',
    'angular-locale_en-iso',
    'angular-locale_en-gu',
    'angular-locale_eu-es',
    'angular-locale_no',
    'angular-locale_hu-hu',
    'angular-locale_fr-mf',
    'angular-locale_en-um',
    'angular-locale_gl-es',
    'angular-locale_pl',
    'angular-locale_nl-nl',
    'angular-locale_et',
    'angular-locale_de-lu',
    'angular-locale_da',
    'angular-locale_zh',
    'angular-locale_tr-tr',
    'angular-locale_am-et',
    'angular-locale_te-in',
    'angular-locale_hi-in',
    'angular-locale_et-ee',
    'angular-locale_tr',
    'angular-locale_sk',
    'angular-locale_sr-rs',
    'angular-locale_lv',
    'angular-locale_fa-ir',
    'angular-locale_sl',
    'angular-locale_el-gr',
    'angular-locale_bn-bd',
    'angular-locale_lt-lt',
    'angular-locale_sq',
    'angular-locale_fr-mq',
    'angular-locale_ms-my',
    'angular-locale_id',
    'angular-locale_bn',
    'angular-locale_hr-hr',
    'angular-locale_fr-mc',
    'angular-locale_id-id',
    'angular-locale_es',
    'angular-locale_es-es',
    'angular-locale_cs',
    'angular-locale_zh-hans-cn',
    'angular-locale_fr',
    'angular-locale_th-th',
    'angular-locale_te',
    'angular-locale_fa',
    'angular-locale_kn-in',
    'angular-locale_or',
    'angular-locale_pt-br',
    'angular-locale_zh-hk',
    'angular-locale_gu',
    'angular-locale_en-au',
    'angular-locale_is-is',
    'angular-locale_en-gb',
    'angular-locale_ln-cd',
    'angular-locale_mo',
    'angular-locale_sw',
    'angular-locale_tl',
    'angular-locale_mt',
    'angular-locale_vi',
    'angular-locale_de',
    'angular-locale_mt-mt',
    'angular-locale_pl-pl',
    'angular-locale_uk-ua',
    'angular-locale_gsw-ch',
    'angular-locale_ca',
    'angular-locale_tl-ph',
    'angular-locale_da-dk',
    'angular-locale_ca-es',
    'angular-locale_bg-bg',
    'angular-locale_nl',
    'angular-locale_or-in',
    'angular-locale_gu-in',
    'angular-locale_zh-tw',
    'angular-locale_bg',
    'angular-locale_is',
    'angular-locale_eu',
    'angular-locale_el-polyton',
    'angular-locale_fr-re',
    'angular-locale_sr-cyrl-rs',
    'angular-locale_lt',
    'angular-locale_sv',
    'angular-locale_en-za',
    'angular-locale_ur-pk',
    'angular-locale_fi',
    'angular-locale_he',
    'angular-locale_en-mp',
    'angular-locale_ru-ru',
    'angular-locale_de-at',
    'angular-locale_en-as',
    'angular-locale_gsw',
    'angular-locale_ko-kr',
    'angular-locale_de-de',
    'angular-locale_ru',
    'angular-locale_iw',
    'angular-locale_uk',
    'angular-locale_in',
    'angular-locale_en-dsrt',
    'angular-locale_el',
    'angular-locale_en-us',
    'angular-locale_fi-fi',
    'angular-locale_ar',
    'angular-locale_de-be',
    'angular-locale_th',
    'angular-locale_ta-in',
    'angular-locale_ml',
    'angular-locale_lv-lv',
    'angular-locale_ur',
    'angular-locale_fr-fr' ];

var webjarsAngularjsPaths = { "angular": webjars.path("angularjs", "angular") };

var webjarsAngularjsShim = { "angular": {"exports" : "angular"} };

webjarsAngularjsChildren.forEach(function(child) {
    webjarsAngularjsPaths[child] = webjars.path("angularjs", child);
    webjarsAngularjsShim[child] = ["angular", "webjars!angular.js"];
});

webjarsAngularjsLocales.forEach(function(child) {
    webjarsAngularjsPaths[child] = webjars.path("angularjs", "i18n/"+child);
    webjarsAngularjsShim[child] = ["angular", "webjars!angular.js"];
});

requirejs.config({
    paths: webjarsAngularjsPaths,
    shim: webjarsAngularjsShim
});
