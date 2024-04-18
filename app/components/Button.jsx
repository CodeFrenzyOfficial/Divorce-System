import Link from 'next/link'

export default function Button({ innerText, link, className }) {
    const __link = link.toString();
    return (
        <div className="hidden space-x-4 lg:flex">
            <Link
                href={__link}
                className="px-6 py-3 text-lg font-medium text-center text-white bg-indigo-600 rounded-md transition-all duration-300 hover:opacity-80 shadow-lg shadow-gray-600/30"
            >
                {innerText ? innerText : "button"}
            </Link>
        </div>
    )
}
