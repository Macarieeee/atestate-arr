export default function QuestionImages({ images }: { images?: string[] }) {
  if (!images?.length) return null;
  return (
    <div className="my-2 flex flex-wrap gap-2">
      {images.map((path, index) => (
        <img key={path} src={`${import.meta.env.BASE_URL}${path}`} alt={`Ilustrația întrebării ${index + 1}`} className="max-h-52 max-w-full object-contain" />
      ))}
    </div>
  );
}
