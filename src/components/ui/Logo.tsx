import Image from "next/image";

type Props = {
  className?: string;
  size?: "sm" | "md";
};

export default function Logo({ className = "", size = "md" }: Props) {
  const height = size === "sm" ? 44 : 56;

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Borderless Group — Connecting You Beyond Borders"
        width={600}
        height={200}
        priority
        className="select-none"
        style={{ height, width: "auto" }}
      />
    </span>
  );
}
