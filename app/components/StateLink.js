"use client";
import React from "react";
import { useRouter } from "next/navigation";

const StateLink = ({ state }) => {
  const navigation = useRouter();
  const navi = navigation.push;
  const url = "/state";
  return (
    <button
      key={state}
      onClick={() => {
        navi(navigation.push(url));
      }}
    >
      <a href={url} className="text-sm text-blue-600 hover:text-blue-800">
        Divorce in {state}
      </a>
    </button>
  );
};

export default StateLink;
