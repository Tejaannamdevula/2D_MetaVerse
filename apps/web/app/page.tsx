import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <div>
        <Button>Hello World!!</Button>
      </div>
    </div>
  );
}
