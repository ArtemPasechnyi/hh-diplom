import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dayjs from "dayjs";
import Link from "next/link";
import { FC } from "react";
import { IVacancyCard } from "../model/interfaces";

export const VacancyCard: FC<IVacancyCard> = (props) => {
  const { dataItem = {} } = props;
  const {
    name,
    address = {},
    created_at,
    employer,
    employment,
    experience,
    alternate_url,
    salary = {},
  } = dataItem;
  const { name: employerName, alternate_url: employerUrl } = employer;
  const { name: employmentName } = employment;
  const { name: experienceName } = experience;

  //   const { from, to, currency } = salary;

  return (
    <Card className="max-w-3xl">
      <CardHeader>
        <CardTitle>
          <Link href={alternate_url}>
            <div className="no-underline hover:underline decoration-3">
              {name}
            </div>
          </Link>
        </CardTitle>
        {salary?.from && <p className="font-bold text-2xl">{salary?.from}</p>}
      </CardHeader>
      <CardContent>
        {address?.city && (
          <p>
            <span className="font-bold">Город:</span> {address?.city}
          </p>
        )}
        <p className="flex flex-row items-center gap-4">
          <span className="font-bold">Компания:</span>{" "}
          <Link href={employerUrl}>
            <div className="no-underline hover:underline decoration-1">
              {employerName}
            </div>
          </Link>
        </p>
        <p>
          <span className="font-bold">Тип занятости:</span> {employmentName}
        </p>
        <p>
          <span className="font-bold">Опыт:</span> {experienceName}
        </p>
        <p>
          <span className="font-bold">Дата создания:</span>{" "}
          {dayjs(created_at).format("DD.MM.YYYY")}
        </p>
      </CardContent>

      <CardFooter>
        <Link href={alternate_url}>
          <Button>Подробная информация</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
