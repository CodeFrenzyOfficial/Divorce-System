"use client"

import Step1Schema from "@/app/schemas/stepform-schemas/step1";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux"
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group"
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";


import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";

export default function page() {
    const StepOneQuestionair = useSelector(items => items?.questionair);
    const questions = (StepOneQuestionair && StepOneQuestionair[0]);

    const form = useForm({
        resolver: yupResolver(Step1Schema),
    })

    const onSubmit = (formdata) => {
        console.log(formdata)
    }

    return (
        <div className="py-10">
            <Form {...form}>
                <h3 className="font-semibold text-2xl mb-8">
                    {questions ? questions.name : "Your current place of residence"}
                </h3>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* ZIP/POSTAL Code Field */}
                    <div className="w-full flex flex-col items-start md:items-center md:flex-row justify-between gap-4">
                        <h2 className="md:w-1/2">
                            {questions ? questions?.questions[0].question : "* Your ZIP/POSTAL Code:"}
                        </h2>
                        <div className="md:w-1/2">
                            <FormField
                                control={form.control}
                                name="zipcode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Postal Code" className="text-base py-2 px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
                                                {...field}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Location Of Spouse Radio Buttons */}
                    <div className="flex flex-col items-start md:items-center md:flex-row justify-between gap-4">
                        <h2 className="md:w-1/2">
                            {questions ? questions?.questions[1].question : "* Do you know location of your spouse?"}
                        </h2>

                        <div className="md:w-1/2 text-left">
                            <FormField
                                control={form.control}
                                name="location_of_spouse"
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
                                                            <RadioGroupItem value="yes" />
                                                        </FormControl>
                                                        <FormLabel className="text-base font-normal cursor-pointer">
                                                            Yes
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="no" />
                                                        </FormControl>
                                                        <FormLabel className="text-base font-normal cursor-pointer">
                                                            No
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
