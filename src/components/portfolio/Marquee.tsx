const items = [
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "REST APIs",
  "Razorpay",
  "Git / GitHub",
  "DSA",
];

export function Marquee() {
  return (
    <div className="relative bg-background border-y border-border/60 py-6 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10" />
      <div className="flex marquee-track w-max">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-6 text-muted-foreground">
            <span className="font-serif text-2xl whitespace-nowrap">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          </div>
        ))}
      </div>
    </div>
  );
}
