import React from 'react';
import { Book, Zap, Shield, Cpu, Heart } from 'lucide-react';
import { Button } from './ui/button';
import faithCodeFramework from '../assets/faith_code_framework.png';

const Solution = () => {
  const faithElements = [
    {
      letter: 'F',
      title: 'Foundation',
      subtitle: 'Build on unshakeable biblical principles',
      description: '"Unless the Lord builds the house, the builders labor in vain." Every strategy we teach is rooted in timeless wisdom that has created wealth for generations.',
      icon: <Book className="w-6 h-6" />,
      color: 'bg-primary'
    },
    {
      letter: 'A',
      title: 'Action',
      subtitle: 'Take consistent, purposeful steps forward',
      description: 'Faith without works is dead. We don\'t just teach theory - we give you daily action steps that move you closer to your goals.',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-accent'
    },
    {
      letter: 'I',
      title: 'Integrity',
      subtitle: 'Never compromise your values for quick profits',
      description: 'We\'d rather lose a sale than twist the truth. Every strategy we share passes the "sleep well at night" test.',
      icon: <Shield className="w-6 h-6" />,
      color: 'bg-secondary'
    },
    {
      letter: 'T',
      title: 'Technology',
      subtitle: 'Leverage AI tools ethically and effectively',
      description: 'Technology is a tool for stewardship, not exploitation. We show you how to use AI to serve others while building wealth.',
      icon: <Cpu className="w-6 h-6" />,
      color: 'bg-accent'
    },
    {
      letter: 'H',
      title: 'Heart',
      subtitle: 'Keep family and faith at the center',
      description: 'Wealth without purpose is meaningless. Everything we do is designed to strengthen your family and honor God.',
      icon: <Heart className="w-6 h-6" />,
      color: 'bg-primary'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Introducing The FAITH Code: Your Blueprint for Ethical AI Wealth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The proven system that's helped hundreds of families build sustainable income streams 
            while staying true to their values
          </p>
          <p className="text-lg max-w-4xl mx-auto">
            After 25 years as a financial professional and witnessing too many people lose everything 
            to fraudulent schemes, I developed The FAITH Code - a biblical approach to building wealth 
            with AI that actually works.
          </p>
        </div>

        {/* FAITH Framework Visual */}
        <div className="flex justify-center mb-16">
          <div className="max-w-2xl">
            <img 
              src={faithCodeFramework} 
              alt="The FAITH Code Framework" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* FAITH Elements */}
        <div className="space-y-12 mb-16">
          {faithElements.map((element, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Icon and Letter */}
              <div className="flex-shrink-0">
                <div className={`w-24 h-24 ${element.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  <span className="text-3xl font-bold">{element.letter}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <div className={`p-2 ${element.color} rounded-lg text-white`}>
                    {element.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{element.title}</h3>
                </div>
                <p className="text-lg font-semibold text-muted-foreground mb-3">
                  {element.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {element.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build Wealth the Right Way?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of families who have discovered The FAITH Code approach to ethical AI wealth building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-3 text-lg font-semibold rounded-lg">
              Start Your 7-Day Free Trial
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg font-semibold rounded-lg">
              Learn More About The FAITH Code
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

