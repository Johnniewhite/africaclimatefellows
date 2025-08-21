"use client";

import { ArrowLeft, Calendar, User, Tag, Clock } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "@/styles/wordpress-content.css";

interface Post {
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  categories: number[];
  tags: number[];
  author: number;
  _embedded?: {
    "wp:featuredmedia"?: [{
      source_url: string;
      alt_text?: string;
      caption?: { rendered: string };
      media_details?: {
        width: number;
        height: number;
      };
    }];
    "wp:term"?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
    author?: [{
      name: string;
      description: string;
      avatar_urls?: {
        "96": string;
      };
    }];
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
        
        // Process the content for better formatting
        data.content.rendered = processWordPressContent(data.content.rendered);
        data.title.rendered = decodeHTMLEntities(data.title.rendered);
        if (data.excerpt) {
          data.excerpt.rendered = decodeHTMLEntities(data.excerpt.rendered);
        }
        
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

  // Function to decode HTML entities
  function decodeHTMLEntities(text: string) {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    return textarea.value;
  }

  // Process WordPress content for better formatting
  function processWordPressContent(content: string) {
    // Remove \r\n characters
    content = content.replace(/\r\n/g, '');
    
    // Add WordPress block classes if missing
    content = content.replace(/<figure>/g, '<figure class="wp-block-image">');
    content = content.replace(/<blockquote>/g, '<blockquote class="wp-block-quote">');
    
    // Process image sources to use Next Image optimization where possible
    content = content.replace(
      /<img([^>]*?)src="([^"]+)"([^>]*?)>/g,
      (match, before, src, after) => {
        // Check if it's a WordPress upload
        if (src.includes('africaclimatefellows.com')) {
          return `<img${before}src="${src}"${after} loading="lazy">`;
        }
        return match;
      }
    );
    
    // Ensure proper spacing for paragraphs
    content = content.replace(/<\/p>\s*<p>/g, '</p>\n\n<p>');
    
    return content;
  }

  // Calculate reading time
  function calculateReadingTime(content: string) {
    const text = content.replace(/<[^>]*>/g, '');
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
  }

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

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const categories = post._embedded?.["wp:term"]?.[0] || [];
  const tags = post._embedded?.["wp:term"]?.[1] || [];
  const author = post._embedded?.author?.[0];
  const readingTime = calculateReadingTime(post.content.rendered);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900"
    >
      <article className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Posts
          </Link>
        </div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category: any) => (
                <span
                  key={category.id}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm rounded-full"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            {author && (
              <div className="flex items-center gap-2">
                {author.avatar_urls && (
                  <img
                    src={author.avatar_urls["96"]}
                    alt={author.name}
                    className="w-8 h-8 rounded-full"
                  />
                )}
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {author.name}
                </span>
              </div>
            )}
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readingTime} min read
            </span>
          </div>

          {/* Last Updated */}
          {post.modified && post.modified !== post.date && (
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-500 italic">
              Last updated: {new Date(post.modified).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          )}
        </motion.header>

        {/* Featured Image */}
        {featuredImage && (
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-5xl mx-auto mb-12"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={featuredImage.source_url}
                alt={featuredImage.alt_text || ''}
                className="w-full h-full object-cover"
              />
            </div>
            {featuredImage.caption?.rendered && (
              <figcaption
                className="mt-3 text-center text-sm text-gray-600 dark:text-gray-400 italic"
                dangerouslySetInnerHTML={{ __html: featuredImage.caption.rendered }}
              />
            )}
          </motion.figure>
        )}

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
            <div
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="h-4 w-4 text-gray-500" />
                {tags.map((tag: any) => (
                  <span
                    key={tag.id}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          {author && author.description && (
            <div className="mt-12 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <div className="flex items-start gap-4">
                {author.avatar_urls && (
                  <img
                    src={author.avatar_urls["96"]}
                    alt={author.name}
                    className="w-16 h-16 rounded-full"
                  />
                )}
                <div>
                  <h3 className="font-semibold text-lg mb-2">About {author.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {author.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> View All Posts
            </Link>
          </div>
        </motion.div>
      </article>
    </motion.main>
  );
}