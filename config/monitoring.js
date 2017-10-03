
/**
 * Usage:
 *
 * const monitor = new ElementMonitor({
 *   onLoad: (name) => {
 *     rp.mark(name);
 *   }
 * });
 *
 * monitor.initialize();
 */

const ELEMENT_TIMING_ATTRIBUTE = 'data-elementtiming'
const IMAGE = 'IMG'
const DIV = 'DIV'
const BUTTON = 'BUTTON'

const mutationCallback = mutation => {
  // to track if a marker has been attached to the element
  // and prevent reattaching
  let markersMap = {}
  mutation.forEach(mut => {
    switch (mut.type) {
      case 'childList':
        const childrenArray = [].slice.call(mut.target.children)

        childrenArray.forEach(c => {
          if (c.dataset && c.dataset.elementtiming && !markersMap[c.dataset.elementtiming]) {
            console.log(c.tagName)
            if (c.tagName === IMAGE) {
              const img = new Image()
              img.addEventListener('load', () => {
                performance.mark(c.dataset.elementtiming);
              })
              markersMap[c.dataset.elementtiming] = true
              img.src = c.src
            } else {
              performance.mark(c.dataset.elementtiming);
              markersMap[c.dataset.elementtiming] = true
            }
            
          }
        })
    }
  })
  // records.forEach(rec => {
  //   if (rec.target && rec.target.dataset && rec.target.dataset.elementtiming) {
  //     // if (rec.attributeName === ELEMENT_TIMING_ATTRIBUTE) {
  //     console.log('elementtiming', rec.target.tagName)
  //     switch (rec.target.tagName) {
  //       case IMAGE:
  //         console.log('IMAGE tag')
  //       case DIV:
  //         console.log('DIV tag');
  //       case BUTTON:
  //         console.log('BUTTON tag')
  //     }
  //   } else {
  //     console.log('mutation record', rec.target, rec.target.children)
  //   }
  // })
}

class ElementMonitor {
  constructor(options) {
    this.onMutation = options.onMutation;
    this.observer = new MutationObserver(this.onMutation)
  }
  initialize() {
    this.observer.observe(document, {
      subtree: true,
      attributes: true,
      characterData: true,
      childList: true,
    })
  }
}
//window.ElementMonitor = ElementMonitor;
const monitor = new ElementMonitor({
  onMutation: mutationCallback,
})
monitor.initialize();
module.exports = ElementMonitor;