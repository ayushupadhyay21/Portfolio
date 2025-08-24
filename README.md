# Ayush Upadhyay - Interactive Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring interactive visuals, smooth animations, and a dark gradient background.

## ✨ Features

- **Dark Gradient Background** - Beautiful multi-color gradient with smooth transitions
- **Interactive Visuals** - Floating cards, particle effects, and smooth animations
- **Responsive Design** - Mobile-first approach with hamburger navigation
- **Smooth Scrolling** - Elegant scroll animations and section transitions
- **Interactive Skills Section** - Animated skill bars with hover effects
- **Project Showcase** - Clickable project cards with hover overlays
- **Contact Form** - Functional contact form with validation
- **Keyboard Navigation** - Arrow keys and page navigation support
- **Scroll Progress Bar** - Visual scroll indicator at the top
- **Performance Optimized** - Throttled scroll events and efficient animations

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation
1. Download or clone the repository
2. Ensure all files are in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `Ayush_Pic.jpg` (your profile picture)
3. Open `index.html` in your web browser

## 📁 File Structure

```
PortfolioAyush/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
├── Ayush_Pic.jpg      # Profile picture
└── README.md           # This file
```

## 🎨 Customization

### Personal Information
Update the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
<p class="hero-subtitle">Your Title & Description</p>
<p class="hero-description">Your personal description</p>
```

#### About Section
```html
<p>Your personal story and background</p>
<div class="about-stats">
    <div class="stat-item">
        <div class="stat-number">X+</div>
        <div class="stat-label">Years Experience</div>
    </div>
    <!-- Add more stats as needed -->
</div>
```

#### Skills Section
Modify the skills in `index.html`:
```html
<div class="skill-item" data-skill="Skill Name">
    <div class="skill-icon"><i class="fas fa-icon-class"></i></div>
    <span class="skill-name">Skill Name</span>
    <div class="skill-level">
        <div class="skill-bar" data-level="90"></div>
    </div>
</div>
```

#### Projects Section
Update project information:
```html
<div class="project-card">
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Project description</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
    </div>
</div>
```

#### Contact Section
Update contact details:
```html
<div class="contact-details">
    <h4>Email</h4>
    <p>your.email@example.com</p>
</div>
```

### Profile Picture
Replace `Ayush_Pic.jpg` with your own profile picture. The image will automatically be styled as a circular profile picture with a glowing border.

### Colors and Theme
Modify the color scheme in `styles.css`:

#### Primary Colors
```css
:root {
    --primary-color: #00d4ff;
    --secondary-color: #ff6b6b;
    --background-dark: #0c0c0c;
}
```

#### Gradient Background
```css
body {
    background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%);
}
```

### Animations
Customize animation speeds and effects in `script.js`:

#### Typing Effect Speed
```javascript
typeWriter(heroTitle, originalText, 50); // Adjust the last number for speed
```

#### Scroll Animation Thresholds
```javascript
const observerOptions = {
    threshold: 0.1, // Adjust for earlier/later animations
    rootMargin: '0px 0px -50px 0px'
};
```

## 🔧 Advanced Customization

### Adding New Sections
1. Add the HTML structure in `index.html`
2. Style the section in `styles.css`
3. Add any JavaScript functionality in `script.js`

### Custom Animations
Add new CSS animations:
```css
@keyframes your-animation {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}
```

### Additional Interactive Elements
Enhance interactivity by adding event listeners:
```javascript
document.querySelector('.your-element').addEventListener('click', function() {
    // Your custom functionality
});
```

## 📱 Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Hamburger navigation for mobile devices
- Flexible grid layouts
- Optimized typography for all screen sizes

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📈 Performance Features

- Throttled scroll events (60fps)
- Efficient DOM manipulation
- Optimized animations using CSS transforms
- Lazy loading for better performance

## 🎯 SEO and Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader friendly

## 🚀 Deployment

### Local Development
Simply open `index.html` in your browser for local development and testing.

### Web Hosting
Upload all files to your web hosting service:
1. Upload `index.html`, `styles.css`, `script.js`
2. Upload your profile picture
3. Ensure all files are in the same directory
4. Test the website functionality

### GitHub Pages
1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select the source branch
4. Your portfolio will be available at `https://username.github.io/repository-name`

## 🔍 Troubleshooting

### Common Issues

#### Images Not Loading
- Ensure image files are in the correct directory
- Check file names and extensions
- Verify file permissions

#### Animations Not Working
- Check browser console for JavaScript errors
- Ensure all JavaScript files are properly linked
- Verify CSS animations are supported by your browser

#### Mobile Menu Not Working
- Check if JavaScript is enabled
- Verify event listeners are properly attached
- Test on different mobile devices

### Performance Issues
- Reduce the number of particles in `createParticles()` function
- Adjust animation thresholds for better performance
- Optimize images for web use

## 📞 Support

For customization help or technical support:
1. Check the browser console for error messages
2. Verify all files are properly linked
3. Test on different browsers and devices
4. Review the code comments for guidance

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Modern CSS techniques and animations
- Intersection Observer API for scroll animations

---

**Happy Coding! 🚀**

Feel free to customize this portfolio to make it uniquely yours. The modular structure makes it easy to add, remove, or modify sections as needed.
