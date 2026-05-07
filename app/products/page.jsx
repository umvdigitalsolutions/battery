import ProductsList from "../../components/ProductsList";

export default function ProductsPage() {
  return (
    <section className="relative w-full overflow-x-hidden bg-white py-8 sm:py-16">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-80px] top-0 h-[240px] w-[240px] rounded-full bg-red-100 blur-3xl sm:left-0 sm:h-[350px] sm:w-[350px]" />
        <div className="absolute right-[-80px] bottom-0 h-[240px] w-[240px] rounded-full bg-blue-100 blur-3xl sm:right-0 sm:h-[350px] sm:w-[350px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center sm:mb-14">
          <div className="mb-4 inline-flex max-w-full items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 sm:px-4 sm:text-sm">
            Premium Product Range
          </div>

          <h1 className="balanced-heading break-words text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Our
            <span className="ml-2 bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent sm:ml-3">
              Products
            </span>
          </h1>

          <p className="justified-copy mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Explore our wide range of automotive batteries, inverter batteries,
            UPS systems, industrial batteries, solar products, and advanced
            energy storage solutions designed for reliability and performance.
          </p>
        </div>

        {/* Product List */}
        <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2 shadow-lg sm:rounded-[28px] sm:p-6 sm:shadow-xl">
          <ProductsList />
        </div>
      </div>
    </section>
  );
}