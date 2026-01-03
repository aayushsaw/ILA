import './style.css'
import { createButton } from './button.js'
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
heading.textContent = 'Component Demo';
heading.style.color = '#646cff';
heading.style.marginBottom = '2rem';

// Create button examples section
const buttonSection = document.createElement('section');
buttonSection.className = 'demo-section';

const buttonTitle = document.createElement('h2');
buttonTitle.textContent = 'Button Component Examples';
buttonTitle.style.color = 'rgba(255, 255, 255, 0.87)';
buttonTitle.style.marginBottom = '1rem';

buttonSection.appendChild(buttonTitle);

// Create different button variants
const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.gap = '1rem';
buttonContainer.style.flexWrap = 'wrap';
buttonContainer.style.marginBottom = '2rem';

const primaryBtn = createButton({
  text: 'Primary Button',
  variant: 'primary',
  onClick: () => alert('Primary button clicked!')
});

const secondaryBtn = createButton({
  text: 'Secondary Button',
  variant: 'secondary',
  onClick: () => alert('Secondary button clicked!')
});

const outlineBtn = createButton({
  text: 'Outline Button',
  variant: 'outline',
  onClick: () => alert('Outline button clicked!')
});

const dangerBtn = createButton({
  text: 'Danger Button',
  variant: 'danger',
  onClick: () => alert('Danger button clicked!')
});

const disabledBtn = createButton({
  text: 'Disabled Button',
  variant: 'primary',
  disabled: true,
  onClick: () => alert('This should not show!')
});

buttonContainer.appendChild(primaryBtn);
buttonContainer.appendChild(secondaryBtn);
buttonContainer.appendChild(outlineBtn);
buttonContainer.appendChild(dangerBtn);
buttonContainer.appendChild(disabledBtn);

buttonSection.appendChild(buttonContainer);

// Create size examples
const sizeSection = document.createElement('div');
sizeSection.style.marginBottom = '2rem';

const sizeTitle = document.createElement('h3');
sizeTitle.textContent = 'Button Sizes';
sizeTitle.style.color = 'rgba(255, 255, 255, 0.87)';
sizeTitle.style.marginBottom = '1rem';

sizeSection.appendChild(sizeTitle);

const sizeContainer = document.createElement('div');
sizeContainer.style.display = 'flex';
sizeContainer.style.gap = '1rem';
sizeContainer.style.alignItems = 'center';

const smallBtn = createButton({
  text: 'Small',
  variant: 'primary',
  size: 'small'
});

const mediumBtn = createButton({
  text: 'Medium',
  variant: 'primary',
  size: 'medium'
});

const largeBtn = createButton({
  text: 'Large',
  variant: 'primary',
  size: 'large'
});

sizeContainer.appendChild(smallBtn);
sizeContainer.appendChild(mediumBtn);
sizeContainer.appendChild(largeBtn);

sizeSection.appendChild(sizeContainer);
buttonSection.appendChild(sizeSection);

// Add sections to main content
mainContent.appendChild(heading);
mainContent.appendChild(buttonSection);

// Append everything to app
document.querySelector('#app').appendChild(nav);
document.querySelector('#app').appendChild(mainContent);
