import { BlogPostCard } from '@/components/blog/blog-post-card';
import { getSortedPostsData } from '@/lib/blog';

export const metadata = {
  title: 'Blog | CoachDeeba',
  description: 'Insights and articles on personal growth and life coaching.',
};

export default async function BlogPage() {
  const posts = await getSortedPostsData();

  return (
    <div className="container py-12 md:py-16 lg:py-20 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline sm:text-5xl text-primary">From My Desk</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          A collection of thoughts and insights on the journey of personal growth.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
