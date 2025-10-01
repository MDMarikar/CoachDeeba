import { getAllPostSlugs, getPostData } from '@/lib/blog';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths = await getAllPostSlugs();
  return paths.map(p => ({ slug: p.params.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await getPostData(params.slug);
    return {
      title: `${post.title} | CoachDeeba`,
      description: post.excerpt,
    };
  } catch (error) {
    return {
      title: 'Post Not Found',
    };
  }
}


export default async function BlogPostPage({ params }: BlogPostPageProps) {
  let post;
  try {
    post = await getPostData(params.slug);
  } catch (error) {
    notFound();
  }
  
  const postImage = PlaceHolderImages.find(p => p.id === post.imageId);

  return (
    <article className="container max-w-3xl mx-auto py-12 px-4 md:py-16 lg:py-20 animate-fade-in">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline sm:text-5xl text-primary mb-4">
          {post.title}
        </h1>
        <p className="text-muted-foreground">
          Posted by {post.author} on{' '}
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </header>

      {postImage && (
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={postImage.imageUrl}
            alt={post.title}
            data-ai-hint={postImage.imageHint}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div
        className="prose prose-lg max-w-none text-foreground/90 prose-headings:font-headline prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
