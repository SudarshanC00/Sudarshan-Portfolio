# Sudarshan Chikkathimmaiah - Portfolio Website

A modern, responsive portfolio website showcasing academic background, research, AI/ML projects, and work experience. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

### Core Features
- ✅ **Responsive Navbar** - Smooth scrolling navigation with active section highlighting
- ✅ **Modern UI/UX** - Clean, minimalistic design with dark/light mode toggle
- ✅ **Animated Landing Section** - Dynamic text animations and hero content
- ✅ **About Me Section** - Education, research interests, and technical skills with progress bars
- ✅ **Projects Section** - Filterable project cards with tags, tech stack, and GitHub links
- ✅ **Work Experience** - Timeline-based experience cards with detailed descriptions
- ✅ **Research & Publications** - LaTeX-style publication listings with abstracts
- ✅ **Contact Section** - Social links, email, and contact form
- ✅ **RAG Chatbot** - AI-powered assistant that answers questions about the portfolio
- ✅ **Scroll to Top** - Smooth scroll-to-top button
- ✅ **Resume Download** - Downloadable PDF resume functionality

### Technical Highlights
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React
- **Type Safety**: TypeScript
- **RAG System**: Client-side semantic search with knowledge base

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sudarshan-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **About Section** (`app/components/About.tsx`):
   - Update education details
   - Modify skills and proficiency levels
   - Adjust research interests

2. **Projects** (`app/components/Projects.tsx`):
   - Update project data in the `projects` array
   - Add/remove projects
   - Update GitHub and demo URLs

3. **Work Experience** (`app/components/WorkExperience.tsx`):
   - Modify the `experiences` array with your work history

4. **Publications** (`app/components/Research.tsx`):
   - Update the `publications` array with your research work

5. **Contact** (`app/components/Contact.tsx`):
   - Update social media links
   - Modify email address

6. **Knowledge Base** (`app/data/knowledgeBase.ts`):
   - Update entries to match your portfolio content
   - This powers the RAG chatbot

### Adding Your Resume

1. Place your resume PDF in the `public` folder as `resume.pdf`
2. The download button in the Contact section will automatically work

### Customizing Colors

The color scheme uses a blue-to-purple gradient. To customize:
- Update Tailwind classes in components (e.g., `from-blue-600 to-purple-600`)
- Modify the gradient colors in `app/globals.css`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Deploy automatically

### GitHub Pages

1. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d out"
}
```

3. Deploy:
```bash
npm run deploy
```

## Project Structure

```
sudarshan-portfolio/
├── app/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Chatbot.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── WorkExperience.tsx
│   ├── data/
│   │   └── knowledgeBase.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── resume.pdf (add your resume here)
└── package.json
```

## RAG Chatbot

The portfolio includes an AI-powered chatbot that uses Retrieval-Augmented Generation (RAG) to answer questions about your portfolio. The chatbot:

- Searches through a knowledge base of portfolio content
- Provides relevant answers based on semantic matching
- Shows source categories for transparency
- Handles queries about projects, research, experience, skills, and more

To enhance the chatbot:
1. Update `app/data/knowledgeBase.ts` with your actual content
2. For production, consider integrating with OpenAI API or other LLM services
3. Add vector embeddings for better semantic search

## Future Enhancements

- [ ] Integrate OpenAI API for more sophisticated chatbot responses
- [ ] Add project images and screenshots
- [ ] Implement contact form backend (e.g., Formspree, EmailJS)
- [ ] Add analytics (Google Analytics, Vercel Analytics)
- [ ] SEO optimization
- [ ] Add blog section
- [ ] Implement project detail pages
- [ ] Add testimonials section

## License

This project is open source and available under the MIT License.

## Contact

Sudarshan Chikkathimmaiah
- Email: sudarshan.chikkathimmaiah@sjsu.edu
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ using Next.js and Tailwind CSS
# Sudarshan-Portfolio
