import GetStartedButton from "@/components/buttons/GetStartedButton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { MessageCircleMore, Radio } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

import AuthButtons from "@/components/buttons/AuthButtons";
import {AuthLoader} from "@/components/AuthLoader";

export const dynamic = "force-dynamic";

export default function LandingPage() {
  return (
    <main className="px-4 flex bg-prim flex-col min-h-screen items-start bg-gradient-to-br from-[#e4f0ff] to-[#bad0ee] pb-20">
      
      <Suspense fallback={<AuthLoader className="ml-auto mt-6"/>}>
        <AuthButtons className="ml-auto mt-6"/>
      </Suspense>

      <div className="relative mx-auto w-full flex flex-col items-center gap-y-8 mt-10 lg:mt-16">

        <Headline/>


        <GetStartedButton/>

        <div className="w-full md:max-w-2xl rounded-lg overflow-hidden ">
          <AspectRatio ratio={16/9}>
            <Image
              src="/preview.webp"
              alt="preview"
              objectFit="cover"
              style={{imageRendering: "crisp-edges"}}
              fill
            />
          </AspectRatio>
        </div>

        <ValuePropositon/>

      </div>
    </main>
  );
}

const Headline = () => {

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-pretty text-center tracking-tight leading-[1.5]">Engage your audience like never before</h1>
      <p className="text-muted-foreground text-center leading-relaxed mt-2 lg:mt-4">Pulse offers you a suite of interactive features to keep your audience engaged and provide you with valuable insights</p>
    </div>
  )

}

const valuePropositions = [

  {
    title : "Collect Q&A",
    icon : MessageCircleMore,
    description : "Allow your audience to ask question during your presentation and upvote the most requested ones"
  },
  {
    title : "Real-Time polls",
    icon : Radio,
    description : "Get real time feedback from your audience with real time polls"
  }

];


const ValuePropositon = () => {

  return (
    <div className="max-w-2xl grid grid-cols-1 px-4 sm:grid-cols-2 gap-8 mt-4">
    {
      valuePropositions.map(({title,icon : Icon,description}) => (
        <div key={title} className="flex flex-col gap-y-2 items-start">
          <div className="inline-flex items-center gap-x-2">
            <Icon size={24} className="stroke-blue-600"/>
            <h2 className="text-xl font-bold text-pretty">{title}</h2>
          </div>
          <p className="text-muted-foreground text-sm text-pretty">{description}</p>
        </div>
      ))
    }
    </div>
  )

}