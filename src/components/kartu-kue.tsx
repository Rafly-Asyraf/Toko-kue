import Link from "next/link";
import Image from "next/image";
import { Kue } from "@/types/kue";

interface KartuKueProps {
  kue: Kue;
}

export default function KartuKue({ kue }: KartuKueProps) {
  return (
    <Link
      href={`/kue/${kue.id}`}
      className="block border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow bg-white overflow-hidden"
    >
      <Image
        src={kue.gambarUrl}
        alt={kue.nama}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
        priority
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {kue.nama}
        </h3>

        <p className="text-sm text-gray-600 mt-1 truncate">
          {kue.deskripsiSingkat}
        </p>

        <p className="text-lg font-bold text-pink-500 mt-2">
          Rp {kue.harga.toLocaleString("id-ID")}
        </p>

        <button className="mt-3 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md text-sm">
          Lihat Detail / Tambah ke Keranjang
        </button>
      </div>
    </Link>
  );
}
