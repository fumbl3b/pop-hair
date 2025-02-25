# Pop Hair Salon Website - Developer Guide

## Project Overview
Static HTML/CSS/JS website for Pop Hair Salon using Bootstrap 4.5.2, AOS animations, and Lightbox2.

## Development Commands
- **Preview site**: Open index.html in browser or use a local server
- **Validate HTML**: Use W3C Validator (https://validator.w3.org/)
- **Live Server**: Install VS Code Live Server extension and click "Go Live"

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements (header, section, footer)
- Maintain consistent indentation (2 spaces)
- ID for sections (#hero, #services, #contact)
- Class-based styling with Bootstrap conventions

### CSS
- Follow existing color variables in :root
- Mobile-first approach with media queries
- AOS animation attributes for scroll effects
- Font families: 'Poppins' for content, 'Impact' for headings

### JavaScript
- jQuery for DOM manipulation
- Use ES6+ syntax where supported
- Init AOS animations on document load
- Implement smooth scrolling for navigation

### Assets
- Images in public/ directory
- Optimize images for web before adding
- Use consistent naming conventions

## Testing
- Test responsive layouts across devices
- Verify animations and transitions work properly
- Check form functionality (currently static)