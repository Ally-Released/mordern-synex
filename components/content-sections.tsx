"use client"

export function ContentSections() {
  return (
    <div className="bg-gradient-to-b from-gray-950 to-black">
      {/* Permanent or Temporary Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Permanent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c00] to-[#ffa500]">or</span>{" "}
            Temporary?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Synex offers complete flexibility to suit your needs. Whether you require protection for just a short-term
            project or want to integrate Synex permanently into your system, it can handle both without any issues. You
            have full control over how long you use it, and either option comes with hassle-free setup and ongoing
            support to ensure your system stays protected exactly how you want.
          </p>
        </div>
      </section>

      {/* Supported Devices Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Supported{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8c00] to-[#ffa500]">Devices</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Synex is designed to work seamlessly with a wide range of Windows systems. It supports Windows 11 and
            Windows 10 versions 22H2 and 22H2, and is compatible with both AMD and Intel processors. Synex runs smoothly
            on all types of motherboards, including those in laptops, so you don't need to worry about compatibility
            issues. Additionally, there's no need for any special hardware configurations like RAID; it works perfectly
            with your existing SSD or HDD setup out of the box.
          </p>
        </div>
      </section>

      {/* Discord Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Join{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5865f2] to-[#7289da]">Discord</span>{" "}
            for more Info
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            If you have questions not covered here or need help with setup, our Discord community is the best place to
            get quick support. Connect with our team and other users for tips, troubleshooting, and the latest updates.
            For all extra info and real-time assistance, join us at
          </p>
          <div className="inline-block bg-gradient-to-r from-[#5865f2] to-[#7289da] text-white px-8 py-4 rounded-lg font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            discord.gg/synex.
          </div>
        </div>
      </section>
    </div>
  )
}
