import React from "react";

const ValidGround = () => {
  return (
    <div className="container mx-auto w-full p-4 bg-white">
      <h1 className="text-3xl  text-[#666666] text-center font-bold my-4">
        Valid grounds to get divorce in Alabama
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
            Each state has unique grounds on which the court can dissolve the
            marriage. The divorce complaint must state the specific ground upon
            which the divorce is being sought.
          </p>
          <p className="text-base mt-2">
            There are two primary categories of grounds for divorce in Alabama:
            fault and no-fault.
          </p>
          <p className="text-base mt-2">
            No-fault reasons for divorce in Alabama include:
          </p>
          <ul className="list-disc list-inside text-base">
            <li className="my-4">
              Irretrievable breakdown of the marriage without hope of
              reconciliation;
            </li>
            <li className="my-4">
              Complete incompatibility of temperament making it nearly
              impossible to continue living together as spouses;
            </li>
            <li className="my-4">
              Voluntary separation for one year or more before the filing of the
              complaint.
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4 leading-4 flex flex-col gap-2  text-[#666666]">
        <p className="text-base mt-2">General fault-based reasons include:</p>
        <ul className="list-disc list-inside text-base max-w-screen-lg">
          <li className="mt-4">Adultery or infidelity;</li>
          <li className="mt-4">
            Living separate and apart without cohabitation for at least two
            years without the husband supporting the wife (divorce must be filed
            by the wife, who has bona fide resided in the state during that
            period);
          </li>
          <li className="mt-4">
            Imprisonment (for over 4 years if the total sentence is more than 7
            years);
          </li>
          <li className="mt-4">
            Unnatural or deviant sexual behavior either before or after the
            marriage;
          </li>
          <li className="mt-4">
            Habitual drunkenness or habitual use of opium, morphine, cocaine, or
            other drugs, and this addiction began after marriage;
          </li>
          <li className="mt-4">
            Confinement in a mental hospital for five successive years, the
            party from whom a divorce is sought is incurably insane at the time
            of the filing for divorce (requires a certified statement under oath
            from the superintendent of the mental institution where the spouse
            is confined);
          </li>
          <li className="mt-4">
            The wife was pregnant by another at the time of the mar­riage
            without the husband’s knowledge;
          </li>
          <li className="mt-4">
            Physical abuse, attended with danger to life or health, or
            reasonable apprehension that physical violence will occur;
          </li>
          <li className="mt-4">
            Physical and incurable incapability of consummating a marriage.
            [Code of Alabama; Title 30, Chapter 2-1].
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ValidGround;
