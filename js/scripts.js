const copyConfirmation = document.getElementById('copy-confirmation');
let timeoutCopy = null;

document.getElementById('copy').onclick = function (e) {
  navigator.clipboard.writeText("ms-settings:");

  copyConfirmation.style.display = 'block';
  clearTimeout(timeoutCopy);
  timeoutCopy = setTimeout(() => {
    copyConfirmation.style.display = 'none';
  }, 1000);
}

document.querySelectorAll('.category').forEach((category) => {
  const width = category.clientWidth;
  const height = category.clientHeight;
  const idx = window.location.pathname.indexOf('index.html');
  const pathname = window.location.pathname.slice(0, idx);

  category.onmousedown = (e) => {
    /// Should range from -1 to 1
    const relativeMiddleX = ((e.offsetX - width / 2) / width) * 2
    /// Should range from -1 to 1
    const relativeMiddleY = ((e.offsetY - height / 2) / height) * 2
    const deg = 10;

    category.style.transform =
      ["perspective(1000px)",
        `rotateX(${deg * -relativeMiddleY}deg)`,
        `rotateY(${deg * relativeMiddleX}deg)`,
        `rotateZ(${deg / 5 * relativeMiddleX * relativeMiddleY}deg)`,
      ].join(' ');
  }

  category.onmouseup = (e) => {
    // category.style.transform = '';
    window.location = pathname + 'settings/template.html'
  }

  category.onmouseleave = (e) => {
    category.style.transform = '';
  }
})
