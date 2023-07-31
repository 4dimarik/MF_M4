export default function Link({ href, onClick, label }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="underline text-sky-500 hover:text-sky-800"
    >
      {label}
    </a>
  );
}
