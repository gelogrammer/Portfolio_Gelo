"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Terminal, Clock, Download, ExternalLink, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "angelojohn0987@gmail.com",
    href: "mailto:angelojohn0987@gmail.com",
    description: "Send me an email",
    color: "text-neon-green",
    bgColor: "bg-neon-green/10",
    borderColor: "border-neon-green/20"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+63 910 727 1463",
    href: "tel:+639107271463",
    description: "Give me a call",
    color: "text-neon-cyan",
    bgColor: "bg-neon-cyan/10",
    borderColor: "border-neon-cyan/20"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "@gelogrammer",
    href: "https://github.com/gelogrammer",
    description: "Check my repositories",
    color: "text-neon-magenta",
    bgColor: "bg-neon-magenta/10",
    borderColor: "border-neon-magenta/20"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Angelo Calleja",
    href: "https://linkedin.com/in/yourusername",
    description: "Connect professionally",
    color: "text-neon-yellow",
    bgColor: "bg-neon-yellow/10",
    borderColor: "border-neon-yellow/20"
  }
];

const quickLinks = [
  { label: "Download Resume", icon: Download, href: "#", command: "wget ~/resume.pdf" },
  { label: "View Projects", icon: ExternalLink, href: "/projects", command: "cd ~/projects" },
  { label: "Read About Me", icon: Terminal, href: "/about", command: "cat ~/about.txt" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:angelojohn0987@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-mono text-primary/80 tracking-wider uppercase mb-2 inline-block"
          >
            $ ./connect.sh
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Have a project in mind? Let's discuss how we can work together to build something amazing
          </p>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-sm font-medium text-primary">Available for Opportunities</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Send a Message</h2>
                    <p className="text-sm text-muted-foreground">I'll respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 font-mono text-primary">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-mono"
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 font-mono text-primary">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-mono"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 font-mono text-primary">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none font-mono"
                      required
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>

                {/* Terminal Output */}
                <div className="mt-6 p-4 bg-black/40 rounded-lg border border-primary/10 font-mono text-xs">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <Terminal className="w-3 h-3" />
                    <span>Terminal Output:</span>
                  </div>
                  <div className="space-y-1 text-muted-foreground">
                    <div>$ initializing contact form...</div>
                    <div>$ awaiting user input...</div>
                    <div className="text-neon-green">✓ ready to send message</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-primary">$</span>
                <span className="font-mono">contact_info</span>
              </h3>
              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    onMouseEnter={() => setHoveredMethod(method.title)}
                    onMouseLeave={() => setHoveredMethod(null)}
                  >
                    <Link href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined}>
                      <Card className={`border ${method.borderColor} ${method.bgColor} hover:border-primary/40 transition-all duration-300 cursor-pointer group`}>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 ${method.bgColor} rounded-lg ${method.color} group-hover:scale-110 transition-transform`}>
                              <method.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-muted-foreground mb-0.5">{method.description}</p>
                              <p className={`text-sm font-medium truncate ${method.color}`}>
                                {method.value}
                              </p>
                            </div>
                            <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Zone V Libon, Albay<br />
                        Philippines
                      </p>
                      <Badge variant="outline" className="text-xs">
                        Remote Available
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Card className="border-primary/10 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Response Time</h4>
                      <p className="text-sm text-muted-foreground">
                        Usually within <span className="text-primary font-medium">24 hours</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Links Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="terminal-box p-6"
        >
          <div className="flex items-center gap-2 mb-4 text-primary">
            <Terminal className="w-4 h-4" />
            <span className="font-mono text-sm font-bold">QUICK_LINKS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <Link href={link.href}>
                  <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <link.icon className="w-4 h-4 text-primary" />
                        <span className="font-medium text-sm">{link.label}</span>
                      </div>
                      <div className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        $ {link.command}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">$</span> Looking forward to hearing from you! 
            <span className="text-primary animate-pulse">_</span>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
