# Greater Lafayette Area Diving Website

A professional diving website built with Next.js, Tailwind CSS, and shadcn/ui components. This website showcases Greater Lafayette Area Diving's programs, coaching staff, and achievements in springboard diving.

## Features

- **Home Page**: Hero section highlighting diving results and program overview
- **Diving Groups**: Detailed information about all diving programs and levels
- **Coaching Staff**: Profiles of all coaches with their roles and responsibilities
- **Results Page**: Comprehensive display of diving achievements and statistics
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Navy & Gold Theme**: Custom color scheme matching the diving team's colors

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom color variables
- **Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gladiving
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

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx          # Home page
│   ├── groups/           # Diving groups page
│   ├── coaches/          # Coaching staff page
│   ├── results/          # Results and achievements page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles with custom colors
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── navigation.tsx    # Main navigation component
└── lib/                  # Utility functions
    └── utils.ts          # shadcn/ui utilities
```

## Custom Colors

The website uses a custom navy and gold color scheme defined in CSS variables:

- `--navy`: Primary navy color for backgrounds and text
- `--gold`: Primary gold color for accents and highlights
- `--navy-light`: Lighter navy for hover states
- `--gold-light`: Lighter gold for hover states

## Diving Programs

### Competitive Teams
- **Team**: Elite divers training 3-5 days/week for national competitions
- **Pre Team**: Transition program from lessons to competitive diving
- **Mini Gladiators**: 9 and under divers developing competitive skills

### Recreational Programs
- **High School**: Preparation for high school diving season
- **Lessons**: 8-level progressive program for beginners

## Coaching Staff

- **Deana Sotelo**: Owner/Head Coach
- **Tom Huynh**: Team Coach
- **Haley Bunnell**: Pre Team/High School Coach
- **Caitlin Johnson**: Mini Gladiators/Lessons Coach
- **Brandon Johnson**: Lessons Coach

## High School Results

- **39 Sectional Champions**
- **102 Regional Champions**
- **38 State Qualifiers**

## Deployment

This website is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and build the project
3. Custom domain can be configured in Vercel dashboard

## Customization

### Adding Headshots
Replace the placeholder headshot areas in the coaches page with actual images:

```tsx
// In src/app/coaches/page.tsx
<div className="mx-auto w-32 h-32 rounded-full mb-4 overflow-hidden">
  <Image
    src="/coaches/deana-sotelo.jpg"
    alt="Deana Sotelo"
    width={128}
    height={128}
    className="w-full h-full object-cover"
  />
</div>
```

### Updating Content
All content is stored in component files and can be easily modified:
- Program descriptions in `src/app/groups/page.tsx`
- Coach information in `src/app/coaches/page.tsx`
- Results data in `src/app/results/page.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to Greater Lafayette Area Diving.

## Contact

For questions about the website or diving programs, contact Greater Lafayette Area Diving directly.
