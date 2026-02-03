export default function Heading(props: { children?: React.ReactNode }) {
  return <p className="text-3xl font-bold">{props.children}</p>
}
