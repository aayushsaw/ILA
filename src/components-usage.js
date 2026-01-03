// Button Component Usage Examples:
//
// Basic usage:
// const btn = createButton({ text: 'Click me!' });
//
// With options:
// const btn = createButton({
//   text: 'Save',
//   variant: 'primary', // 'primary', 'secondary', 'outline', 'danger'
//   size: 'medium',     // 'small', 'medium', 'large'
//   disabled: false,
//   onClick: () => console.log('Button clicked!'),
//   className: 'custom-class'
// });
//
// Navigation Component Usage Examples:
//
// Basic usage:
// const nav = createNavigation({
//   brand: { text: 'My App', href: '/' },
//   links: [
//     { text: 'Home', href: '/', active: true },
//     { text: 'About', href: '/about' },
//     { text: 'Contact', href: '/contact' }
//   ]
// });
//
// With click handlers:
// const nav = createNavigation({
//   brand: { text: 'My App', href: '/' },
//   links: [
//     { text: 'Home', href: '/', active: true },
//     { text: 'About', href: '/about' },
//     {
//       text: 'Logout',
//       href: '#',
//       onClick: (e) => {
//         e.preventDefault();
//         // Handle logout logic
//         console.log('Logout clicked');
//       }
//     }
//   ]
// });