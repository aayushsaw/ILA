export function createNavigation(options = {}) {
  const {
    brand = { text: 'My App', href: '/' },
    links = [],
    className = '',
    position = 'top' // top, bottom, left, right
  } = options;

  const nav = document.createElement('nav');
  nav.className = `nav nav-${position} ${className}`.trim();

  // Create brand/logo section
  const brandLink = document.createElement('a');
  brandLink.href = brand.href || '#';
  brandLink.className = 'nav-brand';
  brandLink.textContent = brand.text;
  nav.appendChild(brandLink);

  // Create navigation links
  const navLinks = document.createElement('div');
  navLinks.className = 'nav-links';

  links.forEach(link => {
    const linkElement = document.createElement('a');
    linkElement.href = link.href || '#';
    linkElement.textContent = link.text;
    linkElement.className = 'nav-link';

    if (link.active) {
      linkElement.classList.add('active');
    }

    if (link.onClick) {
      linkElement.addEventListener('click', (e) => {
        e.preventDefault();
        link.onClick(e);
      });
    }

    navLinks.appendChild(linkElement);
  });

  nav.appendChild(navLinks);

  return nav;
}