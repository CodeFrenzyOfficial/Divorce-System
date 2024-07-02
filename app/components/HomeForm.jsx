"use client"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/app/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"

import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group"

import { yupResolver } from '@hookform/resolvers/yup';
import HomeFormSchema from "@/app/schemas/HomeFormSchema";

import { useDispatch, useSelector } from "react-redux";
import { Input } from "./ui/input";
import axios from "axios";
import toast from "react-hot-toast";

export default function HomeForm() {
    const dispatch = useDispatch()
    const states = useSelector(item => item.states);
    const { push } = useRouter();
    const form = useForm({
        resolver: yupResolver(HomeFormSchema),
    })

    const onSubmit = async (formdata) => {
        dispatch({
            type: "SET_LOADING",
            payload: true
        })
        try {
            const responsePromise = axios.post(process.env.BASE_URL + '/auth/checkEligibility', formdata);

            responsePromise.then(res => {
                if (res.status === 200) {

                    if (typeof window !== 'undefined') {

                        const userData = JSON.parse(localStorage.getItem("userData"));
                        dispatch({
                            type: "SET_LOCAL_USER_DATA",
                            payload: userData?.userData,
                        });

                        push("/step-form/steps/1");
                        localStorage.setItem("userData", JSON.stringify({
                            userData: [
                                formdata
                            ]
                        }))
                        localStorage.setItem("userToken", JSON.stringify(res.data.data.token))
                    }
                };
                if (res.status === 400) toast.error("Please fill all required fields");
            }).catch(err => err)

            toast.promise(responsePromise, {
                loading: "Wait!",
                success: "Please provide more information",
                error: (err) => err.message
            });

        } catch (error) {
            console.log(error.message);
        }
        finally {
            dispatch({
                type: "SET_LOADING",
                payload: false
            })
        }
    }

    return (
        <div className="bg-white rounded-[8px] w-full lg:w-[80%] shadow-lg p-4 lg:p-8">
            <Form {...form}>
                <h3 className="text-[35px] mb-[5px]">
                    See if you Qualify
                </h3>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                    {/* Radio Buttons */}
                    <FormField
                        control={form.control}
                        name="agree_to_division"
                        render={({ field }) => (
                            <FormItem className="space-y-4">
                                <FormLabel className="text-[17px] mb-[5px]">
                                    Can you and your spouse agree to the division of property, assets and
                                    all child related issues?
                                </FormLabel>

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

                    {/* Select States */}
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value} >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue
                                                placeholder={states ? "Select a state" : "Loading"}
                                                className="placeholder:text-slate-500"
                                            />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent position="bottom" className="z-[200] text-slate-500">
                                        {states
                                            ? states?.map((state, index) => (
                                                <SelectItem key={index} value={state.name}>
                                                    {state.name}
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

                    {/* First & last name Container */}
                    <div className="w-full flex justify-between items-center gap-1">
                        {/* First Name */}
                        <FormField
                            control={form.control}
                            name="firstname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Firstname" className="text-base py-2 px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Last Name */}
                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="LastName" className="text-base py-2 px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="E-mail" className="text-base py-2 px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <button type="submit" className="w-full text-lg bg-primary-yellow text-white font-semibold py-[16px] px-[10px] border-[1px] rounded-[5px] mb-[10px] outline-none transition-all duration-200 hover:opacity-70 hover:focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)] ">
                        Check Eligibility
                    </button>

                    <span className="text-[14px] text-gray-600 w-full py-4">
                        By clicking “Check Eligibility” you agree to the
                        <span className="ml-1 font-bold">
                            Terms of Service
                        </span>
                    </span>
                </form>
            </Form>
        </div>
    )
}