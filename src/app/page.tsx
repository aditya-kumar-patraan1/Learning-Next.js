import Image from "next/image";
import Link from "next/link";

export default function Home(props: any) {
  console.log(props.params);
  console.log("Home Page Rendered");
  return (
    <div>
      <p>
        <Link href="/kafka">Learn Kafka</Link>
      </p>
      <p>
        <Link href="/figma">Learn Figma</Link>
      </p>
      <p>
        <Link href="/redis_storage">Learn redis Storage</Link>
      </p>
      <p>
        <Link href="/github">Learn Github</Link>
      </p>
    </div>
  );
}
