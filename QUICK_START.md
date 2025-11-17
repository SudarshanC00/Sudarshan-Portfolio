# Quick Start Guide

## 🚀 Getting Started

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Customization Checklist

Before deploying, make sure to update:

- [ ] **Personal Information** in `app/components/About.tsx`
- [ ] **Projects** in `app/components/Projects.tsx` (update GitHub URLs, descriptions)
- [ ] **Work Experience** in `app/components/WorkExperience.tsx`
- [ ] **Publications** in `app/components/Research.tsx`
- [ ] **Contact Links** in `app/components/Contact.tsx` (LinkedIn, GitHub, Email)
- [ ] **Knowledge Base** in `app/data/knowledgeBase.ts` (for chatbot)
- [ ] **Resume PDF** - Place `resume.pdf` in `/public` folder
- [ ] **Metadata** in `app/layout.tsx` (SEO)

## 🎨 Features Implemented

✅ Responsive Navbar with smooth scrolling  
✅ Dark/Light mode toggle  
✅ Animated landing section  
✅ About Me with skills and education  
✅ Filterable Projects section  
✅ Work Experience timeline  
✅ Research & Publications  
✅ Contact form and social links  
✅ RAG Chatbot (AI assistant)  
✅ Scroll to top button  
✅ Resume download functionality  

## 📦 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### GitHub Pages
See README.md for detailed instructions

## 🔧 Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)

## 📝 Notes

- The RAG chatbot uses a client-side knowledge base. For production, consider integrating with OpenAI API.
- Project images are placeholders - add actual screenshots to `/public` folder
- Contact form is frontend-only - integrate with a service like Formspree or EmailJS for backend functionality

---

Happy coding! 🎉

