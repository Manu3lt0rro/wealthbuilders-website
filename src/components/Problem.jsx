import React from 'react';
import { AlertTriangle, TrendingDown, Clock, DollarSign } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Get-Rich-Quick Schemes",
      description: "Promises of overnight success that compromise your values and deliver nothing but disappointment."
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: "Outdated Financial Advice",
      description: "Traditional strategies that no longer work in today's AI-driven economy, leaving you behind."
    },
    {
      icon: <Clock className="w-8 h-8 text-red-500" />,
      title: "Analysis Paralysis",
      description: "Overwhelmed by AI opportunities but don't know where to start or which strategies actually work."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-red-500" />,
      title: "Values vs. Wealth Conflict",
      description: "Feeling forced to choose between financial success and maintaining your faith and integrity."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Most People Are Building Wealth the Wrong Way
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              You've seen the promises. "Make $10K in 30 days!" "AI will make you rich overnight!" 
              "Just follow this one weird trick!"
            </p>
            <p>
              But deep down, you know something's not right. These get-rich-quick schemes feel slimy. 
              They ask you to compromise your values. They promise everything and deliver nothing.
            </p>
            <p className="text-xl font-semibold text-foreground">
              Meanwhile, you're stuck. You know AI offers incredible opportunities, but you don't know where to start.
            </p>
          </div>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg card-hover text-center">
              <div className="flex justify-center mb-4">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center bg-card p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            You're tired of choosing between financial success and your faith.
          </h3>
          <p className="text-xl text-muted-foreground mb-6">
            You want both - and you deserve both.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

