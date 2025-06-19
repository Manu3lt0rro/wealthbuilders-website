import React from 'react';
import { Download, BookOpen, Video, Headphones, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import aiTechnology from '../assets/ai_technology_1.jpg';

const Resources = () => {
  const resources = [
    {
      icon: <Download className="w-8 h-8" />,
      title: 'AI Hustle Handbook',
      description: '24 proven AI side hustles you can start today',
      type: 'Free Download',
      cta: 'Download Now'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'The FAITH Code Book',
      description: 'Complete guide to building wealth with biblical principles',
      type: 'Coming Soon',
      cta: 'Get Notified'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Weekly Training Videos',
      description: 'Step-by-step tutorials on AI tools and strategies',
      type: 'Members Only',
      cta: 'Join WBU'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'WealthBuilders Podcast',
      description: 'Weekly insights on faith, finance, and AI',
      type: 'Free',
      cta: 'Listen Now'
    }
  ];

  const tools = [
    'ChatGPT Prompts for Business',
    'AI Content Creation Templates',
    'Financial Planning Spreadsheets',
    'Investment Tracking Tools',
    'Goal Setting Frameworks',
    'Scripture-Based Affirmations'
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Free Resources to Get You Started
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our library of free tools, guides, and training materials to begin 
            your journey toward financial freedom today
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Everything You Need to Start Building Wealth with AI
              </h3>
              <p className="text-muted-foreground mb-6">
                We believe in providing value upfront. That's why we've created a comprehensive 
                library of free resources to help you get started on your wealth-building journey, 
                even before you join our paid programs.
              </p>
            </div>

            {/* Resource Cards */}
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-lg card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      {resource.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{resource.title}</h4>
                        <span className="text-xs bg-accent text-white px-2 py-1 rounded">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{resource.description}</p>
                      <Button variant="outline" size="sm" className="text-sm">
                        {resource.cta}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <img 
              src={aiTechnology} 
              alt="AI Resources and Tools" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Tools Section */}
        <div className="bg-muted p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Free Tools & Templates</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <div key={index} className="bg-card p-4 rounded-lg text-center">
                <span className="text-sm font-medium">{tool}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="btn-primary px-8 py-3 font-semibold rounded-lg">
              Access All Free Tools
            </Button>
          </div>
        </div>

        {/* Featured Resource */}
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                🎯 Featured: AI Hustle Handbook
              </h3>
              <p className="text-muted-foreground mb-6">
                Our most popular free resource! This comprehensive guide reveals 24 proven AI side hustles 
                that you can start today, even with zero experience. Each hustle includes step-by-step 
                instructions, required tools, and income potential.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">24 proven AI side hustles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Step-by-step implementation guides</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Income potential for each hustle</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="text-sm">Required tools and resources</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-8 rounded-lg mb-6">
                <Download className="w-16 h-16 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">FREE</div>
                <div className="text-sm text-muted-foreground">Usually $47</div>
              </div>
              <Button className="btn-primary px-8 py-3 text-lg font-semibold rounded-lg w-full">
                Download Your Free Copy
                <Download className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                No email required • Instant download
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;

