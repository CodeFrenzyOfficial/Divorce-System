import Link from 'next/link'

export default function ContactForm() {
    return (
        <div className="bg-white rounded-[8px] w-full lg:w-[80%] shadow-lg p-4 lg:p-8">
            <div>
                <h3 className="text-[35px] mb-[5px]">See if you Qualify</h3>
                <p className="text-[17px] mb-[5px]">
                    Can you and your spouse agree to the division of property, assets and
                    all child related issues?
                </p>
            </div>

            <div className="flex mb-[20px]">
                <span className="text-[18px] mr-[20px]">
                    <input className="mr-[5px]" type="radio" id="yes" />
                    <label htmlFor="yes">Yes</label>
                </span>

                <span className="text-[18px]">
                    <input className="mr-[5px]" type="radio" />
                    No
                </span>
            </div>

            <div className="mb-[20px]">
                <select
                    name=""
                    id=""
                    className="w-full py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
                >
                    <option value="Alabama">Alabama</option>
                </select>
            </div>

            <div className="w-full flex justify-between mb-[20px]">
                <input
                    className="w-[45%] py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                />
                <input
                    className="w-[45%] py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name"
                />
            </div>

            <div className="mb-[20px]">
                <input
                    className="w-full py-[16px] px-[10px] border-[1px] rounded-[5px] outline-none transition-all duration-200 focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)]"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Your Email"
                />
            </div>

            <Link href="/step-form">
                <button className="w-full bg-[#ffc137] py-[16px] px-[10px] border-[1px] rounded-[5px] mb-[10px] outline-none transition-all duration-200 hover:focus:shadow-[0px_0px_8px_rgba(102,175,233,.6)] ">
                    Check Eligibility
                </button>
            </Link>

            <span className="text-[14px] text-gray-600 w-full">By clicking “Check Eligibility”
                you agree to the <a href="#" className="font-bold">Terms of Service</a></span>
        </div>
    )
}
