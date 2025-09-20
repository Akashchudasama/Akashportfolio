import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, Phone, MapPin, Github, Linkedin, 
  Send, MessageCircle, Calendar, Download
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "akashchudasama27@gmail.com",
      href: "mailto:akashchudasama27@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 99748 101014",
      href: "tel:+919974810141",
      color: "text-accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Junagadh, Gujarat, India",
      href: "https://maps.google.com/?q=Junagadh,Gujarat,India",
      color: "text-tech-green"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/akashchudasama",
      description: "Check out my code repositories and open source contributions",
      color: "hover:text-primary"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/akash-chudasama",
      description: "Connect with me for professional networking and opportunities",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, innovative projects, and potential collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <Card className="card-elevated border-border/50 bg-card/50 backdrop-blur-sm mb-12">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h3>
                    <p className="text-muted-foreground mb-6">
                      I'm currently open to new opportunities and always interested in 
                      discussing innovative projects. Feel free to reach out!
                    </p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                        <div className={`p-3 rounded-full bg-secondary ${contact.color}`}>
                          <contact.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground">{contact.label}</p>
                          <a 
                            href={contact.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`${contact.color} hover:underline transition-colors`}
                          >
                            {contact.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Current Status */}
                  <div className="p-4 rounded-lg bg-gradient-primary/10 border border-primary/20">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse"></div>
                      <Badge className="bg-tech-green text-background">
                        Available for Opportunities
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Currently seeking internships and full-time positions in Full Stack Development and AI
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-foreground text-center lg:text-left">Quick Actions</h4>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold tech-glow"
                      asChild
                    >
                      <a href="mailto:akashchudasama27@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Send Email
                      </a>
                    </Button>

                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      asChild
                    >
                      <a href="tel:+919974810141">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                      </a>
                    </Button>

                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download CV
                    </Button>
                  </div>

                  {/* Availability */}
                  <div className="text-center lg:text-left">
                    <div className="flex items-center space-x-2 justify-center lg:justify-start mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Response Time</span>
                    </div>
                    <p className="text-foreground font-semibold">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <Card key={index} className="card-elevated border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardContent className="p-6">
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group"
                  >
                    <div className={`p-4 rounded-full bg-secondary group-hover:bg-secondary/80 transition-colors`}>
                      <social.icon className={`h-8 w-8 text-muted-foreground group-${social.color} transition-colors`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">{social.description}</p>
                    </div>
                    <Send className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Final CTA */}
          <Card className="card-elevated border-primary/30 bg-gradient-primary/10 backdrop-blur-sm text-center">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 rounded-full bg-primary/20">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Ready to Start a Conversation?
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8"
                    asChild
                  >
                    <a href="mailto:akashchudasama27@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Let's Talk
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8"
                    asChild
                  >
                    <a href="https://linkedin.com/in/akash-chudasama" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;