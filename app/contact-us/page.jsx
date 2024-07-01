import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto md:px-6 gradient">
        {/* <!-- Section: Design Block --> */}
        <section className="text-center">
          <div className="py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid items-center lg:grid-cols-2">
                <ContactForm />
                <div className="md:mb-12 lg:mb-0">
                  <div className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20  grid place-items-center p-10">
                    <img src="/img/hero.png" alt="" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
