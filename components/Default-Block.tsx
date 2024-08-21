export default function DefaultBlock({
  children,
  className,
}: {
  children: any;
  className?: string;
}) {
  return (
    <div
      className={`bg-neutral-800 p-5 rounded-sm border-b border-b-neutral-700 ${className}`}
    >
      {children}
    </div>
  );
}
