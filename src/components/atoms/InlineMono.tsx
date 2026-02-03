export default function InlineMono(props: { children?: React.ReactNode }) {
  return <span className="font-mono bg-background-secondary px-1 pt-0.5 rounded-sm">{props.children}</span>
}
