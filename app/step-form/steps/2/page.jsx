"use client"

import Step2Schema from "@/app/schemas/stepform-schemas/step2";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux"
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

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { useRouter } from "next/navigation";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function page() {
    const { push } = useRouter()
    const StepOneQuestionair = useSelector(items => items?.questionair);
    const questions = (StepOneQuestionair && StepOneQuestionair[1]);

    const form = useForm({
        resolver: yupResolver(Step2Schema)
    })

    const onSubmit = (formdata) => {
        if (formdata) push("/step-form/steps/3")
    }
    const children = [
        "None", "1", "2", "3", "4", "5", "6"
    ]

    return (
        <div className="py-10">
            <Form {...form}>
                <h3 className="font-semibold text-2xl mb-8">
                    {questions ? questions.name : "Children and Pregnancy"}
                </h3>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Number Of Children Code Field */}
                    <div className="w-full flex flex-col items-start md:items-center md:flex-row justify-between gap-4">
                        <h2 className="w-full md:w-1/2">
                            {questions ? questions?.questions[0].question : "How many children do you and your spouse have, if any?"}
                        </h2>

                        <div className="w-full md:w-1/2">
                            <FormField
                                control={form.control}
                                name="number_of_children"
                                render={({ field }) => (
                                    <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={field.value} >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue
                                                        placeholder={children ? "Select Number of Children" : "Loading"}
                                                        className="placeholder:text-slate-500"
                                                    />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent position="bottom" className="z-[200] text-slate-500">
                                                {children
                                                    ? children?.map((state, index) => (
                                                        <SelectItem key={index} value={state}>
                                                            {state}
                                                        </SelectItem>
                                                    ))
                                                    : <SelectItem></SelectItem>
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <div className="w-[90%] p-4 bg-blue-100 flex gap-2 items-start justify-start">
                        <div className="mt-4">
                            <IoIosInformationCircleOutline className="text-2xl text-indigo-600" />
                        </div>

                        <p className="font-light text-sm">OnlineDivorce.com can handle agreements involving children. If you have children—you and your current spouse are the parents through natural parentage or adoption—please tell us how many. NOTE: Only count children under 18 who are dependent on you and your spouse for support. If there are no children, select "None."</p>
                    </div>

                    {/* Pregnancy Status */}
                    <div className="flex flex-col items-start md:items-center md:flex-row justify-between gap-4">
                        <h2 className="w-full md:w-1/2">
                            {questions ? questions?.questions[1].question : "* Is either of you pregnant?"}
                        </h2>

                        <div className="w-full md:w-1/2 text-left">
                            <FormField
                                control={form.control}
                                name="pregnancy_status"
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
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="not sure" />
                                                        </FormControl>
                                                        <FormLabel className="text-base font-normal cursor-pointer">
                                                            Not Sure
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
