
type HeroLiteProps = {
    title: string;
    subtitle: string;
}

const HeroLite = (props: HeroLiteProps) => {
    return (
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
            mb-20
          "
        >
          <h1 className="mx-auto">{props.title}</h1>
          <h2 className="mx-auto mt-8 shadow-lg p-4 bg-[#1e1818]">{props.subtitle}</h2>
        </div>
    )
}

export default HeroLite;