import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* First Row with 2 Cards */}
        <div className="flex gap-6 mb-6">
          <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/pakistan-flag.jpg" alt="pak-flag" layout="fill" objectFit="cover" />
            </div>
            <div className="bg-white text-center font-semibold py-3">Pakistan Flag</div>
          </div>
          <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/america-flag.jpg" alt="Card 2" layout="fill" objectFit="cover" />
            </div>
            <div className="bg-white text-center font-semibold py-3">America Flag</div>
          </div>
        </div>

        {/* Second Row with 3 Cards */}
        <div className="flex gap-6">
          <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/portugal-flag.jpeg" alt="Card 3" layout="fill" objectFit="cover" />
            </div>
            <div className="bg-white text-center font-semibold py-3">Portugal Flag</div>
          </div>
          <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/spain-flag.jpg" alt="Card 4" layout="fill" objectFit="cover" />
            </div>
            <div className="bg-white text-center font-semibold py-3">Spain Flag</div>
          </div>
          <div className="flex-1 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/turkey-flag.jpeg" alt="Card 5" layout="fill" objectFit="cover" />
            </div>
            <div className="bg-white text-center font-semibold py-3">Turkey Flag</div>
          </div>
        </div>
      </div>
    </div>
  );
}
