"use client"
import { notFound } from 'next/navigation';
import { blogs } from '../../../data/blogData';
import Image from 'next/image';
import CommentsSection from '@/components/CommentsSection';


interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blog = blogs.find((b) => b.id === parseInt(params.slug));
  if (!blog) {
    notFound();
  }
  const userId = "user123"; // Set this dynamically based on the logged-in user
  return (
    <div>
  
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <Image src={blog.image} alt={blog.title} width={1080} height={1080} className="w-72 h-80 object-cover mb-4" />
        <p className="text-gray-700">{blog.content}</p>
        {/* Comments Section */}
        <CommentsSection postId={blog.id.toString()} userId={userId} />
      </div>
    </div>
  );
}