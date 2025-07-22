export default function decorate(block) {
  const div = document.createElement('div');
  const p = document.createElement('p');
  p.innerText('hogehogehoge');
  div.append(p);
  block.append(div);
}
