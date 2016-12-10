/**
 * This is the DOM Manipulation Service
 *
 * This contains methods that allow you to manipulate and
 * work with the DOM inside of the lightbox.
 */
class DomService {
    /**
     * Constructs the object with the default container set
     * to na (string)
     *
     * @param  container
     * @return void
     */
    constructor(container = 'na') {
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
    setContainer(container) {
        this.container = container;

        return new DomService(this.container);
    }

    /**
     * This sets the node's inner html to nothing, and by
     * doing so empties the node.
     *
     * @returns {DomService}
     */
    empty() {
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
    append(template) {
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
    replace(template) {
        this.container.innerHTML = template;

        return this;
    }
}