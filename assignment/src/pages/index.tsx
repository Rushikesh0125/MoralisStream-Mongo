import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/Container";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface Data {
  name: string;
  userAddress: string;
  email: string;
  mobileNumber: string;
}

export default function Home() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    // Fetch data from your API route
    fetch("/api/getData")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Container data={data} />
    </div>
  );
}
