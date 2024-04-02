"use client";

import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    const searchParams = new URLSearchParams();

    searchParams.set("vacancySearchParams", "react");

    fetch(`api/vacancies/getVacanciesAnalysis?${searchParams.toString()}`);
  }, []);

  return <div>main</div>;
};

export default Main;
