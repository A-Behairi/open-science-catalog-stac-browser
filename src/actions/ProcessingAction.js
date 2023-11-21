import LinkActionPlugin from "./LinkActionPlugin"

export default class ProcessingAction extends LinkActionPlugin {
  get show() {
    return (this.link.rel === 'process' && this.link.type === 'application/cwl');
  }


  get onClick() {
    return () => {
      const id = this.link.href.split('/')[1];
      window.parent.postMessage({
        navigate: '/new-process?process=' + id
      }, '*');
    };
  }

  get text() {
    return 'Open in Processing UI';
  }
}
