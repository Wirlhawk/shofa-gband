import { Heart, Sparkles } from 'lucide-react';
import Sidebar from './Sidebar'
import {

  Music,
  Star,
} from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <div className="flex min-h-screen font-sans">
      <div className="flex min-h-screen bg-gradient-to-br from-pink-300 via-purple-200 to-pink-200  relative overflow-hidden p-4">
        {/* Floating decorative elements with improved animation */}
        <div className="absolute top-10 left-10 text-pink-500 animate-bounce">
          <Heart size={32} />
        </div>
        <div className="absolute top-20 right-20 text-purple-400 animate-pulse hidden sm:block">
          <Star size={28} />
        </div>
        <div className="absolute bottom-10 left-20 text-pink-400 animate-spin">
          <Music size={24} />
        </div>
        <div className="absolute bottom-20 right-10 text-purple-500 animate-bounce hidden sm:block">
          <Sparkles size={30} />
        </div>
        <div className="absolute top-1/3 left-1/4 text-pink-500 animate-pulse hidden md:block">
          <Star size={20} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-purple-400 animate-bounce hidden md:block">
          <Music size={24} />
        </div>

        {/* Additional floating elements for more cuteness */}
        <div className="absolute top-1/2 right-1/3 text-pink-600 animate-ping hidden sm:block">
          <Heart size={18} />
        </div>
        <div className="absolute bottom-1/2 left-1/3 text-purple-500 animate-pulse">
          <Sparkles size={22} />
        </div>

        {/* Background decoration bubbles with improved opacity and blur */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-gradient-to-r from-pink-400 to-pink-300 opacity-20 blur-sm hidden md:block"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-sm hidden md:block"></div>
        <div className="absolute top-2/3 left-10 w-16 h-16 rounded-full bg-pink-300 opacity-20 blur-sm"></div>
        <div className="absolute top-10 right-1/4 w-20 h-20 rounded-full bg-purple-300 opacity-20 blur-sm hidden md:block"></div>

        {/* Additional background elements */}
        <div className="absolute bottom-1/3 left-1/2 w-28 h-28 rounded-full bg-gradient-to-br from-purple-300 to-pink-200 opacity-20 blur-sm hidden lg:block"></div>
        <div className="absolute top-1/2 right-1/2 w-16 h-16 rounded-full bg-gradient-to-tl from-pink-400 to-purple-300 opacity-20 blur-sm hidden sm:block"></div>
      {/* </div> */}
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
