import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/Tag";
import { coding } from "@/data/coding";
import { Github, ExternalLink, CheckCircle, Archive, User } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Coding() {
  return (
    <Layout>
      <Helmet>
        <title>Coding Projects - Marius Obert</title>
        <meta name="description" content="Open source projects and side projects by Marius Obert. Developer tools, React components, and more." />
      </Helmet>
      
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Coding Projects</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A collection of open source projects and side projects I've built. 
              From developer tools to web applications.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coding.map((project, index) => (
              <Card 
                key={project.githubUrl} 
                className="flex flex-col p-6 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Status & Role Badges */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {project.status === "active" ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-xs font-medium text-success uppercase tracking-wider">Active</span>
                      </>
                    ) : (
                      <>
                        <Archive className="w-4 h-4 text-muted-foreground" />
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Archived</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground capitalize">{project.role.join(" & ")}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.map((tech) => (
                    <Tag key={tech} variant="primary" size="sm">{tech}</Tag>
                  ))}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.map((tag) => (
                    <Tag key={tag} size="sm">{tag}</Tag>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-2 mt-auto pt-4 border-t border-border">
                  <Button asChild variant="outline" size="sm" className="flex-1 gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button asChild size="sm" className="flex-1 gap-2">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
