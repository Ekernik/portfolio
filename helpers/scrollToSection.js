export default function scrollToSection(id) {
  const section = document.getElementById(id);

  const offset = id === 'introduction' ? 80 : 160;

  window.scrollTo({
    top: section.offsetTop - offset,
    behavior: 'smooth',
  });
}
