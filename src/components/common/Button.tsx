import Link from "next/link";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      className={`flex items-center gap-2 text-sm px-5 text-white py-3 bg-primary rounded-md hover:brightness-90 transition duration-150 ${className}`}
      href=""
    >
      {children}
    </Link>
  );
}
