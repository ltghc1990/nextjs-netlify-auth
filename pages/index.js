import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Hero />

      <div className="mb-6">
        <h3 className="font-semibold mb-4">Welcome to Gaming Vibes</h3>
        <p className="text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio ipsam
          explicabo a molestias officiis at nisi voluptas et, sed error
          repudiandae possimus minima maiores veniam voluptatibus nesciunt
          tenetur iusto ut. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Optio ipsam explicabo a molestias officiis at nisi voluptas et,
          sed error repudiandae possimus minima maiores veniam voluptatibus
          nesciunt tenetur iusto ut.
        </p>
      </div>
    </div>
  );
}
