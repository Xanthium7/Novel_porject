// import OpenAI from "openai";
// import { OpenAIStream, StreamingTextResponse } from "ai";

// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });


export async function POST(req: Request): Promise<Response>{


    let promt = JSON.stringify(await req.json())
    let prompt = JSON.parse(promt).prompt


    // const chatCompletion = await openai.chat.completions.create({
    //     messages: [
    //         {
    //           role: "system",
    //           content:
    //             "You are an AI writing assistant that continues existing text based on context from prior text. " +
    //             "Give more weight/priority to the later characters than the beginning ones. " +
    //             "Limit your response to no more than 100 characters, but make sure to construct complete sentences.",
              
    //         },
    //         {
    //           role: "user",
    //           content: prompt,
    //         },
    //       ],
    //     model: "gpt-3.5-turbo",
    // });

    // console.log(chatCompletion)

    return new Response(" Ai Sysytem is functional but not assiccible due to lack of API key, plese view the git hub repo code for further information")
    
}



