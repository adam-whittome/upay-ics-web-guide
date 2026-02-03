export default function Subtext(props: { children?: React.ReactNode }) {
  return <p className="text-foreground-secondary italic">{props.children}</p>
}
