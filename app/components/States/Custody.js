import React from "react";

const Custody = () => {
  return (
    <div className="container mx-auto w-full p-4 bg-white">
      <h1 className="text-5xl   text-center font-medium my-4">
        Custody of the child in Alabama
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
            In Alabama divorce cases, the court can choose to award either joint
            or sole custody to either parent or both parents. The state of
            Alabama defines the term joint legal custody not as who has the
            child in his or her possession but instead as a form of “shared
            parental rights and responsibilities.”
          </p>
          <p className="text-base mt-2">
            Alabama courts can grant child custody upon divorce to either parent
            based on the consideration of the following factors:
          </p>
          <ul className="list-disc list-inside text-base">
            <li className="my-4">
              Best interests of the child or children: When minor children are
              involved in a divorce, the Alabama courts can do whatever it takes
              to lessen the emotional trauma. If the parents cannot reach an
              agreement regarding the issues in which the children are involved,
              the court will determine custody at its discretion.
            </li>
            <li className="my-4">Age and sex of the child;</li>
            <li className="my-4">
              The mental and emotional health of the parents;
            </li>
          </ul>
        </div>
      </div>
      <div className="py-4 leading-4 flex flex-col gap-2  text-[#666666]">
        <p className="text-base mt-2">General fault-based reasons include:</p>
        <ul className="list-disc list-inside text-base max-w-screen-lg">
          <li className="mt-4">
            Each parent’s ability to provide a safe and nurturing environment
            for the child;
          </li>
          <li className="mt-4">The safety and wellbeing of the child;</li>
          <li className="mt-4">The moral character of the parents;</li>
          <li className="mt-4">
            The relationship between the children and each parent;
          </li>
          <li className="mt-4">
            Any special needs of the child, if applicable.
          </li>
        </ul>
        <p className="text-base mt-2">
          All parents are given fair and equal consideration when determining
          custody, and no preference is given to one parent versus the other
          based on gender.
        </p>
        <p className="text-base mt-2">
          Joint custody is recognized and supported as preferable to sole
          custody when the parents have shown the ability to act in the best
          interest of their children. Yet, shared legal custody does not
          necessarily mean equal physical custody.
        </p>
        <p className="text-base mt-2">
          In determining whether joint custody is in the best interest of the
          child, the court shall consider the same factors considered in
          awarding sole legal and physical custody, including the following:
        </p>
        <ul className="list-disc list-inside text-base">
          <li className="my-4">The parents' wishes regarding joint custody;</li>
          <li className="my-4">
            Both parents' ability to cooperate with each other;
          </li>
          <li className="my-4">
            Each parent's ability to encourage the child's contact with the
            other parent;
          </li>
          <li className="my-4">
            The geographic proximity of the parents to each other, their
            schedules, and other logistics, as factors important for
            considerations of joint physical custody;
          </li>
          <li className="my-4">
            Any history of actual and potential child abuse and spouse abuse.
          </li>
        </ul>
        <p className="text-base mt-2">
          Alabama typically favors joint legal custody (but not equal physical
          custody). If both parents request joint custody, the presumption is
          that joint custody is in the child's best interest.
        </p>
        <p className="text-base mt-2">
          If the child is mature enough to express a preference, their wishes
          can also be considered.
        </p>
        <p className="text-base mt-2">
          However, there is a legal presumption against giving custody to any
          person who has inflicted violence against either a spouse or a child.
          In abuse cases, the judge is required to consider any history of
          domestic abuse and may not consider the fact that a parent or spouse
          has relocated to avoid abuse.
        </p>
        <p className="text-base mt-2">
          Thus, joint legal or physical custody may be awarded. However, if the
          wife abandons the husband and the children are over seven years old,
          the husband is granted custody if he is deemed suitable. Grandparents
          can also be granted visitation rights [Code of Alabama: Title 30,
          Chapters 3-1, 3-5 to 3-6.1, 3-60 to 3-71, 3-110 to 3-115, 3-170 to
          3-179, 3-190 to 3-200; and Alabama Case Law].
        </p>
      </div>
    </div>
  );
};

export default Custody;
