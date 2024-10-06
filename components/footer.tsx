import Image from 'next/image';

const Footer = () => {
  return (
    <div>
        <Image src="/images/favicon.ico" alt="" width={256} height={256} className='mx-auto'/>
        <div className='pt-8'>
            <h3 className='mx-auto w-full text-red-600 text-center text-2xl md:text-4xl lg:text-4xl font-bold'>
                AUTO STATS INFO
            </h3>
            <h3 className='mx-auto w-full text-red-600 text-center text-2xl md:text-4xl lg:text-4xl font-bold'>
                ALL RIGHTS RESVERVED
            </h3>
        </div>
    </div>
  );
}

export default Footer;