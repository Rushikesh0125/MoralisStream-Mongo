import Image from "next/image";
import cnt from "../../media/cnt.png";

type ListItems = {
  name: string;
  email: string;
  mobileNumber: string;
};

export default function ListItem(data: ListItems) {
  return (
    <div>
      <li className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image
              className="w-8 h-8 rounded-full"
              src={cnt}
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {data.name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {data.email}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibol text-white">
            {data.mobileNumber}
          </div>
        </div>
      </li>
    </div>
  );
}
