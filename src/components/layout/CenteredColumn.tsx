export default function CenteredColumn(props: { children?: React.ReactNode }) {
  return <div className="flex flex-row justify-center">
    <div className="flex flex-col w-xl p-5 gap-3">
      {props.children}
    </div>
  </div>
}
