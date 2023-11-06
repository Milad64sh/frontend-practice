function clock() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
}
