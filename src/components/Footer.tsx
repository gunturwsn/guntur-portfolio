export default function Footer() {
  return (
    <footer className="text-xs text-muted">
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Guntur Wicaksono</span>
      </div>
    </footer>
  );
}
