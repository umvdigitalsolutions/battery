import ProductsList from "../../components/ProductsList";

export default function ProductsPage() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-red-100 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
            Premium Product Range
          </div>

          <h1 className="text-4xl font-black tracking-tight text-zinc-900 md:text-5xl">
            Our
            <span className="ml-3 bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Products
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
            Explore our wide range of automotive batteries, inverter batteries,
            UPS systems, industrial batteries, solar products, and advanced
            energy storage solutions designed for reliability and performance.
          </p>
        </div>

        {/* Product List */}
        <div className="rounded-[32px] border border-zinc-200 bg-white p-6 shadow-xl">
          <ProductsList />
        </div>
      </div>
    </section>
  );
}