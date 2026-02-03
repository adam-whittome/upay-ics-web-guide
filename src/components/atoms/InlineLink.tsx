export default function InlineMono({ newTab = false, ...props }:
  { href?: string, newTab?: boolean, children?: React.ReactNode }
) {
  return newTab ? (
    <a href={props.href} className="underline">{props.children}</a>
  ) : (
    <a href={props.href} target="_blank" rel="noopener noreferrer" className="underline">{props.children}</a>
  );
}
