import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tag } from "@/components/Tag";
import { talks } from "@/data/talks";
import { Calendar, MapPin, Play, Mail, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState, useMemo } from "react";

export default function Speaking() {
  const [searchQuery, setSearchQuery] = useState("");

  const sortedTalks = useMemo(() => {
    let filtered = [...talks].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    if (!searchQuery.trim()) {
      return filtered;
    }

    // Split search query into individual words and apply AND logic
    const searchTerms = searchQuery.toLowerCase().split(/\s+/).filter(term => term.length > 0);

    filtered = filtered.filter(talk => {
      // Check if ALL search terms match (AND logic)
      return searchTerms.every(term => {
        // Check title
        if (talk.title.toLowerCase().includes(term)) return true;

        // Check abstract
        if (talk.abstract.toLowerCase().includes(term)) return true;

        // Check conference/event name
        if (talk.event.toLowerCase().includes(term)) return true;

        // Check location (city and country)
        if (talk.location.toLowerCase().includes(term)) return true;

        // Check tags
        if (talk.tags.some(tag => tag.toLowerCase().includes(term))) return true;

        // Check language
        if (talk.language.includes(term)) return true;

        // Check date (month and year)
        const date = new Date(talk.date);
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
        <title>Speaking - Marius Obert</title>
        <meta name="description" content="Past speaking engagements and conference talks by Marius Obert. Available for keynotes, workshops, and technical sessions." />
      </Helmet>
      
      {/* Hero Banner */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Speaking</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I love sharing knowledge at conferences, meetups, and corporate events. 
              Available for keynotes, technical sessions, and hands-on workshops.
            </p>
            <Button asChild size="lg" className="gap-2 hover-lift">
              <a href="mailto:contact@iobert.me?subject=Speaking%20Inquiry">
                <Mail className="w-4 h-4" />
                Invite Me to Speak
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Talks Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          {/* Filter Bar */}
          <div className="max-w-4xl mx-auto mb-8 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search talks by title, conference, location, year, month, language, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
              />
              {searchQuery && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground">
                  {sortedTalks.length} / {talks.length}
                </div>
              )}
            </div>
          </div>

          {/* Talks Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedTalks.map((talk, index) => (
              <Card 
                key={`${talk.title}-${talk.date}`}
                className="flex flex-col p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Conference & Language */}
                <div className="flex items-center justify-between mb-2">
                  {talk.eventUrl ? (
                    <a
                      href={talk.eventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-primary uppercase tracking-wider hover:underline"
                    >
                      {talk.event}
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {talk.event}
                    </span>
                  )}
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full border border-border bg-muted text-muted-foreground ml-2">
                    {talk.language === "en" ? "🇬🇧 EN" : "🇩🇪 DE"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mt-2 mb-3 line-clamp-2">
                  {talk.title}
                </h3>

                {/* Location & Date */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="line-clamp-1">{talk.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    <span>{formatDate(talk.date)}</span>
                  </div>
                </div>

                {/* Abstract */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-1">
                  {talk.abstract}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {talk.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag} size="sm">{tag}</Tag>
                  ))}
                </div>

                {/* Recording Link */}
                {talk.recordingUrl && (
                  <div className="mt-auto pt-4 border-t border-border">
                    <a
                      href={talk.recordingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                    >
                      <Play className="w-4 h-4" />
                      {talk.isPodcast ? "Listen to podcast" : "Watch Recording"}
                    </a>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
