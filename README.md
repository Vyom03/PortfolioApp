# Portfolio Website

A modern, responsive portfolio website built with React, showcasing professional skills, experience, projects, and a functional contact form.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Navigation**: Single-page application with smooth scrolling navigation
- **Interactive Sections**:
  - Professional profile with animated typing effect
  - About section highlighting key expertise
  - Work experience timeline
  - Categorized skills display (Frontend, Backend, Databases, Tools & Services)
  - Projects showcase
  - Functional contact form with EmailJS integration
- **Modern UI/UX**: Clean, professional design with smooth animations and hover effects
- **Contact Form**: Integrated EmailJS for seamless email submissions

## 🛠️ Technologies Used

### Frontend
- React 18.1.0
- HTML5 / CSS3
- JavaScript (ES6+)
- React Typical (for typing animations)

### Services & Tools
- EmailJS (for contact form)
- Git / GitHub
- React Scripts

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager

## 🏗️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Vyom03/PortfolioApp.git
cd PortfolioApp
```

2. Install dependencies:
```bash
npm install
```

3. Configure EmailJS (for contact form):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Public Key, Service ID, and Template ID
   - Update the credentials in `src/PortfolioContainer/Contact/Contact.js`:
   ```javascript
   const serviceID = 'YOUR_SERVICE_ID';
   const templateID = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm start
```
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Production Build
```bash
npm run build
```
Builds the app for production to the `build` folder. The build is optimized and minified for best performance.

### Running Tests
```bash
npm test
```
Launches the test runner in interactive watch mode.

## 📁 Project Structure

```
PortfolioApp/
├── public/
│   ├── index.html
│   └── VyomResume.pdf
├── src/
│   ├── PortfolioContainer/
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── Contact/
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   ├── Experience/
│   │   │   ├── Experience.js
│   │   │   └── Experience.css
│   │   ├── Home/
│   │   │   ├── Profile.js
│   │   │   └── Profile.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   │   ├── Projects/
│   │   │   ├── Projects.js
│   │   │   └── Projects.css
│   │   └── Skills/
│   │       ├── Skills.js
│   │       └── Skills.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Customization

### Updating Personal Information
- **Profile**: Edit `src/PortfolioContainer/Home/Profile.js`
- **About**: Edit `src/PortfolioContainer/About/About.js`
- **Experience**: Edit `src/PortfolioContainer/Experience/Experience.js`
- **Skills**: Edit `src/PortfolioContainer/Skills/Skills.js`
- **Projects**: Edit `src/PortfolioContainer/Projects/Projects.js`
- **Contact**: Edit `src/PortfolioContainer/Contact/Contact.js`

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Each component has its own `.css` file

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect React settings
6. Click "Deploy"

### Deploy to Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `build`
7. Click "Deploy site"

### Deploy to GitHub Pages
See the [Create React App deployment guide](https://facebook.github.io/create-react-app/docs/deployment#github-pages) for detailed instructions.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Vyom Trivedi**
- Email: vyomtriv@gmail.com
- GitHub: [@Vyom03](https://github.com/Vyom03)
- Location: Ottawa, ON, Canada

## 🙏 Acknowledgments

- Built with [Create React App](https://github.com/facebook/create-react-app)
- Icons provided by Font Awesome
- Email service powered by [EmailJS](https://www.emailjs.com/)

---

**Note**: Make sure to configure your EmailJS credentials before deploying to production. The public key is safe to expose, but ensure your service and template are properly configured.
