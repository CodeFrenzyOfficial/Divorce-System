"use client"

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";

import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group"
import StepSchema from "@/app/schemas/stepform-schemas/step";
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from "@/app/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";


export default function page() {
  const stepFormQuestions = useSelector(item => item.stepFormQuestions);
  const dispatch = useDispatch()
  const { push } = useRouter()

  const form = useForm({
    resolver: yupResolver(StepSchema),
    defaultValues: {
      firstname: stepFormQuestions ? stepFormQuestions[0].firstname : "",
      lastname: stepFormQuestions ? stepFormQuestions[0].lastname : "",
      email: stepFormQuestions ? stepFormQuestions[0].email : "",
      agree_to_division: stepFormQuestions ? stepFormQuestions[0].agree_to_division : "",
    }
  })

  const onSubmit = async (formdata) => {
    const finalData = { ...formdata, state: stepFormQuestions[0].state }
    dispatch({
      type: "SET_LOADING",
      payload: true
    })
    try {
      const responsePromise = axios.post(process.env.BASE_URL + '/auth/checkEligibility', finalData);

      responsePromise.then(res => {

        if (res.status === 200) {
          if (typeof window !== 'undefined') {
            push("/step-form/steps/1");

            localStorage.removeItem("userData")
            localStorage.removeItem("userToken")

            localStorage.setItem("userData", JSON.stringify({
              userData: [
                finalData
              ]
            }))
            
            localStorage.setItem("userToken", JSON.stringify(res.data.data.token))
          }
        };

        if (res.status === 400) toast.error("Please fill all required fields");
      }).catch(err => console.log(err))

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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[15px] lg:gap-[15px]">
          <div className="col-span-2 my-[15px]">
            <h1 className="text-lg font-semibold md:text-[25px] lg:text-[30px]">
              Information about yourself
            </h1>
          </div>

          <div className="col-span-2 lg:col-span-1 my-[15px]">
            <p className="text-[14px] lg:text-[16px] mr-[10px] ">
              * Can you and your spouse agree to the division of property,
              assets and all child related issues?
            </p>
          </div>

          {/* Spouse Agree or not  */}
          <FormField
            control={form.control}
            name="agree_to_division"
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

          <div className="col-span-2 lg:col-span-1">
            <p className="text-[14px] lg:text-[16px] mr-[20px]">
              * First Name
            </p>
          </div>

          {/* First name */}
          <div className="col-span-2 lg:col-span-1">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter First Name" className="text-base py-2 px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <p className="text-[14px] lg:text-[16px] mr-[20px]">
              * Middle Name
            </p>
          </div>

          {/* MiddleName */}
          <div className="col-span-2 lg:col-span-1">
            <FormField
              control={form.control}
              name="middlename"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter Middle Name" className="text-base py-2 px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <p className="text-[14px] lg:text-[16px] mr-[20px]">
              * Last Name
            </p>
          </div>

          {/* Last name */}
          <div className="col-span-2 lg:col-span-1">
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter Last Name" className="text-base py-2 px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <p className="text-[14px] lg:text-[16px] mr-[20px]">
              * Email Address
            </p>
          </div>

          {/* Email */}
          <div className="col-span-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter E-mail" className="text-base py-2 px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-2 grid place-items-center">
            <button type="submit" className="px-6 py-3 text-base font-medium text-center text-white bg-primary-blue rounded-md transition-all duration-300 hover:opacity-80 shadow-lg shadow-gray-600/30">
              Save & Continue
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
}
