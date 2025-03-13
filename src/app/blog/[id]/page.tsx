import BlogPostClient from './BlogPostClient';

// Make this page static for export
export const dynamic = 'force-static';

// This function is required for static site generation
export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://blog.africaclimatefellows.com/wp-json/wp/v2/posts"
    );
    const posts = await response.json();
    
    return posts.map((post: { id: number }) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching posts for static params:", error);
    // Return at least one ID to prevent build errors
    return [{ id: '1' }];
  }
}

export default function BlogPost() {
  return <BlogPostClient />;
}