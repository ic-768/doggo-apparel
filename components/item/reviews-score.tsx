import { Star } from "lucide-react";

export default function ReviewsScore() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">(128 reviews)</span>
    </div>
  );
}
