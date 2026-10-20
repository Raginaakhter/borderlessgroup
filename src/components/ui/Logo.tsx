import Image from "next/image";

type Props = {
  className?: string;
  size?: "sm" | "md";
};

export default function Logo({ className = "", size = "md" }: Props) {
  const height = size === "sm" ? 38 : 48;
  const width = Math.round((322 / 62) * height);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.png"
        alt="Borderless Group — Sydney to Bangladesh"
        width={width}
        height={height}
        priority
        className="h-auto select-none"
        style={{ height, width: "auto" }}
      />
    </span>
  );
}
