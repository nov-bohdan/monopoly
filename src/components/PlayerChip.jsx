export default function PlayerChip({ color, transformation }) {
  const className =
    "h-[35px] w-[35px] rounded-full absolute row-start-1 row-end-2 col-start-1 col-end-2 col-span-1 border-2 border-black " +
    transformation;
  return <div className={className} style={{ backgroundColor: color }}></div>;
}
