"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MagnifyingGlassIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useState, useEffect, ChangeEvent } from "react";
import VacancyCard from "../../../widgets/VacancyCard/ui/VacancyCard";
import styles from "./VacanciesList.module.css";

const VacanciesList = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [queryText, setQueryText] = useState<string>("");

  const ReturnWord = () => {
    switch (true) {
      case isLoading && !buttonClicked: {
        return (
          <div className="flex flex-1 items-center justify-center rounded-lg">
            <div className="flex flex-col items-center gap-1 text-center">
              <div className="motivational-text max-w-md mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">
                  Начните поиск для анализа рынка
                </h2>

                <p className="text-sm text-muted-foreground">
                  Развивайтесь и продвигайтесь вперед, каждый шаг приближает вас
                  к цели!
                </p>
              </div>
            </div>
          </div>
        );
      }

      case isLoading && buttonClicked: {
        return (
          <div className="flex items-center justify-center">
            <div
              className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </div>
        );
      }

      default: {
        return null;
      }
    }
  };

  const handleSearch = () => {
    setButtonClicked(true);
  };

  const handleClear = () => {
    setName("");
    setButtonClicked(false);
  };

  const setNameValue = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
    setButtonClicked(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const searchParams = new URLSearchParams();

      searchParams.set("name", JSON.stringify(name));

      const { vacancies, name: queryText } = await fetch(
        `api/vacancies/getVacanciesByName?${searchParams.toString()}`
      ).then((res) => res.json());

      setData(vacancies);
      setQueryText(queryText);

      setIsLoading(false);
    };

    buttonClicked && fetchData();
  }, [buttonClicked, name]);

  return (
    <div className="flex flex-col gap-6">
      <div className={styles.search}>
        <Input
          name="name"
          onChange={setNameValue}
          placeholder="Поиск вакансии"
          value={name}
        />
        <Button size="icon" onClick={handleClear} disabled={!name}>
          <Cross2Icon className="h-4 w-4" />
        </Button>
        <Separator orientation="vertical" />
        <Button
          size="icon"
          onClick={handleSearch}
          disabled={buttonClicked || !name}
        >
          <MagnifyingGlassIcon className="h-4 w-4" />
        </Button>
      </div>

      {!!data.length ? (
        <div className="flex flex-col gap-6">
          <div>
            {data.length} {queryText}
          </div>
          <div className="h-calc-screen overflow-y-scroll flex flex-col gap-6">
            {data.map((dataItem: any, index: any) => {
              return <VacancyCard dataItem={dataItem} key={index} />;
            })}
          </div>
        </div>
      ) : (
        <ReturnWord />
      )}
    </div>
  );
};

export default VacanciesList;
