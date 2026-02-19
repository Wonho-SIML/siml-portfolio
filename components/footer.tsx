export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-neutral-800/50 mt-10">
      <div className="max-w-6xl mx-auto text-center text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Wonho Seo. All rights reserved.</p>
        {/* <p className="text-sm mt-1">
          Built with Next.js & Tailwind CSS & Shadcn UI. Animated with Canvas
          API.
        </p> */}
      </div>
    </footer>
  );
}
