import { Box, Button, IconButton, Input, Modal } from "@mui/material";
import { PlusIcon } from "@radix-ui/react-icons";
import { useReducer, useState } from "react";
import { SkillSet } from "../SkillSetPicker/SkillSetPicker";

export const SkillSetAdder = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [skills, setSkills] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [newSkillName, setNewSkillName] = useState<string>("");

  console.log(skills);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <PlusIcon />
      </IconButton>

      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50vh",
            height: "50vh",
          }}
        >
          <div>
            <Input
              value={name}
              onChange={(event) => {
                setName(event.currentTarget.value);
              }}
            />
            <div>
              <div>
                {skills.map((skill, index) => {
                  return <div key={skill + index}>{skill}</div>;
                })}
              </div>
              <div style={{ display: "flex" }}>
                <Input
                  value={newSkillName}
                  onChange={(event) => {
                    setNewSkillName(event.currentTarget.value);
                  }}
                />
                <IconButton
                  onClick={() => {
                    setSkills((prevState) => {
                      return [...prevState, newSkillName];
                    });
                    setNewSkillName("");
                  }}
                >
                  <PlusIcon />
                </IconButton>
              </div>
            </div>
            <Button
              onClick={() => {
                const customSkillSets = localStorage.getItem("customSkillSets");
                const parsedCustomSkillSets: SkillSet[] = customSkillSets
                  ? JSON.parse(customSkillSets)
                  : [];

                localStorage.setItem(
                  "customSkillSets",
                  JSON.stringify(
                    parsedCustomSkillSets.concat([{ skills, name }])
                  )
                );
                setIsOpen(false);
              }}
            >
              Добавить скиллсет
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};
