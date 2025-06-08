"use client";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";
import AnimatedSection from "@/components/animated-section";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-black/20 rounded-lg my-10 py-10 flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <AnimatedSection id="contact-info" className="w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              언제든지 편하게 연락주세요!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                asChild
              >
                <a href="mailto:swh1182@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  이메일 보내기
                </a>
              </Button>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white hover:text-black shadow-md"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/siml-seo/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white hover:text-black shadow-md"
                  asChild
                >
                  <a
                    href="https://github.com/SIML-Seo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
