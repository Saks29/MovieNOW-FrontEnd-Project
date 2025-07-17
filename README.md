# 🎬 MovieNOW - Movie Discovery Web App

A modern, responsive web application for discovering movies with detailed information, similar movie suggestions, and streaming platform availability.

## 📋 Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Configuration](#api-configuration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🔍 **Core Functionality**
- **Movie Search**: Search for any movie by title
- **Detailed Information**: Get comprehensive movie details including:
  - Movie poster, title, year, and rating
  - IMDb rating with color-coded badges
  - Genre tags and plot summary
  - Director, cast, and writer information
  - Country, language, and box office data
- **Similar Movies**: Get suggestions for related movies
- **Streaming Availability**: Check which platforms stream the movie
- **Trending Movies**: Quick access to popular movies

### 🎨 **Design Features**
- **Modern UI**: Beautiful gradient backgrounds with glassmorphism effects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Engaging hover effects and transitions
- **Color-coded Ratings**: Visual rating system based on IMDb scores
- **Professional Typography**: Clean, readable font choices

### 🔧 **Technical Features**
- **API Integration**: Uses OMDB API for real movie data
- **Fallback System**: Works offline with sample movie data
- **Error Handling**: Graceful error messages and loading states
- **Search History**: Tracks recent searches
- **Mobile Optimized**: Touch-friendly interface

## 🚀 Demo

### Screenshots
![MovieNOW Homepage](<img width="906" height="784" alt="Screenshot 2025-07-18 004433" src="https://github.com/user-attachments/assets/fb787b26-7e4f-44ac-a91f-1193297f61be" />)
![Movie Details](<img width="841" height="762" alt="Screenshot 2025-07-18 004457" src="https://github.com/user-attachments/assets/0566593e-4fc7-4566-aec9-8284afc3c0c7" />)
![Similar Movies](<img width="889" height="647" alt="Screenshot 2025-07-18 004506" src="https://github.com/user-attachments/assets/be451554-8cd6-4eaa-9cef-65ee025f6446" />
)

### Live Demo
[View Live Demo](https://your-username.github.io/MovieNOW) *(Replace with your actual GitHub Pages URL)*

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with:
  - Flexbox and Grid layouts
  - CSS animations and transitions
  - Glassmorphism effects
  - Responsive design
- **JavaScript ES6+**: Interactive functionality with:
  - Async/await for API calls
  - DOM manipulation
  - Event handling
  - Error handling
- **OMDB API**: Movie data source
- **Font Awesome**: Icons (if used)

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saks29/MovieNOW-FrontEnd-Project.git
   cd MovieNOW-FrontEnd-Project
   ```

2. **Open the project**
   - No build process required!
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **Access the application**
   - Open your browser and navigate to `http://localhost:8000`
   - Or simply double-click `index.html`

## 🎯 Usage

### Basic Search
1. Enter a movie title in the search box
2. Click "Search" or press Enter
3. View detailed movie information
4. Explore similar movie suggestions

### Quick Search
- Click on any trending movie for instant results
- Use the search history for previous searches

### Mobile Usage
- Fully responsive design works on all devices
- Touch-friendly interface for mobile users

## 🔑 API Configuration

### OMDB API Setup
1. Get your free API key from [OMDB API](http://www.omdbapi.com/apikey.aspx)
2. Replace the API key in `js/script.js`:
   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```

### API Limits
- Free tier: 1,000 requests per day
- No credit card required for basic usage
- Upgrade available for higher limits

## 📁 Project Structure

```
MovieNOW/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styling
├── js/
│   └── script.js          # JavaScript functionality
├── assets/
│   ├── images/            # Project images
│   └── icons/             # Icon files
├── docs/
│   └── screenshots/       # Application screenshots
├── README.md              # Project documentation
└── LICENSE               # License file
```

## 🔧 Development

### File Structure Details

#### HTML (`index.html`)
- Semantic HTML5 structure
- Meta tags for SEO and responsive design
- Clean, accessible markup

#### CSS (`css/style.css`)
- Modern CSS3 features
- Responsive design with media queries
- CSS Grid and Flexbox layouts
- Custom animations and transitions

#### JavaScript (`js/script.js`)
- ES6+ features and syntax
- Async/await for API calls
- Modular function structure
- Error handling and validation

### Customization

#### Changing Colors
Update the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
}
```

#### Adding New Features
1. Add HTML structure
2. Style with CSS
3. Add JavaScript functionality
4. Test across devices

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Add comments for complex functionality
- Test on multiple devices
- Update documentation as needed

## 🐛 Known Issues

- API rate limiting may cause temporary failures
- Some movies may not have complete information
- Streaming availability is simulated data

## 🔮 Future Enhancements

- [ ] User authentication and favorites
- [ ] Advanced search filters
- [ ] Real-time streaming availability
- [ ] Movie trailers integration
- [ ] Social sharing features
- [ ] Dark/light theme toggle
- [ ] Offline caching with Service Workers

## 📱 Browser Support

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [Saks29](https://github.com/Saks29)
- LinkedIn: [Saksham Patwal](https://www.linkedin.com/in/sakpat/)
- Email: Sakshampatwal2004@gmail.com

## 🙏 Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for movie data
- [Unsplash](https://unsplash.com/) for placeholder images
- [Font Awesome](https://fontawesome.com/) for icons
- [CSS Gradient](https://cssgradient.io/) for gradient inspiration

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Saks29/MovieNOW-FrontEnd-Project)
![GitHub forks](https://img.shields.io/github/forks/Saks29/MovieNOW-FrontEnd-Project)
![GitHub issues](https://img.shields.io/github/issues/Saks29/MovieNOW-FrontEnd-Project)
![GitHub license](https://img.shields.io/github/license/Saks29/MovieNOW-FrontEnd-Project)

---

**⭐ If you found this project helpful, please give it a star!**
