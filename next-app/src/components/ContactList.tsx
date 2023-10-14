import ListItem from "./Listitem";

type ListItems = {
  name: string;
  email: string;
  mobileNumber: string;
};

interface ContactListProps {
  list: ListItems[]; // Rename the prop to 'list'
}

export default function ContactList({ list }: ContactListProps) {
  return (
    <ul className="space-y-4">
      {list.map((item, index) => (
        <ListItem
          key={index}
          name={item.name}
          email={item.email}
          mobileNumber={item.mobileNumber}
        />
      ))}
    </ul>
  );
}
