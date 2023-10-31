import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="sm:flex items-center justify-center h-[calc(100vh-75px)]">
      <div className="sm:w-1/2 p-10">
      <h1 className="flex justify-center">- About Us -</h1>
      <p>
        We&apos;re passionate about harnessing the power of cutting-edge
        technology to revolutionize the way job seekers approach their career
        aspirations. Our mission is to bridge the gap between your potential and
        your dream job using the latest advancements in Artificial Intelligence
        (AI).
      </p>

      <h2>The AI Advantage</h2>
      <p>
        Our commitment to innovation led us to incorporate AI-driven tools and
        solutions into our resume services. These AI technologies empower us to
        provide job seekers with an unprecedented level of support and
        expertise.
      </p>

      <h2>Tailored Resumes with AI Precision</h2>
      <p>
        Our AI algorithms analyze your unique background and career objectives
        to create a personalized resume that reflects your skills and experience
        accurately. With AI&apos;s precision, your resume is finely tuned to
        match your industry&apos;s requirements.
      </p>

      <h2>Keyword Optimization</h2>
      <p>
        In today&apos;s competitive job market, keywords play a crucial role in
        resume screening. Our AI tools identify and incorporate the most
        relevant keywords, giving your resume a better chance of reaching the
        hands of hiring managers.
      </p>

      <h2>Continuous Learning</h2>
      <p>
        AI doesn&apos;t stop at the initial draft. It adapts and learns from
        real-time feedback, ensuring that your resume stays current and
        effective in a dynamic job landscape.
      </p>

      <h2>Your AI-Powered Success Partner</h2>
      <p>
        AI is not a replacement for human expertise; it&apos;s an enhancement.
        Our experienced team collaborates with AI to create resumes that are not
        only technically optimized but also convey your unique story and career
        goals.
      </p>

      <h2>
        Join us on this exciting journey where AI-driven innovation meets the
        art of storytelling in your resume. Your success begins with a fusion of
        human expertise and AI precision.
      </h2>
      </div>
    </div>
  );
}

export default About;
