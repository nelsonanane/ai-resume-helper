import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

function page({}: Props) {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-75px)]">
      <div className="w-1/2">
        <h1 className="flex justify-center">- FAQ&apos;s -</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the importance of a well-crafted resume?</AccordionTrigger>
            <AccordionContent>
            A well-crafted resume is crucial because it serves as your first impression on potential employers. It highlights your skills, experience, and qualifications, increasing your chances of securing an interview and ultimately landing your desired job.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What are the key elements that should be included in a resume?</AccordionTrigger>
            <AccordionContent>
            A comprehensive resume typically includes sections like contact information, a summary or objective statement, work experience, education, skills, and any additional relevant sections like certifications or volunteer work. The specific elements may vary based on your career level and industry.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How long should a resume be?</AccordionTrigger>
            <AccordionContent>
            Resume length depends on your experience level. Typically, a one-page resume is suitable for entry-level or early-career individuals, while experienced professionals may have a two-page resume. It&apos;s important to focus on content relevance and quality rather than length.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What is the role of keywords in a resume?</AccordionTrigger>
            <AccordionContent>
            Keywords are essential because many employers and applicant tracking systems (ATS) use them to filter and rank resumes. Including relevant industry-specific keywords can help your resume get noticed by both ATS and hiring managers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How often should I update my resume?</AccordionTrigger>
            <AccordionContent>
            It&apos;s a good practice to update your resume regularly, even when you&apos;re not actively job searching. Any time you gain new skills, complete a project, receive a promotion, or achieve a significant milestone in your career, consider updating your resume to reflect these accomplishments. This ensures your resume is always up-to-date when opportunities arise.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default page;
