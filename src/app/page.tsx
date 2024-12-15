import AirMaxSlider from "@/components/imageslider";
import Mainhero1 from "@/components/mainhero1";
import Mainhero3 from "@/components/mainhero3";
import Mainhero4 from "@/components/mainhero4";
import Mainhero5 from "@/components/mainhero5";
import Mainhero6 from "@/components/mainhero6";
import Mainhero7 from "@/components/mainhero7";

export default function Home() {
  return (
    <>
      {/* this is my body component */}
      <main>
        <div className=" bg-[#F5F5F5] text-center">
          <div className="text-lg font-medium">Hello nike app</div>
          <div>download the app to access everything nike Get your graet</div>
        </div>

        <Mainhero1 />

        <div className=" Mainhero2 px-9 mt-16">
          <AirMaxSlider />
        </div>

        <Mainhero3 />

        <Mainhero4 />

        <Mainhero5 />

        <Mainhero6 />

        <Mainhero7 />
      </main>
    </>
  );
}
