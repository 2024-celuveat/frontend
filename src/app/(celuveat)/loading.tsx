export default function Loading() {
  return (
    <div className="absolute left-1/2 top-1/3 -translate-x-1/2">
      <div className="h-96 w-96 rounded-full border-b-8 border-t-8 border-gray-200"></div>
      <div className="absolute left-0 top-0 h-96 w-96 animate-spin rounded-full border-b-8 border-t-8 border-main-700"></div>
    </div>
  );
}
