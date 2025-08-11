import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const images = [
    { id: 1, img: "/assets/img/services/9afa8704-cbe4-4101-a4e4-0bc9f3f10efa 1.png" },
    { id: 2, img: "/assets/img/services/Bear Sculptures Display.png" },
    { id: 3, img: "/assets/img/services/Blurred Data Center View.png" },
    { id: 4, img: "/assets/img/services/Minimalist Chair Design.png" },
    { id: 5, img: "/assets/img/services/High-Quality Audio Speakers.png" },
    { id: 6, img: "/assets/img/services/Server Rack Close-Up.png" }
  ];

  const [selectedImage, setSelectedImage] = useState(images[0].img);
  const buttons = t("services.buttons", { returnObjects: true });

  return (
    <>
      <div className="w-full flex flex-col items-center text-center gap-4 px-4 py-10">
        <div className="flex items-center gap-2 text-[16px] font-[400] text-[#0A40C6] bg-[#E7ECF9] px-4 py-2 rounded-full w-fit">
          <img src="/assets/img/services/Layer_x0020_1 (1).svg" className="w-[20px] h-[20px]" alt="" />
          <h1 className="text-[24px] font-[400] text-[#0A40C6]">{t("services.badge")}</h1>
        </div>
        <div>
          <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-[500] text-[#000000]">
            {t("services.heading")}
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:justify-between lg:items-center justify-center items-center min-h-screen lg:h-screen py-10 px-4 md:px-8 lg:px-15 gap-6 lg:gap-2">
        <div className="flex flex-col gap-6 w-full md:w-auto">
          {buttons.map((text, index) => (
            <button
              key={index}
              className={`text-start text-[18px] md:text-[20px] lg:text-[24px] font-[400] px-6 md:px-7 lg:px-8 py-4 lg:py-5 rounded-2xl cursor-pointer ${
                selectedImage === images[index].img
                  ? 'bg-[#0A40C6] text-[#FFFFFF]'
                  : 'bg-[#F8F8F8] text-[#3D3C3C]'
              }`}
              onClick={() => setSelectedImage(images[index].img)}
            >
              {text}
            </button>
          ))}
        </div>

        <div className="flex-1 flex justify-center order-last md:order-none">
          <img
            src={selectedImage}
            alt="Large"
            className="rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] w-full lg:w-[655px] h-[300px] md:h-[400px] lg:h-[535px] object-cover"
          />
        </div>

        <div className="flex md:flex-col gap-3 justify-center">
          <img
            src="/assets/img/services/Frame 1597883614.png"
            alt="Top Left"
            className="rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] shadow w-[150px] md:w-[250px] lg:w-[320px] h-[150px] md:h-[150px] lg:h-[203px] object-cover"
          />
          <img
            src="/assets/img/services/happy-man.png"
            alt="Bottom Left"
            className="rounded-[2rem] md:rounded-[3rem] lg:rounded-[3.5rem] shadow w-[150px] md:w-[250px] lg:w-[320px] h-[150px] md:h-[200px] lg:h-[325px] object-cover"
          />
        </div>
      </div>
    </>
  );
}
