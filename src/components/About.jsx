import React from 'react';
import { MapPin, Heart, Award, Target } from 'lucide-react';
import { Button } from './ui/button';
import professionalPortrait from '../assets/professional_portrait_2.jpg';
import familyLifestyle from '../assets/family_lifestyle.jpg';

const About = () => {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Truth",
      description: "I'd rather lose a sale than twist the truth. Transparency isn't just a business practice - it's a way of life."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Action",
      description: "Faith without works is dead. I don't just teach theory - I give you practical steps you can take today."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Family",
      description: "Everything I do is designed to strengthen families and create lasting legacy. Wealth without family is meaningless."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Your Guide: Manu Alderete
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            25+ years of financial expertise, a life-changing promise, and an unshakeable commitment 
            to helping families build wealth with integrity
          </p>
        </div>

        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={professionalPortrait} 
                alt="Manu Alderete" 
                className="w-full max-w-md rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                Financial Professional
              </div>
            </div>
          </div>

          {/* Right Column - Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">The €2 Million Phone Call That Changed Everything</h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                The phone call came on a Tuesday morning in 2009. Heinrich, a hardworking farmer, 
                had just lost his entire life savings - €2 million - to a fraudulent financial advisor. 
                In one moment, Heinrich lost not just his money, but his marriage, his relationship 
                with his children, and his standing in the community.
              </p>
              
              <p>
                That day, I made a promise to God and to myself: I would dedicate my life to helping 
                people build wealth the right way. Not through get-rich-quick schemes or too-good-to-be-true 
                promises, but through principles, systems, and integrity.
              </p>
              
              <p className="font-semibold text-foreground">
                Today, I live in New Zealand with my wife Daniela (married 18 years and counting), 
                and I've helped thousands of families create sustainable wealth using ethical AI strategies.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 bg-card rounded-lg">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <div className="font-semibold">From Germany to New Zealand</div>
                <div className="text-sm text-muted-foreground">A journey of faith and purpose</div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="bg-card p-8 rounded-lg shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Professional Background</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="font-semibold">Years in Finance</div>
              <div className="text-sm text-muted-foreground">Investment Banking & Risk Management</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$100M+</div>
              <div className="font-semibold">Assets Under Management</div>
              <div className="text-sm text-muted-foreground">Funds Management Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="font-semibold">Families Helped</div>
              <div className="text-sm text-muted-foreground">Through WealthBuilders Community</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">My Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg card-hover text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary rounded-lg text-white">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Family Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Faith, Family, and Legacy</h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Daniela has been my anchor through it all. We've been married for 18 years, 
                and she's not just my wife - she's my partner in this mission. Every decision we make, 
                every strategy we develop, every family we help is filtered through one question: 
                "Does this honor God and serve others?"
              </p>
              
              <p>
                The FAITH Code isn't just a business framework - it's a way of life that honors God, 
                serves others, and builds lasting legacy.
              </p>
            </div>

            <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
              <p className="font-semibold text-accent mb-2">"Above all else, guard your heart, for everything you do flows from it."</p>
              <p className="text-sm text-muted-foreground">- Proverbs 4:23</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <img 
              src={familyLifestyle} 
              alt="Family Values" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            If you've read this far, you're probably tired of choosing between financial success and your faith. 
            You want both - and you deserve both.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary px-8 py-3 text-lg font-semibold rounded-lg">
              Join Free AI Hustle Challenge
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg font-semibold rounded-lg">
              Read My Full Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

