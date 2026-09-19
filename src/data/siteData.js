import { Leaf, Paintbrush, Ruler, ShieldCheck } from 'lucide-react'

export const siteData = {
  company: { name: 'Northline Studio', tagline: 'Thoughtful spaces. Built to last.', description: 'A small, hands-on design and build studio creating considered outdoor spaces for the way people actually live.', phone: '(555) 014-8820', email: 'hello@northlinestudio.com', address: '18 Willow Street, Portland, OR', serviceArea: 'Serving Portland and the surrounding Willamette Valley', hours: 'Mon–Fri, 8:00am–5:00pm' },
  socialLinks: [{ label: 'Instagram', href: 'https://instagram.com' }, { label: 'Houzz', href: 'https://houzz.com' }],
  navigation: [{ label: 'Services', path: '/services' }, { label: 'Projects', path: '/projects' }, { label: 'About', path: '/about' }],
  theme: { accent: '#e7ad48', ink: '#193b38', paper: '#f5f1ea' },
  services: [
    { title: 'Landscape design', description: 'A clear, practical plan that brings your property and priorities into focus.', icon: Leaf, image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85' },
    { title: 'Outdoor living', description: 'Comfortable, welcoming spaces for slow mornings, long dinners, and everything between.', icon: Paintbrush, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85' },
    { title: 'Build & installation', description: 'Skilled, tidy construction with thoughtful materials and a finish that feels right.', icon: Ruler, image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=85' },
    { title: 'Seasonal care', description: 'Ongoing care plans that keep your investment healthy, beautiful, and ready to enjoy.', icon: ShieldCheck, image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=85' },
  ],
  projects: [
    { id: 'cedar-ridge', title: 'Cedar Ridge Retreat', category: 'Full landscape design', location: 'West Linn, OR', description: 'A layered garden and outdoor kitchen designed around the rhythm of family weekends.', image: 'https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=1200&q=85' },
    { id: 'alder-courtyard', title: 'Alder Courtyard', category: 'Outdoor living', location: 'Northeast Portland', description: 'A compact, light-filled courtyard that turns a narrow footprint into a daily escape.', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85' },
    { id: 'oak-street', title: 'Oak Street Garden', category: 'Build & installation', location: 'Lake Oswego, OR', description: 'A restrained planting palette and warm cedar details give this garden a quiet confidence.', image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=1200&q=85' },
  ],
  testimonials: [{ name: 'Mara & James', role: 'Homeowners, Cedar Mill', testimonial: 'Northline listened carefully, solved problems before we knew they existed, and gave us a garden that feels like it has always belonged here.' }, { name: 'Lena Ortiz', role: 'Homeowner, Sellwood', testimonial: 'The process was calm, clear, and genuinely enjoyable. Every detail feels intentional without feeling precious.' }],
  about: { title: 'Good work starts with paying attention.', paragraphs: ['Northline Studio is a small design and build practice with a simple belief: the best spaces are the ones that make everyday life feel a little more open.', 'We combine thoughtful design, durable materials, and practical project management to create outdoor spaces that settle naturally into their surroundings. Our team stays close to every project from first conversation to final planting.'], image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85' },
}