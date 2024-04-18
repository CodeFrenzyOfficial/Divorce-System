
import { GoLaw } from "react-icons/go";

export default function WhyUs() {
    return (
        <section className="h-auto why-us-section py-10" id="whyus">
            <h2 className="text-5xl font-normal text-white w-full text-center">
                Why Us?
            </h2>

            {/* Cards Section */}
            <div className="w-full grid place-items-center px-10">

                <div className="w-full xl:w-1/2 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-8 my-10">

                    {/* card-1 */}
                    <div className="h-full w-full bg-[#ffffff4e] backdrop-blur-md p-4 rounded-lg">
                        <div className="grid place-items-center">
                            <GoLaw className="text-5xl relative -top-10 text-yellow-400" />
                        </div>

                        <div className="text-white relative -top-6 space-y-4">
                            <div className="space-y-2">
                                <h2 className="text-xl font-bold">
                                    Contested Divorce
                                </h2>
                                <p className="text-gray-100">
                                    Hourly Billing - Driving the Average Cost of Divorce to $15,000+
                                </p>
                            </div>

                            <p className="text-gray-100">
                                Contested divorces can be lengthy and costly due to spouses being unable to agree on one or more key issues, including child custody, property division, or spousal support.
                            </p>

                            <ul className="space-y-5 text-sm">
                                <li className="whyus-list-li">
                                    Offline and inconvenient process in which both parties often hire attorneys to represent their interests.
                                </li>
                                <li className="whyus-list-li">
                                    The adversarial nature of a contested divorce can lead to heightened emotional stress and strain for both spouses and their families.
                                </li>
                                <li className="whyus-list-li">
                                    Absent a settlement, the final divorce judgment and terms are determined by the court, which may not fully align with the preferences of either spouse.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* card-2 */}
                    <div className="h-full w-full bg-[#ffffff4e] backdrop-blur-md p-4 rounded-lg">
                        <div className="grid place-items-center">
                            <img src="/img/logo.webp" alt="" className="text-5xl relative -top-10 text-yellow-400" />
                        </div>

                        <div className="text-white relative -top-6 space-y-4">
                            <div className="space-y-2">
                                <h2 className="text-xl font-bold">
                                    The premier uncontested divorce tool
                                </h2>
                            </div>

                            <p className="text-gray-100">
                                Fast, affordable, and simple process using our fully-guided divorce questionnaire and filing service.
                            </p>

                            <ul className="space-y-5 text-sm">
                                <li className="whyus-list-li">
                                    Online process to be completed at your own pace, can get documents as quickly as same day.
                                    
                                </li>
                                <li className="whyus-list-li">
                                    Receive ready-to-file forms specific to your jurisdiction and situation.
                                    
                                </li>
                                <li className="whyus-list-li">
                                    Easy online access for both spouses, free revisions for 30 days, and the ability to save your data longer term. Experienced customer support via chat and phone.
                                    
                                </li>
                                <li className="whyus-list-li">
                                    Ancillary services to ensure optimal outcomes, including name changes, co-parenting support, and getting started with your life after divorce.
                                    Detailed instructions on how to file with the court or the option to purchase our filing service.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
