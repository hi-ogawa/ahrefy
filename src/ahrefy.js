const URL_REGEXP = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/

function convertToLink(dom) {
  const parent = dom.parentNode;
  const wrapper = document.createElement('span');
  wrapper.appendChild(dom.cloneNode());
  parent.insertBefore(wrapper, dom);
  parent.removeChild(dom);
  wrapper.innerHTML = wrapper.innerHTML.replace(
    URL_REGEXP,
    (url) => `<a href=${url}>${url}</a>`
  );
}

export function traverse(dom) {
  for (let i = 0; i < dom.childNodes.length; i++) {
    const child = dom.childNodes[i];
    if (
      child.nodeName === 'SCRIPT' ||
      child.nodeName === 'A'      ||
      child.nodeName === 'PRE'
    ) {
      return
    } else if (child.nodeName === '#text' && child.textContent.match(URL_REGEXP)) {
      convertToLink(child);
    } else {
      traverse(child);
    }
  }
}
