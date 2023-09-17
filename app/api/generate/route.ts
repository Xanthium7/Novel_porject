import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";


const OPENAI_API_KEY="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"

const openai = new OpenAI({
    apiKey: "{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}",
});


export async function POST(req: Request): Promise<Response>{


    let promt = JSON.stringify(await req.json())
    let prompt = JSON.parse(promt).prompt


    const chatCompletion = await openai.chat.completions.create({
        messages: [
            {
              role: "system",
              content:
                "You are an AI writing assistant that continues existing text based on context from prior text. " +
                "Give more weight/priority to the later characters than the beginning ones. " +
                "Limit your response to no more than 100 characters, but make sure to construct complete sentences.",
              
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion.choices[0].message.content)

    return(
        new Response(": "+chatCompletion.choices[0].message.content )
        ) 
    
}



