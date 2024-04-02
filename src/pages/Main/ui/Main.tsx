"use client";

import { Key, useEffect, useState } from "react";

const Main = () => {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const searchParams = new URLSearchParams();

    searchParams.set("vacancySearchParams", "react");

    const result = fetch(
      `api/vacancies/getVacanciesAnalysis?${searchParams.toString()}`
    );

    result.then((res) => res.json()).then((data) => setData(data));

    setIsLoading(false);
  }, []);

  const { analysisContent = {} } = data;
  const { avgSalary, skills = [], amount = {} } = analysisContent;
  const { value, valueWithSalary } = amount;

  return isLoading ? (
    <div>загрузка</div>
  ) : (
    <div>
      <div>{`amount: ${value}, valueWithSalary: ${valueWithSalary}`}</div>
      <div>{`avgSalary: ${avgSalary}`}</div>
      {skills.map((skill: any, index: Key) => {
        const { amount, name, percentage } = skill;
        return (
          <div key={index}>
            {name} - {amount} - {percentage}
          </div>
        );
      })}
    </div>
  );
};

export default Main;
