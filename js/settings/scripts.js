let selectedIndex = 0;

const items = document.querySelectorAll('.header-list-item');
const color = '#0078D7'

items.forEach((category, index) => {
  const width = category.clientWidth;
  const height = category.clientHeight;

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
    category.style.transform = '';

    items[selectedIndex].style.setProperty('--selection-color', 'transparent');
    items[index].style.setProperty('--selection-color', color);

    selectedIndex = index;
  }

  category.onmouseleave = (e) => {
    category.style.transform = '';
  }
})


{
  const headerHome = document.querySelector('.header-home');

  const width = headerHome.clientWidth;
  const height = headerHome.clientHeight;
  headerHome.onmousedown = (e) => {
    /// Should range from -1 to 1
    const relativeMiddleX = ((e.offsetX - width / 2) / width) * 2
    /// Should range from -1 to 1
    const relativeMiddleY = ((e.offsetY - height / 2) / height) * 2
    const deg = 10;

    headerHome.style.transform =
      ["perspective(1000px)",
        `rotateX(${deg * -relativeMiddleY}deg)`,
        `rotateY(${deg * relativeMiddleX}deg)`,
        `rotateZ(${deg / 5 * relativeMiddleX * relativeMiddleY}deg)`,
      ].join(' ');
  }

  headerHome.onmouseup = (e) => {
    headerHome.style.transform = '';
  }

  headerHome.onmouseleave = (e) => {
    headerHome.style.transform = '';
  }
}

items[selectedIndex].style.setProperty('--selection-color', color);
