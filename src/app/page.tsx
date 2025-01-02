import BlogCard from '../components/BlogCard';
import { blogs } from '../data/blogData';

export default function Home() {
  const topBlogs = blogs.slice(0, 3);
  const latestBlogs = blogs.slice(3, 6);

  return (
    <div>
     
      <div className="bg-blue-500 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to TechTonic Blogs</h1>
        <p className="mt-4">Discover amazing content and insights.</p>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mt-8 mb-4">Top Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}