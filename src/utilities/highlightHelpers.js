export const getCurrentScrollPosition = () => {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
};

export const positionToolTip = selection => {
  const scrollPosition = getCurrentScrollPosition();
  let selectionRange = null;
  if (selection instanceof HTMLElement) {
    selectionRange = selection.getBoundingClientRect();
  } else {
    selectionRange = selection.getRangeAt(0).getBoundingClientRect();
  }

  let top = selectionRange.top - 80;
  let left = (selectionRange.left + selectionRange.right) / 2 - 60;

  return {
    top: top + scrollPosition + "px",
    left: left + "px",
    opacity: 1
  };
};
