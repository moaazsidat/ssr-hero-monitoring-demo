
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

class ElementMonitor {
  constructor(options) {
    this.onLoad = options.onLoad
    console.log(window)
    const self = this;
    this.observer = new MutationObserver(
      (records, observer) => {
        records.forEach(rec => {
          console.log('mutation record', rec);
          if (rec.target && rec.target.dataset && rec.target.dataset.elementtiming) {
            // if (rec.attributeName === ELEMENT_TIMING_ATTRIBUTE) {
            console.log('elementtiming', rec.target.tagName)
            switch (rec.target.tagName) {
              case IMAGE:
                self.onLoad(rec.target.dataset.elementtiming)
              case DIV:
                self.onLoad(rec.target.dataset.elementtiming)
              case BUTTON:
                self.onLoad(rec.target.dataset.elementtiming)
            }
          } else {
            console.log('dataset', rec.target.dataset)
          }
        })
      }
    )
  }
  initialize() {
    console.log(document)
    this.observer.observe(document, {
      subtree: true,
      attributes: true,
      characterData: true,
    })
  }
}
console.log('Monitoring!!!');
window.ElementMonitor = ElementMonitor;
const monitor = new ElementMonitor({
  onLoad: (name) => { performance.mark(name) }
})
monitor.initialize();
module.exports = ElementMonitor;