import load from 'load-script';

export default () => {
  /**
   * A promise that is resolved when window.onYouTubeIframeAPIReady is called.
   * The promise is resolved with a reference to window.YT object.
   *
   * @param {Function} resolve
   * @member {Object} iframeAPIReady
   */
  const iframeAPIReady = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;

    // The API will call this function when page has finished downloading
    // the JavaScript for the player API.
    window.onYouTubeIframeAPIReady = () => {
      if (previous) {
        previous();
      }

      resolve(window.YT);
    };
  });
  const protocol = window.location.protocol === 'https:' ? 'https:' : 'http:';

  load(protocol + '//www.youtube.com/iframe_api');

  return iframeAPIReady;
};
