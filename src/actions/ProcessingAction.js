import LinkActionPlugin from "./LinkActionPlugin"

export default class ProcessingAction extends LinkActionPlugin {
  get show() {
    return (this.link.rel === 'process' && this.link.type === 'application/cwl');
  }


  get onClick() {
    return () => {
      window.parent.postMessage({
        navigate: '/new-process?title=' + this.link.title
      }, '*');
    };
  }

  get text() {
    return 'Open in Processing UI';
  }
}
