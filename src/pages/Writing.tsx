import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/Tag";
import { Input } from "@/components/ui/input";
import { articles } from "@/data/articles";
import { Calendar, ExternalLink, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";

export default function Writing() {
  const [searchQuery, setSearchQuery] = useState("");

  const sortedArticles = useMemo(() => {
    let filtered = [...articles].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    if (!searchQuery.trim()) {
      return filtered;
    }

    // Split search query into individual words and apply AND logic
    const searchTerms = searchQuery.toLowerCase().split(/\s+/).filter(term => term.length > 0);

    filtered = filtered.filter(article => {
      // Check if ALL search terms match (AND logic)
      return searchTerms.every(term => {
        // Check title
        if (article.title.toLowerCase().includes(term)) return true;

        // Check tags
        if (article.tags.some(tag => tag.toLowerCase().includes(term))) return true;

        // Check publication
        if (article.publication?.toLowerCase().includes(term)) return true;

        // Check date (month and year)
        const date = new Date(article.date);
        const monthName = date.toLocaleDateString("en-US", { month: "long" }).toLowerCase();
        const monthNumber = String(date.getMonth() + 1).padStart(2, "0");
        const year = String(date.getFullYear());

        if (monthName.includes(term) || monthNumber.includes(term) || year.includes(term)) {
          return true;
        }

        return false;
      });
    });

    return filtered;
  }, [searchQuery]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Writing - Marius Obert</title>
        <meta name="description" content="Articles and blog posts by Marius Obert about web development, TypeScript, React, and software engineering." />
      </Helmet>
      
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Writing</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thoughts on web development, software engineering, and building great products. 
              Published across various platforms.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="max-w-4xl mx-auto mb-8 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles by title, publication, tag, month, or year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
              />
              {searchQuery && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                  {sortedArticles.length} / {articles.length}
                </div>
              )}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedArticles.map((article, index) => (
              <a
                key={article.externalUrl}
                href={article.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full p-6 hover-lift hover-glow transition-all duration-300">
                  {/* Publication & Language Badges */}
                  <div className="flex items-center justify-between mb-2">
                    {article.publication && (
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {article.publication}
                      </span>
                    )}
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full border border-border bg-muted text-muted-foreground ml-auto">
                      {article.language === "en" ? "🇬🇧 EN" : "🇩🇪 DE"}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  
                  {/* Date */}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <Tag key={tag} size="sm">{tag}</Tag>
                    ))}
                  </div>
                  
                  {/* Read Link */}
                  <div className="flex items-center gap-1 text-sm text-primary font-medium mt-auto">
                    {article.isBook ? "Buy book" : "Read article"}
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
