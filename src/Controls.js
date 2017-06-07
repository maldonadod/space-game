const Controls = {
  Space: false,
  ArrowUp: false,
  ArrowRight: false,
  ArrowDown: false,
  ArrowLeft: false
};

document.onkeydown = e => {
  let { code } = e;
  Controls[code] = true;
}
document.onkeyup = e => {
  let { code } = e;
  Controls[code] = false;
}

export {
  Controls
}
