import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import "./../../index.css";
import classes from "./Accordion.module.sass";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {data.map((item) => (
        <Accordion
          open={open === item.id}
          icon={<Icon id={item.id} open={open} />}
          key={item.id}
        >
          <AccordionHeader
            onClick={() => handleOpen(item.id)}
            className="font-inter"
          >
            <h2 className="font-inter text-black ">{item.position}</h2>
          </AccordionHeader>
          <AccordionBody className="flex">
            {item.humans.map((human) => (
              <div key={human.email} className="mr-8">
                <h1 className="font-inter text-3xl">{human.name}</h1>
                <h3 className="font-inter text-lg">{human.nickname}</h3>
                <hr className="max-w-xs" />
                <a href={`mailto:${human.email}`} className="font-inter text-lg">
                  {human.email}
                </a>
              </div>
            ))}
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}

const data = [
  {
    id: 1,
    position: "Lead Developer",
    humans: [
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com",
      },
    ],
  },
  {
    id: 2,
    position: "Back-end Developer",
    humans: [
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com1",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com2",
      },
    ],
  },
  {
    id: 3,
    position: "Front-end Developer",
    humans: [
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com1",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com2",
      },
    ],
  },
  {
    id: 4,
    position: "Lead Designer",
    humans: [
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com1",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com2",
      },
    ],
  },
  {
    id: 5,
    position: "Python Developer",
    humans: [
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com1",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com2",
      },
    ],
  },
  {
    id: 6,
    position: "C# Developer",
    humans: [
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com1",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com2",
      },
    ],
  },
  {
    id: 7,
    position: "C++ Developer",
    humans: [
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com1",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com2",
      },
    ],
  },
  {
    id: 8,
    position: "Designer",
    humans: [
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com1",
      },
      {
        name: "Bogdan Tanov",
        nickname: "NullGuy  HCoder",
        email: "playmister00@gmail.com2",
      },
    ],
  },
];
