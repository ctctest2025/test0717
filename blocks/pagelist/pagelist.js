export default function decorate(block) {
  console.log('pagelist.js: decorate start.');
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.innerText('hogehogehoge');
  div.append(p);
  block.append(div);
  console.log('pagelist.js: decorate end.');
}
