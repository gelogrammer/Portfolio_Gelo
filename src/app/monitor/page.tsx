"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Terminal, Clock, Download, ExternalLink, Phone, MessageSquare, Facebook } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "angelojohn0987@gmail.com",
    href: "mailto:angelojohn0987@gmail.com",
    description: "Send me an email",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-border"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+63 910 727 1463",
    href: "tel:+639107271463",
    description: "Give me a call",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-border"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "@gelogrammer",
    href: "https://github.com/gelogrammer",
    description: "Check my repositories",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-border"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Angelo John Calleja",
    href: "https://www.linkedin.com/in/angelo-john-calleja-81312a319/",
    description: "Connect professionally",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-border"
  },
  {
    icon: Facebook,
    title: "Facebook",
    value: "Angelo John Calleja",
    href: "https://www.facebook.com/0987kill/",
    description: "Connect socially",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-border"
  }
];

const quickLinks = [
  { label: "Download Resume", icon: Download, href: "https://www.canva.com/design/DAG-x0bdYeI/o7rsbGjAWtIRcf3VlrNmAQ/view", command: "wget ~/resume.pdf" },
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
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=angelojohn0987@gmail.com&su=${subject}&body=${body}`, '_blank');
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
            className="text-sm font-mono text-primary mb-2 inline-block"
          >
            $ ./connect.sh
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Open to DevOps, cloud, and platform engineering roles, and to freelance web projects.
          </p>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
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
            <Card className="border-border bg-card ">
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
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-colors"
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition-colors"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                    <Link href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block rounded-lg">
                      <Card className={`border ${method.borderColor} ${method.bgColor} hover:border-primary/40 transition-all duration-300 cursor-pointer group`}>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 ${method.bgColor} rounded-lg ${method.color} transition-colors`}>
                              <method.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-muted-foreground mb-0.5">{method.description}</p>
                              <p className="text-sm font-medium text-foreground break-words">
                                {method.value}
                              </p>
                            </div>
                            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
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
              <Card className="border-border bg-card ">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Taguig, Philippines
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
              <Card className="border-border bg-card ">
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
                <Link href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
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
            <span className="terminal-cursor" aria-hidden="true" />
          </p>
        </motion.div>
      </div>
    </main>
  );
}
