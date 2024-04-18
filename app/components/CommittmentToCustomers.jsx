import Container from "./container";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import { HiDocumentSearch } from "react-icons/hi";
import { MdDocumentScanner } from "react-icons/md";
import { RiUserFollowFill } from "react-icons/ri";
import { TbClockHeart } from "react-icons/tb";
import { FaHandshakeSimple } from "react-icons/fa6";

export default function CommittmentToCustomers() {
    return (
        <Container className={"h-auto lg:px-20 xl:px-40 p-4 space-y-6"}>
            <div className="space-y-2">
                <h2 className="text-4xl font-semibold">
                    Commitment to customers
                </h2>
                <p className="text-gray-500 text-lg">
                    Our tools have helped over 500,000 people get quick and stress-free divorce while saving money in the process.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">

                {/* Card-1 */}
                <div className="space-y-4 p-6 rounded-lg shadow-xl shadow-gray-400/10 transition-all duration-300 hover:shadow-gray-400/20 cursor-pointer border border-solid border-gray-100/50">
                    {/* Icon */}
                    <FaHandHoldingDollar className="bg-green-500 text-white rounded-full p-2 text-5xl lg:text-6xl" />
                    {/* Heading With small text */}
                    <div className="space-y-2">
                        <h2 className="text-lg lg:text-xl font-semibold">Save Money</h2>
                        <p className="text-gray-400">
                            Cost effective solution designed to support you without lawyers fees.
                        </p>
                    </div>
                </div>

                {/* Card-2 */}
                <div className="space-y-4 p-6 rounded-lg shadow-xl shadow-gray-400/10 transition-all duration-300 hover:shadow-gray-400/20 cursor-pointer  border border-solid border-gray-100/50">
                    {/* Icon */}
                    <FaArrowsTurnToDots className="bg-purple-500 text-white rounded-full p-2 text-5xl lg:text-6xl" />
                    {/* Heading With small text */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">
                            Easy to follow online process
                        </h2>
                        <p className="text-gray-400">
                            Our intelligent questionnaire gives you specific instruction for your situation.
                        </p>
                    </div>
                </div>

                {/* Card-3 */}
                <div className="space-y-4 p-6 rounded-lg shadow-xl shadow-gray-400/10 transition-all duration-300 hover:shadow-gray-400/20 cursor-pointer border border-solid border-gray-100/50">
                    {/* Icon */}
                    <HiDocumentSearch className="bg-pink-500 text-white rounded-full p-2 text-5xl lg:text-6xl" />
                    {/* Heading With small text */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Specific forms for filing location</h2>
                        <p className="text-gray-400">
                            Up-to-date forms and instructions for your specific court to ensure success.
                        </p>
                    </div>
                </div>

                {/* Card-4 */}
                <div className="space-y-4 p-6 rounded-lg shadow-xl shadow-gray-400/10 transition-all duration-300 hover:shadow-gray-400/20 cursor-pointer border border-solid border-gray-100/50">
                    {/* Icon */}
                    <MdDocumentScanner className="bg-yellow-500 text-white rounded-full p-2 text-5xl lg:text-6xl" />
                    {/* Heading With small text */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">We can file your forms with the court</h2>
                        <p className="text-gray-400">
                            We can handle court filings and serving your spouse.
                        </p>
                    </div>
                </div>

                {/* Card-5 */}
                <div className="space-y-4 p-6 rounded-lg shadow-xl shadow-gray-400/10 transition-all duration-300 hover:shadow-gray-400/20 cursor-pointer border border-solid border-gray-100/50">
                    {/* Icon */}
                    <RiUserFollowFill className="bg-green-400 text-white rounded-full p-2 text-5xl lg:text-6xl" />
                    {/* Heading With small text */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Wraparound support</h2>
                        <p className="text-gray-400">
                            Additional support services to help you navigate divorce — help with kids, the house, financial matters and more.
                        </p>
                    </div>
                </div>

                {/* Card-6 */}
                <div className="space-y-4 p-6 rounded-lg shadow-xl shadow-gray-400/10 transition-all duration-300 hover:shadow-gray-400/20 cursor-pointer border border-solid border-gray-100/50">
                    {/* Icon */}
                    <TbClockHeart className="bg-yellow-400 text-white rounded-full p-2 text-5xl lg:text-6xl" />
                    {/* Heading With small text */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Life after divorce</h2>
                        <p className="text-gray-400">
                            Expert-guided post-divorce support to help you happily move on with your life.
                        </p>
                    </div>
                </div>

                {/* Card-7 */}
                <div className="space-y-4 p-6 rounded-lg shadow-xl shadow-gray-400/10 transition-all duration-300 hover:shadow-gray-400/20 cursor-pointer border border-solid border-gray-100/50">
                    {/* Icon */}
                    <FaHandshakeSimple className="bg-orange-500 text-white rounded-full p-2 text-5xl lg:text-6xl" />
                    {/* Heading With small text */}
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold">Access to independent attorneys for legal questions</h2>
                        <p className="text-gray-400">
                            We can connect you with licensed attorneys in your state to answer questions about your case.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
