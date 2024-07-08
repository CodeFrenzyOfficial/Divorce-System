import React from "react";
const WhyChooseUs = () => {
  return (
    <div className="why-us">
      <div className="container py-12 mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Why us?</h1>
        <div className="flex flex-col md:flex-row gap-3 items-start justify-center">
          <div className="w-full text-sm bg-white border-r-4 h-full lg:max-w-[360px] px-4 py-2">
            <div className="flex flex-row items-start">
              <img
                src="https://www.onlinedivorce.com/static/multisite/img/multisite/onlinedivorce/redesign/icons/hummer.ed3302405c21.png"
                alt="hummer"
                className="w-auto h-auto mb-4"
              />
              <div className="flex flex-col items-start ml-3">
                <h2 className="text-lg font-semibold">Contested Divorce</h2>
                <p className="text-sm mb-4 text-[#666666]">
                  Hourly Billing - Driving the Average Cost of Divorce to
                  $15,000+
                </p>
              </div>
            </div>

            <p>
              Contested divorces can be lengthy and costly due to spouses being
              unable to agree on one or more key issues, including child
              custody, property division, or spousal support.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Offline and inconvenient process in which both parties often
                hire attorneys to represent their interests.
              </li>
              <li>
                The adversarial nature of a contested divorce can lead to
                heightened emotional stress and strain for both spouses and
                their families.
              </li>
              <li>
                Absent a settlement, the final divorce judgment and terms are
                determined by the court, which may not fully align with the
                preferences of either spouse.
              </li>
            </ul>
          </div>
          <div className="w-full text-sm bg-white h-full border-r-4 lg:max-w-[360px] px-4 py-2">
            <div className="mb-6 text-center">
              <div className="flex flex-row items-center justify-center">
                <img
                  className="mx-auto md:m-0 w-[175px]"
                  src="/img/logo.webp"
                  alt=""
                />
              </div>

              <p className="text-sm mb-4 text-[#666666]">
                The premier uncontested divorce tool
              </p>
            </div>
            <p className="mb-2">
              Fast, affordable, and simple process using our fully-guided
              divorce questionnaire and filing service.
            </p>
            <ul className="list-disc list-inside text-sm">
              <li className="my-4">
                Online process to be completed at your own pace, can get
                documents as quickly as same day.
              </li>
              <li className="my-4">
                Receive ready-to-file forms specific to your jurisdiction and
                situation.
              </li>
              <li className="my-4">
                Easy online access for both spouses, free revisions for 30 days,
                and the ability to save your data longer term. Experienced
                customer support via chat and phone.
              </li>
              <li className="my-4">
                Ancillary services to ensure optimal outcomes, including name
                changes, co-parenting support, and getting started with your
                life after divorce.
              </li>
              <li className="my-4">
                Detailed instructions on how to file with the court or the
                option to purchase our filing service.
              </li>
            </ul>
            <button className="button-gradient w-full max-w-[320px] min-h-[41px] text-center text-white">
              Start now for just $159
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
