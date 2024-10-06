function RestaurantCardRowSkeleton() {
  return (
    <div className="flex gap-12">
      <div className="h-[112px] w-[112px] animate-pulse overflow-hidden rounded-[8px] bg-gray-200" />
      <div className="relative flex flex-1 flex-col">
        <div className="mt-2 h-16 w-3/4 animate-pulse rounded-[6px] bg-gray-200" />
        <div className="mt-4 h-12 w-1/2 animate-pulse rounded-[6px] bg-gray-200" />
        <div className="mt-4 h-[13px] w-3/4 animate-pulse rounded-[6px] bg-gray-200" />
        <div className="absolute bottom-0 left-0 h-[13px] w-3/4 animate-pulse rounded-[6px] bg-gray-200" />
      </div>
    </div>
  );
}

export default RestaurantCardRowSkeleton;
