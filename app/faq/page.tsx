'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export default function FaqPage() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="flex-1 w-full flex flex-col justify-center px-4 sm:px-10 pb-20">
        {/* Header Section with 05 and FAQ */}
        <div className="flex justify-between items-center mb-12">
          <p className="text-white text-xl sm:text-3xl font-bold">FAQ</p>
          <div className="flex-1 h-[1px] bg-white mx-4"></div>
          <p className="text-white font-bold text-xl">06</p>
        </div>

        {/* Centered Accordion Section */}
        <div className="flex justify-start sm:justify-between mt-8">
          {/* Apply centering and max width for 2xl and above */}
          <div className="w-full max-w-full lg:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 sm:px-6">
            <Accordion type="multiple" className="space-y-5 text-semibold font-sans duration-500">
              {[
                'What is Hackhub and how is it useful?',
                'Who can participate in this Hackathon?',
                'What are the tracks for this Hackathon?',
                'What support will participants receive?',
                'What is the Hackhub registration process?',
              ].map((question, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-600"
                >
                  <AccordionTrigger className="text-lg font-medium py-4 text-white hover:text-gray-300 transition">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white font-sans pb-4">
                    {index === 0 && (
                      <p>
                        Hackhub is an intensive event where participants collaborate to address specific challenges or develop innovative products within a limited timeframe.
                      </p>
                    )}
                    {index === 1 && (
                      <p>
                        Students, researchers, and industry professionals with a passion for technology are encouraged to join.
                      </p>
                    )}
                    {index === 2 && (
                      <p>
                        The Hackathon will feature tracks in AI/ML, Web3, Open Innovation, Health, and Environmental Sustainability.
                      </p>
                    )}
                    {index === 3 && (
                      <p>
                        Participants will have access to technical resources, mentorship, and a conducive environment to foster creativity and innovation.
                      </p>
                    )}
                    {index === 4 && (
                      <p>
                        For registration and further information, please follow our official channels.
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
