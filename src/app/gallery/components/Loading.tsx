export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[400px]">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-green-500 border-r-blue-500 border-b-green-500 border-l-blue-500 rounded-full animate-spin"></div>
        <div className="absolute top-2 left-2 w-16 h-16 border-4 border-t-green-400 border-r-transparent border-b-blue-400 border-l-transparent rounded-full animate-spin-slow"></div>
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium">Loading gallery...</p>
    </div>
  );
} 