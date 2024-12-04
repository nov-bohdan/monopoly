import bgImage from "../assets/bg.jpg";

export default function BoardCenter() {
  return (
    <div
      className="bg-slate-100 col-start-2 col-end-11 row-start-2 row-end-11 bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  );
}
