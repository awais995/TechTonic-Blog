import Link from 'next/link';
import { Blog } from '../data/blogData';
import Image from 'next/image';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <Image src={blog.image} alt={blog.title} width={700} height={600} className="w-full h-80 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.description}</p>
        <Link href={`/blogs/${blog.id}`} className="text-blue-600 hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
}