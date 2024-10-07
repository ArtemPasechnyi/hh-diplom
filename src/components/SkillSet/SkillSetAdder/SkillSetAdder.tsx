import { PlusIcon } from '@radix-ui/react-icons';
import { useReducer, useState } from 'react';
import { SkillSet } from '../SkillSetPicker/SkillSetPicker';

import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

export const SkillSetAdder = () => {
  const [_, setIsOpen] = useState<boolean>(false);

  const [skills, setSkills] = useState<string[]>([]);
  const [name, setName] = useState<string>('');
  const [newSkillName, setNewSkillName] = useState<string>('');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" onClick={() => setIsOpen(true)}>
          <PlusIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Добавить СкиллСет</DialogTitle>
          <DialogDescription>
            Сохраните свой СкиллСет чтобы не потерять
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
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
              <div style={{ display: 'flex' }}>
                <Input
                  value={newSkillName}
                  onChange={(event) => {
                    setNewSkillName(event.currentTarget.value);
                  }}
                />
                <Button
                  onClick={() => {
                    setSkills((prevState) => {
                      return [...prevState, newSkillName];
                    });
                    setNewSkillName('');
                  }}
                >
                  <PlusIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={() => {
              const customSkillSets = localStorage.getItem('customSkillSets');
              const parsedCustomSkillSets: SkillSet[] = customSkillSets
                ? JSON.parse(customSkillSets)
                : [];

              localStorage.setItem(
                'customSkillSets',
                JSON.stringify(parsedCustomSkillSets.concat([{ skills, name }]))
              );
              setIsOpen(false);
            }}
          >
            Добавить СкиллСет
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
