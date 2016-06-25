var Ahrefy =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.traverse = traverse;
	var URL_REGEXP = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
	
	function convertToLink(dom) {
	  var parent = dom.parentNode;
	  var wrapper = document.createElement('span');
	  wrapper.appendChild(dom.cloneNode());
	  parent.insertBefore(wrapper, dom);
	  parent.removeChild(dom);
	  wrapper.innerHTML = wrapper.innerHTML.replace(URL_REGEXP, function (url) {
	    return '<a href=' + url + '>' + url + '</a>';
	  });
	}
	
	function traverse(dom) {
	  for (var i = 0; i < dom.childNodes.length; i++) {
	    var child = dom.childNodes[i];
	    if (child.nodeName === 'SCRIPT' || child.nodeName === 'A' || child.nodeName === 'PRE') {
	      continue;
	    } else if (child.nodeName === '#text' && child.textContent.match(URL_REGEXP)) {
	      convertToLink(child);
	    } else {
	      traverse(child);
	    }
	  }
	}

/***/ }
/******/ ]);
//# sourceMappingURL=ahrefy.js.map