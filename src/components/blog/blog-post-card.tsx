import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';

interface BlogPostCardProps {
  post: Omit<BlogPost, 'content'>;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const postImage = PlaceHolderImages.find(p => p.id === post.imageId);

  return (
    <Card className="flex flex-col overflow-hidden h-full">
      {postImage && (
        <div className="relative aspect-video">
          <Image
            src={postImage.imageUrl}
            alt={post.title}
            data-ai-hint={postImage.imageHint}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-2xl leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 h-auto text-primary">
          <Link href={`/blog/${post.slug}`}>
            Read More &rarr;
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
