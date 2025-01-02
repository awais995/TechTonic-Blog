import BlogCard from '../../components/BlogCard';
import { blogs } from '../../data/blogData';

export default function BlogsPage() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8">All Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}