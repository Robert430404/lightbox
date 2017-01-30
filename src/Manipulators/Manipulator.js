/**
 * This is a base manipulator class that can be extended
 * for different transition types based upon what the
 * user is wanting
 */
class Manipulator {
    /**
     * This constructs the objects, and injects the dependencies
     * for the class. This also initializes the calls to setup the
     * bindings for lightbox.
     */
    constructor() {
        this.DomService = new DomService();

        this.bindImageEvents();
    }

    bindImageEvents() {
        const images = document.querySelectorAll('.rcox430404-lightbox');

        for (let i = 0; i < images.length; i++) {
            let image      = images[i],
                parent     = image.parentNode,
                parentType = parent.nodeName;

            if (parentType = 'A') {
                parent.onclick = (event) => {
                    event.preventDefault();

                    console.log('test');
                }
            } else {
                let link   = image.src,
                    anchor = document.createElement('a'),
                    thumb  = document.createElement('img');

                thumb.src   = link;
                anchor.href = link;

                anchor.appendChild(thumb);
                image.replaceWith(anchor);
            }
            console.log(parent.nodeName);
        }
    }
}