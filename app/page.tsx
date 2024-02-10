import Image from "next/image";

import { Center, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Center>
        <Heading size='4xl'>하임뱅크</Heading>
        <Image
          src="/logo.png"
          alt="하임뱅크 로고"
          width={500}
          height={500}
        />
      </Center>

    </main>
  );
}
