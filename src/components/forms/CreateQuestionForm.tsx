import { Event, User } from "@/generated/prisma"
import { QuestionDetail } from "@/lib/prisma/validators/question-validator"
import { createQuestionSchema, CreateQuestionSchema } from "@/lib/validations/question-schema"
import { FormProvider, useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { TextAreaWithCounter } from "../TextAreaWithCounter"
import { question } from "@/lib/validations/constatnts"
import { RegisterLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { Button, buttonVariants } from "../ui/button"
import {MessageCircleCodeIcon} from 'lucide-react';
import { cn } from "@/lib/utils/uiUtils"
import routes, { baseUrl } from "@/config/routes"
import {useAction} from 'next-safe-action/hooks';
import { createQuestionAction } from "@/lib/actions/create-question-action"
import { toast } from "sonner"


type Props = {
    ownerId : User["id"],
    eventSlug : Event["slug"],
    onSuccess : (data : QuestionDetail) => void
}

const CreateQuestionForm = ({ownerId,eventSlug,onSuccess : handleSuccess} : Props) => {


    const {isAuthenticated} = useKindeBrowserClient();
    

    const form = useForm<CreateQuestionSchema>({
        resolver : zodResolver(createQuestionSchema),
        defaultValues : {
            body : "",
            ownerId ,
            slug : eventSlug ?? undefined
        },
        mode : "onSubmit"
    });

    const {execute,isExecuting} = useAction(createQuestionAction,{
        onSuccess : ({data}) => {

            if (data) {
                handleSuccess(data);
            }

            toast.message("your question has been posted");
        },
        onError : () => {

            toast.error("something went wrong",{
                description : "Failed to post question",
                
            })

        },
        onSettled : () => form.reset()
    });
    
    const isFieldDisabled = form.formState.isSubmitting || isExecuting;


    //todo run server action here
    const onSubmit = async (values : CreateQuestionSchema) => {
        execute(values);
    }


  return (
    <FormProvider {...form}>

        <form className="py-3 px-3 border border-dashed border-primary/60 rounded-lg" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField 
            name="body"
            control={form.control}
            render={({field}) => (
                <FormItem>
                   <FormLabel>Your Question</FormLabel> 


                    <FormControl>
                        <TextAreaWithCounter
                            disabled={isFieldDisabled}
                            placeholder={"what do you want to ask about"}
                            maxLength={question.maxLength}
                            {...field}
                        />
                    </FormControl>

                    <FormMessage className="text-destructive text-xs">
                        {form.formState.errors.body?.message}
                    </FormMessage>

                </FormItem>
            )}
            />

            
            <div className="flex justify-end -mt-3">
                <div className="flex justify-end">
                    {
                        isAuthenticated ? (
                            <Button type="submit" disabled={isFieldDisabled} size="lg"> 
                                <MessageCircleCodeIcon className="w-4 h-4 mr-2"/>

                                <span className="text-xs lg:text-sm">{isExecuting ? "Posting..." : "Ask"}</span>
                            </Button>
                        ) : (
                            <RegisterLink postLoginRedirectURL={`${baseUrl}${routes.event({ownerId,slug : eventSlug})}`} className={cn(buttonVariants({variant : "default"}))}>
                                 <MessageCircleCodeIcon className="w-4 h-4 mr-2"/>

                                <span className="text-xs lg:text-sm">Ask</span>
                            </RegisterLink>
                        )
                    }
                </div>
            </div>


        </form>
      
    </FormProvider>
  )
}

export default CreateQuestionForm
