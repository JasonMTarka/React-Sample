// @ts-nocheck

interface NodeProps {
  val: any
}

export default function Node({ val }: NodeProps) {
  return (
    <div
      className="form-control form-control-sm"
      type="text"
      placeholder={val}
      disabled={true}
    >
      {val}
    </div>
  );
}
