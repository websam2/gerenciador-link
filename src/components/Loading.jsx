import loading from "/public/Ripple-2.3s-200px.svg";

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <img className="w-full" src={loading} alt="Loading" />
    </div>
  );
}