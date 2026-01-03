import './style.css'
import { createNavigation } from './navigation.js'

document.querySelector('#app').innerHTML = ''

// Create navigation
const nav = createNavigation({
  brand: { text: 'My App', href: '#' },
  links: [
    { text: 'Home', href: '#', active: true },
    { text: 'About', href: '#' },
    { text: 'Services', href: '#' },
    { text: 'Contact', href: '#' }
  ]
});

// Create main content container
const mainContent = document.createElement('div');
mainContent.className = 'main-content';

// Create heading
const heading = document.createElement('h1');
heading.textContent = 'Navigation Component Demo';
heading.style.color = '#646cff';
heading.style.marginBottom = '2rem';

// Create navigation examples section
const navSection = document.createElement('section');
navSection.className = 'demo-section';

const navTitle = document.createElement('h2');
navTitle.textContent = 'Navigation Component Examples';
navTitle.style.color = 'rgba(255, 255, 255, 0.87)';
navTitle.style.marginBottom = '1rem';

navSection.appendChild(navTitle);

// Create description
const description = document.createElement('p');
description.textContent = 'This navigation component includes a brand/logo section and multiple navigation links. The active link is highlighted, and all links are clickable.';
description.style.color = 'rgba(255, 255, 255, 0.7)';
description.style.marginBottom = '2rem';
description.style.maxWidth = '600px';
description.style.lineHeight = '1.6';

navSection.appendChild(description);

// Add sections to main content
mainContent.appendChild(heading);
mainContent.appendChild(navSection);

// Append everything to app
document.querySelector('#app').appendChild(nav);
document.querySelector('#app').appendChild(mainContent);
