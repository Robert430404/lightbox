'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener('DOMContentLoaded', function () {
    new Manipulator();
});
/**
 * This is the DOM Manipulation Service
 *
 * This contains methods that allow you to manipulate and
 * work with the DOM inside of the lightbox.
 */

var DomService = function () {
    /**
     * Constructs the object with the default container set
     * to na (string)
     *
     * @param  container
     * @return void
     */
    function DomService() {
        var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'na';

        _classCallCheck(this, DomService);

        this.container = container;
    }

    /**
     * This sets the container of the Dom node that you are
     * going to be manipulating, and then returns a new
     * instance of the object with the container set to the
     * provided node.
     *
     * @param container
     * @returns {DomService}
     */


    _createClass(DomService, [{
        key: 'setContainer',
        value: function setContainer(container) {
            this.container = container;

            return new DomService(this.container);
        }

        /**
         * This sets the node's inner html to nothing, and by
         * doing so empties the node.
         *
         * @returns {DomService}
         */

    }, {
        key: 'empty',
        value: function empty() {
            this.container.innerHTML = '';

            return this;
        }

        /**
         * Appends the content to the node and returns the current
         * instance of the object for further manipulation.
         *
         * @param template
         * @returns {DomService}
         */

    }, {
        key: 'append',
        value: function append(template) {
            this.container.innerHTML = this.container.innerHTML + template;

            return this;
        }

        /**
         * Replaces the current content of the node with the new
         * template string provided.
         *
         * @param template
         * @returns {DomService}
         */

    }, {
        key: 'replace',
        value: function replace(template) {
            this.container.innerHTML = template;

            return this;
        }
    }]);

    return DomService;
}();

var FadeMaipulator = function () {
    function FadeMaipulator() {
        _classCallCheck(this, FadeMaipulator);
    }

    _createClass(FadeMaipulator, [{
        key: 'createModal',
        value: function createModal() {}
    }]);

    return FadeMaipulator;
}();
/**
 * This is a base manipulator class that can be extended
 * for different transition types based upon what the
 * user is wanting
 */


var Manipulator = function () {
    /**
     * This constructs the objects, and injects the dependencies
     * for the class. This also initializes the calls to setup the
     * bindings for lightbox.
     */
    function Manipulator() {
        _classCallCheck(this, Manipulator);

        this.DomService = new DomService();

        this.bindImageEvents();
    }

    _createClass(Manipulator, [{
        key: 'bindImageEvents',
        value: function bindImageEvents() {
            var images = document.querySelectorAll('.rcox430404-lightbox');

            for (var i = 0; i < images.length; i++) {
                var image = images[i],
                    parent = image.parentNode,
                    parentType = parent.nodeName;

                if (parentType = 'A') {
                    parent.onclick = function (event) {
                        event.preventDefault();

                        console.log('test');
                    };
                } else {
                    var link = image.src,
                        anchor = document.createElement('a'),
                        thumb = document.createElement('img');

                    thumb.src = link;
                    anchor.href = link;

                    anchor.appendChild(thumb);
                    image.replaceWith(anchor);
                }
                console.log(parent.nodeName);
            }
        }
    }]);

    return Manipulator;
}();