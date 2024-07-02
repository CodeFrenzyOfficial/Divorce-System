"use client"

import Step4Schema from "@/app/schemas/stepform-schemas/step4";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group"
import { yupResolver } from '@hookform/resolvers/yup';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/form";

import { useRouter } from "next/navigation";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function page() {
    const { push } = useRouter();
    const StepOneQuestionair = useSelector(items => items?.questionair);
    const questions = (StepOneQuestionair && StepOneQuestionair[3]);

    const form = useForm({
        resolver: yupResolver(Step4Schema)
    })

    const onSubmit = (formdata) => {
        if (formdata) push("/step-form/steps/5")
    }

    return (
        <div className="py-10">
            <Form {...form}>
                <h3 className="font-semibold text-2xl mb-8">
                    {questions ? questions.name : "Filing Party"}
                </h3>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* petitioner */}
                    <div className="flex flex-col items-start md:items-center md:flex-row justify-between gap-4">
                        <h2 className="w-full md:w-1/2">
                            {questions ? questions?.questions[0].question : "* Who will be the petitioner in this case?"}
                        </h2>

                        <div className="w-full md:w-1/2 text-left">
                            <FormField
                                control={form.control}
                                name="petitioner"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex flex-col space-y-1"
                                            >
                                                <div className="w-full flex items-center gap-3">
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="myself" />
                                                        </FormControl>
                                                        <FormLabel className="text-base font-normal cursor-pointer">
                                                            Myself
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="my spouse" />
                                                        </FormControl>
                                                        <FormLabel className="text-base font-normal cursor-pointer">
                                                            My Spouse
                                                        </FormLabel>
                                                    </FormItem>
                                                </div>
                                            </RadioGroup>
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="w-fit p-4 bg-blue-100 flex gap-2 items-center justify-start">
                        <div className="">
                            <IoIosInformationCircleOutline className="text-2xl text-indigo-600" />
                        </div>

                        <p className="font-light text-sm">
                            It is necessary that only one of the spouses, not both, be designated as the Petitioner (party filing the case), even if the parties agree on the terms of their case. The Petitioner is simply the spouse that files the case and the other spouse is the Respondent.
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div className="grid place-items-start md:place-items-center py-4">
                        <button type="submit" className="px-6 py-3 text-base font-medium text-center text-white bg-primary-blue rounded-md transition-all duration-300 hover:opacity-80 shadow-lg shadow-gray-600/30">
                            Save & Continue
                        </button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
