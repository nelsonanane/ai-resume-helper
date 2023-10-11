import { openai } from "@/lib/openaiConfig";
import { NextRequest, NextResponse } from "next/server";

const chatGPTResponse = {
    "warning": "This model version is deprecated. Migrate before January 4, 2024 to avoid disruption of service. Learn more https://platform.openai.com/docs/deprecations",
    "id": "cmpl-88DlSqwDYURIXxQYucmSidbCWdjDI",
    "object": "text_completion",
    "created": 1696970226,
    "model": "text-davinci-003",
    "choices": [
        {
            "text": " Design and develop responsive web applications with HTML, CSS, and JavaScript \n• Ensure compatibility of applications across browsers and devices\n• Implement design systems and create reusable components\n• Utilize modern development tools such as version control systems and task runners\n• Integrate front-end applications with back-end services and APIs\n• Collaborate with developers, designers, and product owners to create user-friendly web applications\n• Review existing code and suggest improvements\n• Monitor performance and troubleshoot issues\n• Proactively identify and fix usability problems\n• Create and maintain technical documentation\n• Stay up-to-date with the latest trends and technologies in web development\n• Develop web applications using coding conventions and standards\n• Write unit tests to ensure code quality and maintain existing automated tests\n• Provide guidance and support to junior developers\n• Establish best practices for coding and debugging\n• Provide mentorship and technical guidance to team members\n• Participate in code reviews to ensure quality and adherence to standards\n• Assist with the estimation and planning process\n• Monitor and optimize web application performance\n• Create custom web components for complex user interactions\n• Analyze user requirements and provide technical solutions",
            "index": 0,
            "logprobs": null,
            "finish_reason": "stop"
        }
    ],
    "usage": {
        "prompt_tokens": 63,
        "completion_tokens": 238,
        "total_tokens": 301
    }
}

export async function POST(request: NextRequest) {
  try {
    const title = await request.json() 
    // const completion = await openai.completions.create({
    //     model: 'gpt-3.5-turbo-instruct',
    //     prompt: `Write 20 bullet points that describes impact, separated by a line break, of a work experience description for a resume of a ${title}. Write in an unordered list. Write one bullet point per line. Write in present tense. Write it in 'english' language. Write using bullet points: •`
    // }); 
    const response = NextResponse.json({
      message: "REQUEST successful",
      data: chatGPTResponse,
      success: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
