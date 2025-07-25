import { cn, propsWithClassName } from "@/lib/utils/uiUtils";
import { forwardRef, useState } from "react";
import { Textarea } from "./ui/textarea";


type Props = propsWithClassName<React.ComponentProps<"textarea">>;

export const TextAreaWithCounter = forwardRef<HTMLTextAreaElement, Props>(
    ({
        defaultValue = "",
        maxLength = 10_000,
        onChange,
        ...props
    }: Props, forwaredRef) => {


        const [content,setContent] = useState<string>(defaultValue as string);

        const handleChange = (event : React.ChangeEvent<HTMLTextAreaElement>) => {

            setContent(event.target.value);

            onChange?.(event);

        }

        return <div>
            <Textarea value={content} ref={forwaredRef}
            className={cn("min-h-10 max-h-32 ring-slate-400/20 ring-2 focus-visible:ring-slate-500 focus-visible:ring-1")}
             onChange={handleChange} {...props}/>
            <span className="text-xs font-light ml-2">{content.length} / {maxLength}</span>
        </div>
    }
);

TextAreaWithCounter.displayName = "TextAreaWithCounter";