import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StoryPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the story data based on the slug here
  const storyTitle = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <article className="min-h-screen">
      {/* Story Header/Hero */}
      <div className="h-[60vh] relative flex items-center justify-center bg-[black] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
        
        {/* Placeholder for a cool WebGL or animated background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="w-[800px] h-[800px] bg-naavsoch-blue rounded-full blur-[120px] animate-pulse"></div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <Link href="/#stories" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Stories
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{storyTitle}</h1>
          <p className="text-xl text-naavsoch-gold">An interactive experience</p>
        </div>
      </div>

      {/* Story Content Area */}
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <div className="prose prose-invert lg:prose-xl mx-auto">
          <p className="lead text-2xl mb-12 text-foreground/80">
            This is a placeholder for the interactive storytelling format. Imagine scrolling down and elements fading in, 3D models rotating, or audio playing based on your position.
          </p>
          
          <p>
            The content here would be dynamically loaded from a CMS or local markdown files. 
            For Naavsoch Studio, this area is where the magic happens—where the ideas are truly uncaged.
          </p>
          
          <div className="my-16 h-64 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center italic text-foreground/50">
            Interactive Element Placeholder
          </div>
          
          <p>
            End of the preview.
          </p>
        </div>
      </div>
    </article>
  );
}
