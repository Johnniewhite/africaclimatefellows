"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: [{
      source_url: string;
    }]
  };
}

interface BlogSectionProps {
  showSearch?: boolean;
  showCategories?: boolean;
  postsToShow?: number;
  title?: string;
  subtitle?: string;
}

export default function BlogSection({ 
  showSearch = false, 
  showCategories = false,
  postsToShow = 6,
  title = "Latest Insights",
  subtitle = "Explore our latest articles on climate action and environmental justice"
}: BlogSectionProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryMap, setCategoryMap] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        if (showCategories) {
          const categoriesResponse = await fetch(
            "https://blog.africaclimatefellows.com/wp-json/wp/v2/categories"
          );
          const categoriesData = await categoriesResponse.json();
          
          const categoryMapping: Record<number, string> = {};
          categoriesData.forEach((category: { id: number; name: string }) => {
            categoryMapping[category.id] = category.name;
          });
          setCategoryMap(categoryMapping);
          setCategories(["All", ...categoriesData.map((cat: { name: string }) => cat.name)]);
        }

        const postsResponse = await fetch(
          "https://blog.africaclimatefellows.com/wp-json/wp/v2/posts?_embed&per_page=" + postsToShow
        );
        const postsData = await postsResponse.json();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [showCategories, postsToShow]);

  const filteredPosts = posts.filter(post => {
    const postCategories = post.categories.map(catId => categoryMap[catId] || "");
    const matchesCategory =
      selectedCategory === "All" || postCategories.includes(selectedCategory);
    const matchesSearch =
      !showSearch || searchQuery === "" ||
      post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.rendered.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-foreground/80"
          >
            {subtitle}
          </motion.p>
        </div>

        {(showSearch || showCategories) && (
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            {showCategories && (
              <div className="flex flex-wrap gap-3">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-green-600 text-white"
                        : "bg-green-100 text-green-800 hover:bg-green-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}

            {showSearch && (
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"}
                      alt=""
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {categoryMap[post.categories[0]] || "Uncategorized"}
                      </span>
                      <span className="mx-2 text-foreground/30">•</span>
                      <span className="text-sm text-foreground/60">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 
                      className="text-xl font-bold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div 
                      className="text-foreground/70 mb-4 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-lg text-foreground/60 py-12">
              No articles found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}