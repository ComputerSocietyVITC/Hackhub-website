"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export const runtime = "edge";

export default function FaqPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="flex-1 w-full flex flex-col justify-center px-4 sm:px-10 pb-20 font-montserrat">
        <div className="flex justify-between items-center mb-12">
          <p className="text-white text-xl sm:text-3xl font-extrabold">FAQ</p>
          <div className="flex-1 h-[1px] bg-white mx-4"></div>
          <p className="text-white font-bold text-xl">09</p>
        </div>

        <div className="flex justify-start sm:justify-between mt-12">
          <div className="w-full max-w-full lg:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 sm:px-6 text-left">
            <Accordion type="multiple" className="space-y-5 text-semibold font-sans duration-500">
              {["What is HackHub, and why should you participate?",
                "Who can participate in HackHub?",
                "What are the focus areas or tracks in this Hackathon?",
                "What kind of support can participants expect?",
                "How do I register for HackHub?",
                "Do I need prior experience to participate in HackHub?",
                "Are there any prizes for the winners?",
                "What kind of projects can I build during HackHub?",
                "How will projects be judged?",
                "What if I have more questions about HackHub?",
              ].map((question, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-600"
                >
                  <AccordionTrigger className="text-lg font-medium py-4 text-white hover:text-gray-300 transition text-left">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white font-sans pb-4 text-left">
                    {index === 0 && (
                      <p>
                        HackHub is a college-level hackathon designed to bring students, innovators, and tech
                        enthusiasts together to solve real-world problems through technology. It’s an opportunity
                        to collaborate, learn from industry experts, and build solutions that create a lasting impact.
                        Participating in HackHub allows you to sharpen your skills, network with like-minded
                        individuals, and showcase your ideas to peers and professionals.
                      </p>
                    )}
                    {index === 1 && (
                      <p>
                        HackHub is open to all students and tech enthusiasts passionate about innovation and
                        problem-solving. Whether you’re a beginner eager to learn or an experienced coder ready
                        to build, HackHub welcomes individuals and teams from all backgrounds and skill levels.
                      </p>
                    )}
                    {index === 2 && (
                      <>
                        <p>
                          The HackHub hackathon offers diverse tracks to challenge and inspire creativity, including:
                        </p>
                        <ul className="list-disc pl-6">
                          <li>Artificial Intelligence and Machine Learning (AI/ML)</li>
                          <li>Web3 and Blockchain</li>
                          <li>HealthTech and Wellness</li>
                          <li>Environmental Sustainability</li>
                          <li>Open Innovation (for exploring unique and unconventional ideas)</li>
                        </ul>
                      </>
                    )}
                    {index === 3 && (
                      <p>
                        Participants will receive access to experienced mentors, technical resources, and tools to
                        guide their projects. Dedicated support teams will be available to help with any challenges,
                        and workshops or webinars may be conducted to enhance skills and understanding.
                      </p>
                    )}
                    {index === 4 && (
                      <p>
                        To register, visit the official HackHub registration portal or follow the steps provided on our
                        official website and social media channels. Fill out the form with your details, choose your
                        preferred track, and submit your application before the deadline. Be sure to check for
                        updates and announcements regarding event schedules and requirements!
                      </p>
                    )}
                    {index === 5 && (
                      <p>
                        Not at all! HackHub is designed for participants of all skill levels, from beginners to experienced developers. If you’re
                        passionate about technology and eager to learn, you’ll fit right in. Mentors and resources will be available to help you throughout the event.
                      </p>
                    )}
                    {index === 6 && (
                      <p>
                        Yes! Exciting prizes will be awarded to the best projects in each track, along with special awards for creativity, innovation, and
                        impact. Winners will also get certificates, and recognition among the tech community.
                      </p>
                    )}
                    {index === 7 && (
                      <p>
                        You can build anything that aligns with the provided tracks, such as apps, platforms, prototypes, or systems. The goal is to
                        create practical, innovative solutions to real-world challenges within the given time frame.
                      </p>
                    )}
                    {index === 8 && (
                      <p>
                        Projects will be judged based on criteria such as innovation, feasibility, technical implementation, design, and overall impact. A
                        panel of student mentors will evaluate each project during the final presentation.
                      </p>
                    )}
                    {index === 9 && (
                      <p>
                        If you have any additional questions, feel free to reach out through our official website or social media channels. Our team is
                        here to assist you and make your HackHub experience unforgettable!
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
