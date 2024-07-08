import React from "react";

const PropertyDivision = () => {
  return (
    <div className="container mx-auto w-full p-4 bg-white">
      <h1 className="text-5xl  text-center font-medium my-4">
        Property division in Alabama
      </h1>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-auto">
          <img
            src="https://www.onlinedivorce.com/static/multisite/img/multisite/onlinedivorce/redesign/seo_landing/get-divorce/alabama.png"
            alt="Alabama Courthouse"
            className="h-auto w-auto rounded"
          />
        </div>
        <div className="md:w-2/3 md:pl-4 text-[#666666] flex flex-col gap-2 leading-4 ">
          <p className="text-base">
            When a couple chooses to divorce in Alabama, they must distribute
            property fairly and agreeably. Alabama is an “equitable
            distribution” state, and the judge will have full discretion to
            divide any marital assets equitably. However, non-marital property
            is awarded only to the spouse who owns it. This typically includes
            property acquired before marriage or after the date of separation,
            gifts, and inheritances.
          </p>
          <p className="text-base mt-2">
            Exceptions may include if the non-marital assets are commingled
            during the marriage or if the gifts and inheritances were used for
            the common benefit of both spouses. The property division must be
            equitable, which does not necessarily mean exactly equal. The court
            can consider marital fault in the division of property [Alabama Case
            Law, Code of Alabama: Title 30, Chapter 30-2-51].
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDivision;
