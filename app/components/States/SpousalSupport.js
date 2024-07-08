import React from "react";

const SpousalSupport = () => {
  return (
    <div className="container mx-auto w-full p-4 bg-white">
      <h1 className="text-5xl  text-center font-medium my-4">
        Rules for spousal support in Alabama
      </h1>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-auto">
          <img
            src="https://www.onlinedivorce.com/static/multisite/img/multisite/onlinedivorce/redesign/seo_landing/get-divorce/alabama.png"
            alt="Alabama Courthouse"
            className="h-auto w-auto rounded"
          />
        </div>
        <div className="md:w-2/3 md:pl-4  text-[#666666] flex flex-col gap-2 leading-4 ">
          <p className="text-base mt-2">
            Alimony, also known as spousal support, is sometimes ordered by the
            court to help one spouse live in a manner established during the
            marriage after the divorce. The couple may decide support together
            prior to filing, or the court may award it in a contested case.
          </p>
          <p className="text-base mt-2">
            The court may award rehabilitative (short-term) or more permanent
            alimony to either of the spouses in either lump-sum payments or as
            monthly/yearly payments or both.
          </p>
          <p className="text-base mt-2">
            The judge has discretion in issuing maintenance to either spouse if
            the spouse does not have the means to provide for themselves.
          </p>
          <p className="text-base mt-2">
            This award can be made out of the property belonging to the other
            spouse unless it is a separate prop­erty never used for the common
            benefit of the marriage.
          </p>
          <p className="text-base mt-2">
            In applying the statewide uniform guideline, in determining whether
            a party has a sufficient separate estate to live the same or similar
            lifestyle as they did while married, the courts also consider the
            following:
          </p>
        </div>
      </div>
      <div className="py-4 leading-4 flex flex-col gap-2  text-[#666666]">
        <ul className="list-disc list-inside text-base">
          <li className="my-4">The spouse's separate property;</li>
          <li className="my-4">
            The marital property received by or awarded to the party;
          </li>
          <li className="my-4">
            The liabilities of the party following the division of marital
            property;
          </li>
          <li className="my-4">
            The spouse's earning capacity, taking into account their age,
            health, education, and work experience;
          </li>
          <li className="my-4">
            Any benefits that can help the party in obtaining decent employment;
          </li>
          <li className="my-4">
            Custody arrangements, if any (if the party has primary physical
            custody of a child and for the valid reason cannot seek employment
            outside the home);
          </li>
          <li className="my-4">
            Any other factors the court deems equitable under in a particular
            divorce case.
          </li>
        </ul>
        <p className="text-base mt-2">
          Up to half of a spouse’s retirement benefits can be used for alimony
          if the retirement was accumulated during a marriage of ten years or
          longer.
        </p>
        <p className="text-base mt-2">
          Misconduct of either spouse may be considered in determining whether
          to award maintenance and may bar the right to any maintenance.
        </p>
        <p className="text-base mt-2">
          Any award of maintenance will be terminated if the recipient is living
          openly with a member of the opposite sex or has remarried [Code of
          Alabama: Title 30, Chapters 2-51, 2-52, 2-55, and 2-57].
        </p>
      </div>
    </div>
  );
};

export default SpousalSupport;
