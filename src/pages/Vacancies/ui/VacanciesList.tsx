"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MagnifyingGlassIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import { VacancyCard } from "../widgest/VacancyCard/ui/VacancyCard";
import styles from "./VacanciesList.module.css";

export const VacanciesList = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  const [name, setName] = useState<string>("");

  const ReturnWord = () => {
    switch (true) {
      case isLoading && !buttonClicked: {
        return <div>Начни поиск</div>;
      }

      case isLoading && buttonClicked: {
        return <div>Поиск...</div>;
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

      const result = await fetch(
        `api/vacancies/getVacanciesByName?${searchParams.toString()}`
      ).then((res) => res.json());

      setData(result);

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
      <ReturnWord />
      {data.map((dataItem: any, index: any) => {
        return <VacancyCard dataItem={dataItem} key={index} />;
      })}
    </div>
  );
};
