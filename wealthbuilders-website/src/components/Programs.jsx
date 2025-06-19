import React from 'react';
import { GraduationCap, Target, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Programs = () => {
  const programs = [
    {
      id: 'university',
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'WealthBuilders University',
      subtitle: 'Transform Your Financial Future in 30 Days',
      description: 'Join our flagship membership community where we fix the leaks and grow the flow.',
      price: '$27',
      originalPrice: '$47',
      period: '/month',
      badge: 'Most Popular',
      badgeColor: 'bg-primary',
      features: [
        'Weekly $100 AI Hustle Challenges',
        'Live Hustle Labs + income systems',
        'Ultimate WealthBuilders Bootcamp',
        'Finance & Risk Mastery training',
        'Weekly Q&A calls + direct access to Manu',
        'Private community of faith-led builders',
        '40% affiliate commissions'
      ],
      guarantee: '7-day free trial, cancel anytime',
      cta: 'Start Your Free Trial',
      highlight: true
    },
    {
      id: 'challenge',
      icon: <Target className="w-8 h-8" />,
      title: 'AI Hustle Challenge',
      subtitle: 'Build Your First AI Income Stream in 7 Days',
      description: 'Our signature challenge that\'s helped hundreds of people create their first AI income stream.',
      price: 'FREE',
      originalPrice: null,
      period: '',
      badge: 'Best for Beginners',
      badgeColor: 'bg-accent',
      features: [
        'Daily action steps to build your AI business',
        'Live coaching and community support',
        'Proven templates and frameworks',
        'Real case studies and examples',
        'Direct access to our private community'
      ],
      guarantee: 'No experience required',
      cta: 'Join Free Challenge',
      highlight: false
    },
    {
      id: 'coaching',
      icon: <Users className="w-8 h-8" />,
      title: '1:1 Coaching',
      subtitle: 'Get Personal Guidance from Manu',
      description: 'Work directly with Manu to create your custom AI wealth-building strategy.',
      price: 'Starting at $250',
      originalPrice: null,
      period: '',
      badge: 'Premium',
      badgeColor: 'bg-secondary',
      features: [
        'Personal strategy session with Manu',
        'Custom AI implementation plan',
        'Ongoing support and accountability',
        'Access to exclusive resources',
        'Priority community access'
      ],
      guarantee: '100% satisfaction guarantee',
      cta: 'Book Strategy Call',
      highlight: false
    }
  ];

  const stats = [
    { number: '78%', label: 'Complete All 7 Days' },
    { number: '45%', label: 'Generate Income During Challenge' },
    { number: '62%', label: 'Continue to WBU' },
    { number: '89%', label: 'Report Increased AI Confidence' }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your Path to Financial Freedom
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three proven ways to start building wealth with AI today - all rooted in The FAITH Code principles
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className={`relative bg-card rounded-lg shadow-lg p-8 card-hover ${
                program.highlight ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {/* Badge */}
              {program.badge && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${program.badgeColor} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                  {program.badge}
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-lg text-primary">
                  {program.icon}
                </div>
              </div>

              {/* Title and Description */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-lg font-semibold text-muted-foreground mb-3">{program.subtitle}</p>
                <p className="text-muted-foreground">{program.description}</p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-primary">{program.price}</span>
                  {program.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">{program.originalPrice}</span>
                  )}
                  <span className="text-muted-foreground">{program.period}</span>
                </div>
                {program.originalPrice && (
                  <Badge variant="secondary" className="text-xs">
                    Limited Time Offer
                  </Badge>
                )}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div className="text-center text-sm text-muted-foreground mb-6">
                {program.guarantee}
              </div>

              {/* CTA */}
              <Button 
                className={`w-full py-3 font-semibold ${
                  program.highlight ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {program.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Challenge Results */}
        <div className="bg-muted p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">AI Hustle Challenge Results</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              quote: "Within my first month in WBU, I generated $1,200 in additional income using the AI strategies Manu taught. But more importantly, I'm doing it in a way that aligns with my faith and values.",
              author: "Sarah M.",
              role: "Mother of 3, Texas"
            },
            {
              quote: "Manu's approach is different. He doesn't promise overnight riches or ask you to compromise your integrity. The FAITH Code gave me a framework to build wealth that I can feel good about.",
              author: "David K.",
              role: "Small Business Owner, California"
            },
            {
              quote: "The community aspect is incredible. Finally, a group of people who understand that you can be successful AND faithful. The support and accountability have been game-changers.",
              author: "Maria L.",
              role: "Teacher, Florida"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Do I need AI experience to join?</h4>
              <p className="text-muted-foreground text-sm">Not at all! We start with the basics and guide you step-by-step. Many of our most successful members started with zero AI knowledge.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">How much time do I need to commit?</h4>
              <p className="text-muted-foreground text-sm">Most members spend 30-60 minutes per day on challenges and training. The beauty of AI is that it works for you, so you can build wealth without sacrificing family time.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Is this really faith-based?</h4>
              <p className="text-muted-foreground text-sm">Faith isn't a marketing angle for us - it's our foundation. Every strategy is filtered through biblical principles, and our community guidelines reflect Christian values.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What if I'm not satisfied?</h4>
              <p className="text-muted-foreground text-sm">We offer a 100% satisfaction guarantee. If you're not completely satisfied, we'll refund your investment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

