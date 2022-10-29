export default function scrollToSection(id, setState) {
  if (typeof setState === 'function') {
    setState((prev) => !prev);
  }

  const section = document.getElementById(id);

  const offset = id === 'introduction' ? 80 : 160;

  window.scrollTo({
    top: section.offsetTop - offset,
    behavior: 'smooth',
  });
}
