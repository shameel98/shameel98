import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedCard from "@/components/ui/AnimatedCard";

const typewriterTexts = [
  "DevOps Engineer",
  "Cloud Engineer",
  "Site Reliability Engineer",
  "Platform Engineer",
];

const Hero = () => {
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const text = typewriterTexts[typewriterIndex];
    let timer: NodeJS.Timeout;

    if (isTyping) {
      if (typewriterText.length < text.length) {
        timer = setTimeout(() => {
          setTypewriterText(text.substring(0, typewriterText.length + 1));
        }, 100);
      } else {
        setIsTyping(false);
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (typewriterText.length > 0) {
        timer = setTimeout(() => {
          setTypewriterText(
            typewriterText.substring(0, typewriterText.length - 1)
          );
        }, 50);
      } else {
        setIsTyping(true);
        setTypewriterIndex((typewriterIndex + 1) % typewriterTexts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typewriterText, typewriterIndex, isTyping]);

  return (
    <section
      id="home"
      className="min-h-screen relative flex flex-col justify-center items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-yousaf/5 to-transparent dark:from-yousaf-dark/10 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <AnimatedCard className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
          <div className="stagger-item stagger-delay-1 mb-6 relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-lg mx-auto">
              <img
                src="https://avatars.githubusercontent.com/shameel98"
                alt="Shameel Ahmed"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

<h1 className="stagger-item stagger-delay-2 text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
  <span className="font-rockybilly">Shameel</span>{" "}
  <span className="font-rockybilly">ahmed</span>{" "}
  
</h1>









          <div className="stagger-item stagger-delay-3 h-10 mb-6">
            <span className="text-xl md:text-2xl text-Shameel font-medium inline-flex items-center">
              {typewriterText}
              <span className="w-0.5 h-6 bg-yousaf ml-1 animate-pulse-slow"></span>
            </span>
          </div>

          <p className="stagger-item stagger-delay-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
            Transforming cloud infrastructure with innovative DevOps solutions.
            Specializing in AWS, Terraform, Kubernetes, and CI/CD automation.
          </p>

          <div className="stagger-item stagger-delay-5 flex items-center justify-center space-x-4 mb-8">
            <a
              href="#about"
              className="px-6 py-3 bg-yousaf text-white rounded-lg shadow-lg hover:bg-yousaf-dark transition-colors"
            >
              Discover More
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-yousaf text-yousaf rounded-lg hover:bg-yousaf/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="stagger-item stagger-delay-6 flex items-center justify-center space-x-6">
            <a
              href="https://github.com/shameel98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-rifkhan transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/shameelahmed98/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-rifkhan transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://medium.com/@shameel98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-rifkhan transition-colors"
              aria-label="Medium"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 0v24h24V0H0zm19.938 5.686L18.651 6.9a.557.557 0 0 0-.214.534v13.469a.557.557 0 0 0 .214.534l1.257 1.214v.267h-6.324v-.267l1.302-1.264c.128-.128.128-.165.128-.359V9.854l-3.615 9.195h-.488L6.018 9.854v9.154c-.035.271.053.551.247.748l1.695 2.054v.267H2.01v-.267l1.695-2.054a.872.872 0 0 0 .232-.748V8.304a.644.644 0 0 0-.209-.536L2.597 5.686V5.42h5.668l4.394 9.637 3.858-9.637h5.4v.266z" />
              </svg>
            </a>
          </div>
        </AnimatedCard>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-float">
        <a
          href="#about"
          className="text-foreground/60 hover:text-yousaf transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
