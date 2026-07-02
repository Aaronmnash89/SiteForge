interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-500">
      {children}
    </span>
  );
}