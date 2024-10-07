import { Autocomplete, TextField } from "@mui/material";
import { useSkillSet } from "../useSkillSet";
import { SyntheticEvent, useEffect } from "react";

export type SkillSet = {
  name: string;
  skills: string[];
};

const predefinedSkills = [];

const predefinedSkillSets: SkillSet[] = [];

const getSkillSets = () => {
  if (typeof window !== "undefined") {
    const customSkillSets = localStorage.getItem("customSkillSets");
    const parsedCustomSkillSets: SkillSet[] = customSkillSets
      ? JSON.parse(customSkillSets)
      : [];

    return predefinedSkillSets.concat(parsedCustomSkillSets);
  }
  return [];
};

export const SkillSetPicker = () => {
  const { setSkillSet, skillSet } = useSkillSet();

  const skillSets = getSkillSets();

  useEffect(() => {
    setSkillSet(skillSets[0]);
    console.log("really?");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(skillSet);

  return (
    <Autocomplete<SkillSet>
      options={skillSets}
      onChange={(_, newValue: SkillSet | null) => {
        console.log(newValue);
        setSkillSet(newValue);
      }}
      renderOption={(props, option) => {
        return (
          <li {...props} key={option.name}>
            {option.name}
          </li>
        );
      }}
      getOptionLabel={(option) => option.name}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      value={skillSet}
      renderInput={(params) => <TextField {...params} label="Скиллсет" />}
    />
  );
};
