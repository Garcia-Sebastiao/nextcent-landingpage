export default function Container({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`w-full lg:px-36 xs:px-10 py-12 flex ${className}`}>
      {children}
    </section>
  );
}
