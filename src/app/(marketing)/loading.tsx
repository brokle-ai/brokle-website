export default function MarketingLoading() {
  return (
    <div className="container px-4 mx-auto py-20">
      <div className="max-w-4xl mx-auto space-y-8 animate-pulse">
        <div className="h-12 bg-muted rounded-lg w-3/4 mx-auto" />
        <div className="h-6 bg-muted rounded w-1/2 mx-auto" />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-muted rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}
