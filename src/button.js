export function createButton(options = {}) {
  const {
    text = 'Button',
    variant = 'primary', // primary, secondary, outline, danger
    size = 'medium', // small, medium, large
    disabled = false,
    onClick = () => {},
    className = '',
    type = 'button'
  } = options;

  const button = document.createElement('button');
  button.type = type;
  button.textContent = text;
  button.disabled = disabled;

  // Add CSS classes
  button.className = `btn btn-${variant} btn-${size} ${className}`.trim();

  // Add click event listener
  button.addEventListener('click', onClick);

  return button;
}