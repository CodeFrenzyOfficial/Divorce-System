"use client"

import Step10Schema from "@/app/schemas/stepform-schemas/step10";
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
    const questions = (StepOneQuestionair && StepOneQuestionair[9]);

    const form = useForm({
        resolver: yupResolver(Step10Schema)
    })

    const onSubmit = (formdata) => {
        if (formdata) push("/step-form/steps/10")
    }

    return (
        <div className="py-10">
            <Form {...form}>
                <h3 className="font-semibold text-2xl mb-8">
                    {questions ? questions.name : "Military Information"}
                </h3>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* You ow money to spouse? */}
                    <div className="flex flex-col items-start md:items-center md:flex-row justify-between gap-4">
                        <h2 className="w-full md:w-1/2">
                            {questions ? questions?.questions[0].question : "* Are either you or your spouse a member of the United States Military?"}
                        </h2>

                        <div className="w-full md:w-1/2 text-left">
                            <FormField
                                control={form.control}
                                name="united_states_military"
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
