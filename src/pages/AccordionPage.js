import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "asdfasdf",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want.You can use React on any project you wantYou can use React on any project you wantYou can use React on any project you wantYou can use React on any project you want"
    },
    {
      id: "jhgf",
      label: "Can I use Javascript  on a project?",
      content: "You can use React on any project youYou can use React on any project youYou can use React on any project youYou can use React on any project youYou can use React on any project you"
    },
    {
      id: "werq",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want.You can use React on any project you wantYou can use React on any project you wantYou can use React on any project you wantYou can use React on any project you want"
    }
  ]

  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default AccordionPage;
