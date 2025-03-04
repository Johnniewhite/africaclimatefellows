import BlogPostClient from "./BlogPostClient";

interface Post {
  id: number;
}

export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://blog.africaclimatefellows.com/wp-json/wp/v2/posts?per_page=100"
    );
    const posts: Post[] = await response.json();
    
    return posts.map((post) => ({
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error("Error fetching posts for static params:", error);
    return [];
  }
}

export default function BlogPost() {
  return <BlogPostClient />;
}