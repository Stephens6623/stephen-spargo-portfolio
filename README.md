# Stephen Spargo Portfolio

A visually pleasing portfolio showcasing past projects, including my recently completed capstone project. Built with React and deployed on Vercel.

## Tech Stack
- **Frontend**: React with Vite
- **Styling**: Tailwind CSS
- **Contact Form**: EmailJS
- **Deployment**: Vercel
- **Additional Libraries**: 
  - react-image-gallery (for project showcases)
  - emailjs-com (for contact form)

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/Stephens6623/stephen-spargo-portfolio.git
cd stephen-spargo-portfolio

# Install dependencies
npm install
```

### Running Locally
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

### EmailJS Setup
This portfolio uses EmailJS for the contact form. To set up:
1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Add your service ID, template ID, and public key to the contact form component
3. Configure your email service (Gmail, Outlook, etc.)

## Deployment
This project is configured for automatic deployment to Vercel when pushed to the main branch.

## Project Structure
```
src/
├── components/     # Reusable React components
├── pages/          # Main page components
├── assets/         # Images, icons, etc.
└── styles/         # CSS/styling files
```

## Features
- Responsive design
- Project showcase with image gallery
- Contact form with email integration

---

