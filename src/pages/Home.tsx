import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SocialIcons } from "@/components/SocialIcons";
import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Marius Obert - Developer, Speaker, Writer</title>
        <meta name="description" content="Developer Evangelist, Web Developer, Speaker, and Author. Building great software and sharing knowledge." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 gradient-bg opacity-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        {/* Content */}
        <div className="container relative z-10 py-12 md:py-24">
          <Card className="max-w-2xl mx-auto p-8 md:p-12 glass animate-fade-in-up">
            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full gradient-bg p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl md:text-5xl font-bold gradient-text">
                    <img src="/Marius.jpg" alt="Marius Obert" className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
                {/* <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-success rounded-full border-4 border-card" /> */}
              </div>
            </div>

            {/* Name & Location */}
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Marius Obert</h1>
              <div className="flex items-center justify-center gap-1 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="city text-sm">Munich, Germany</span>
              </div>
            </div>

            {/* Titles */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["Developer Evangelist", "Software Engineer", "Speaker", "Author", "Trainer"].map((title) => (
                <span
                  key={title}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {title}
                </span>
              ))}
            </div>

            {/* Bio */}
            <p className="text-center text-muted-foreground mb-8 leading-relaxed">
              My passion is exploring the latest communication technologies
              &mdash; and, even more, sharing my knowledge and learning from
              others. Originally from the
              <Link target="_blank" to="https://www.twitch.tv/blackforest_wildlife"> Black Forest </Link>
              in Germany, I started my software development career as a UI
              developer in Silicon Valley, where I discovered my love for web
              technologies, especially JavaScript and the entire Node.js
              ecosystem.
            </p>  <p className="text-center text-muted-foreground mb-8 leading-relaxed">
              After countless creative (and sometimes
              <a
                href="https://giphy.com/gifs/frustrated-annoyed-programming-yYSSBtDgbbRzq"
                target="_blank"
                rel="noopener noreferrer"
              > <em>frustrating</em></a>) battles with CSS, I relocated to Munich, where I now work as a
              Developer Evangelist at Twilio. In this role, I inspire and empower
              developers around the world to build AI-infused apps with
              outstanding customer engagement. I've also spent nearly a decade
              working on enterprise frontend development and even wrote a book on
              the topic.
            </p>  <p className="text-center text-muted-foreground mb-8 leading-relaxed">
              Whether on stage, in workshops, or through hands-on prototypes, I love exchanging ideas with fellow developers and pushing the boundaries of what's possible. When I'm not doing that, I dive into the world of Web 3.0 and AI — always on the lookout for the next exciting technology.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center mb-6">
              <SocialIcons iconSize={22} />
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button asChild size="lg" className="gap-2 hover-lift">
                <a href="mailto:contact@iobert.me">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>
    </Layout>
  );
}
