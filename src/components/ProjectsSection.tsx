import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Users, FileText, Mic } from "lucide-react";

const ProjectsSection = () => {
const projects = [
    {
      title: "Acadexa - Student Management System",
      description: "Comprehensive student management platform designed for educational institutions. Features inquiry management, attendance tracking, and academic report generation with a responsive admin interface.",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10",
      technologies: ["HTML5", "CSS3", "JavaScript", "SQL", "Responsive Design"],
      liveLink: "http://acadexa.free.nf",
      features: [
        "Student inquiry management system",
        "Automated attendance tracking",
        "Academic report generation",
        "Responsive admin dashboard",
        "Real-time data management"
      ]
    },
    {
      title: "AIMeDIYBuddy - Medical Document Q&A",
      description: "AI-powered application enabling users to upload medical documents (PDF/DOCX/TXT) and receive intelligent, context-based answers. Implements advanced document parsing and LLM integration.",
      icon: FileText,
      color: "text-accent",
      bgColor: "bg-accent/10",
      technologies: ["Python", "Streamlit", "RAG", "Vector DB", "LLM", "Document Processing"],
      liveLink: "https://aimediybuddy.streamlit.app/",
      githubLink: "https://github.com/akashchudasama/AIMeDIYBuddy",
      features: [
        "Multi-format document upload support",
        "Context-aware AI responses",
        "Vector embeddings for accuracy",
        "Medical terminology understanding",
        "Interactive chat interface"
      ]
    },
    {
      title: "VoiceLens - Voice Recognition System",
      description: "Advanced voice comparison application that analyzes two voice recordings to determine speaker similarity. Uses sophisticated algorithms including Cosine similarity and DTW for accurate verification.",
      icon: Mic,
      color: "text-tech-green",
      bgColor: "bg-tech-green/10",
      technologies: ["Python", "Streamlit", "Librosa", "Machine Learning", "Audio Processing"],
      liveLink: "https://voicelens.streamlit.app/",
      githubLink: "https://github.com/akashchudasama/VoiceMatcher",
      features: [
        "Voice similarity analysis",
        "Cosine similarity algorithm",
        "Dynamic Time Warping (DTW)",
        "Combined scoring system",
        "Real-time audio processing"
      ]
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive hospital management platform that streamlines the process between incharge departments and medicine suppliers. Features demand management, inventory tracking, and automated supplier communication.",
      icon: Users,
      color: "text-tech-orange",
      bgColor: "bg-tech-orange/10",
      technologies: ["Python", "Django", "PostgreSQL", "REST API", "Responsive Design"],
      features: [
        "Department demand management",
        "Medicine supplier integration",
        "Automated inventory tracking",
        "Real-time communication system",
        "Comprehensive reporting dashboard"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing full-stack development and AI integration expertise
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-elevated border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-full ${project.bgColor} ${project.color}`}>
                        <project.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      {project.liveLink && (
                        <Button asChild className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground text-lg">Key Features:</h4>
                    <div className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 ${project.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="card-elevated border-primary/30 bg-gradient-primary/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interested in collaborating?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on innovative projects and contribute to meaningful solutions.
              </p>
              <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;