"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Post {
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: [{
      source_url: string;
    }]
  };
}

export default function BlogPostClient() {
  const params = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(
          `https://blog.africaclimatefellows.com/wp-json/wp/v2/posts/${params.id}?_embed`
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchPost();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link
            href="/blog"
            className="text-green-600 hover:text-green-700 inline-flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-12"
    >
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <h1
            className="text-4xl font-bold mb-6"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          
          <div className="mb-8 text-sm text-gray-500">
            Published on {new Date(post.date).toLocaleDateString()}
          </div>

          {featuredImage && (
            <img
              src={featuredImage}
              alt=""
              className="w-full h-[400px] object-cover rounded-xl mb-8"
            />
          )}

          <div
            className="mt-8 prose-img:rounded-xl prose-img:my-8"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </motion.div>
      </article>
    </motion.main>
  );
}