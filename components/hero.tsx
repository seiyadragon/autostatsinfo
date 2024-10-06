import Image from "next/image";

export default function Header() {
  return (
    <>
      <div>
        <div 
          className="
            w-full
            text-center 
            font-bold
            text-3xl
            text-red-600
            mx-auto
            -mt-10
            md:text-5xl
            lg:text-7xl
          "
        >
          <h1 className="mx-auto">HAVE CONFIDENCE ON YOUR DRIVE...</h1>
          <h2 className="mx-auto mt-8 shadow-lg p-4 bg-[#1e1818]">KNOW YOUR RIDE</h2>
        </div>
        <Image
          className="w-full -mt-12 md:-mt-32 lg:-mt-32"
          src="https://rffbeaemmafgvbmkzoes.supabase.co/storage/v1/object/sign/gallery/AWSOME%20SUPRA.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnYWxsZXJ5L0FXU09NRSBTVVBSQS5wbmciLCJpYXQiOjE3MjgwMjUwNzcsImV4cCI6MzE3MDU2NDg5MDc3fQ.s0Hd_KR7w8QJAtsLWZg71LKh1bbuhAS4d48zbzBdHeU&t=2024-10-04T06%3A57%3A57.136Z"
          alt=""
          width={1920}
          height={1080}
        />
      </div>
    </>
  );
}
