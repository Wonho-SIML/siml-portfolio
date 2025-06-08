export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Wonho Seo. All rights reserved.</p>
        {/* <p className="text-sm mt-1">
          Built with Next.js & Tailwind CSS & Shadcn UI. Animated with Canvas
          API.
        </p> */}
      </div>
    </footer>
  );
}
