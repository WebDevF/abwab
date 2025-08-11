

import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-2 py-5 relative">
      <div
        className="grid w-[370px] h-[400px] sm:h-[600px] md:h-[835px] md:w-[1300px] rounded-[2.5rem] md:rounded-[4.5rem] py-4 md:p-8 bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/assets/img/header/image 23.png')" }}
      >
        <div className="flex items-start justify-between w-full px-6 sm:px-8 md:px-12 pt-0 pb-6 md:pt-1 md:pb-1 z-10">
          <img src="/assets/img/header/Layer 1.svg" alt="" className="w-[95px] md:w-[180px] pt-2" />

          <div className="flex items-center gap-2 md:gap-4 sm:gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-white text-[16px] sm:text-[16px] md:text-[30px] cursor-pointer"
            >
              {i18n.language === "ar" ? "ع" : "EN"}
              <img
                src="/assets/img/header/ic_round-language.svg"
                alt=""
                className="w-[20px] h-[20px]  sm:w-[22px] sm:h-[22px]"
              />
            </button>

            <button className="flex items-center gap-1 text-white text-[12px] sm:text-[16px] md:text-[25px] border border-white px-4 sm:px-8 md:px-10 py-2 sm:py-3 rounded-full font-[400] cursor-pointer hover:bg-[#FFFFFF3A] hover:text-white ">
              {t("header.contact_us")}
              <img
                src="/assets/img/header/SVG.svg"
                alt=""
                className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]"
              />
            </button>

          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center text-white p-5 sm:p-6 md:p-10 z-10 -translate-y-10 md:-translate-y-20">
          <h1 className="text-[1.2rem] sm:text-[2.2rem] md:text-[3rem] font-[600] mb-4 max-w-4xl">
            {t("header.header_title")}
          </h1>
          <p className="text-[10px] sm:text-[20px] md:text-[25px] font-[300] mb-4 max-w-5xl">
            {t("header.header_desc")}
          </p>
          <button className="text-white text-[9px] sm:text-[18px] md:text-[26px] border-1 border-white mt-2 max-sm:w-[9rem] px-4 sm:px-10 py-1 sm:py-4 rounded-full font-[400] cursor-pointer hover:bg-[#FFFFFF3A] hover:text-white">
            {t("header.header_btn")}
          </button>
        </div>
      </div>

      <div className="mt-[-80px] md:mt-[-130px] w-[95%] sm:w-[1200px] md:w-[1200px] h-[50px] md:h-[113px] bg-white/10 rounded-[0.75rem] sm:rounded-[1rem] md:rounded-[2rem] py-3 sm:py-6 md:py-7 px-2 sm:px-6 md:px-10 z-10 flex flex-row justify-between items-center text-white ">
        <div className="flex items-center gap-1 sm:gap-3 md:pr-10">
          <img src="/assets/img/header/Frame 1597883596.svg" alt="icon1"   className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]"
 />
          <div className="flex flex-col">
            <h1 className="text-[9px] sm:text-[16px] md:text-[26px] font-bold">{t("header.stats.0.value")}</h1>
            <p className="text-[9px] sm:text-[14px] md:text-[18px] font-light">{t("header.stats.0.label")}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <img src="/assets/img/header/Frame 1597883596 (1).svg" alt="icon2"   className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]" />
          <div className="flex flex-col">
            <h1 className="text-[9px] sm:text-[16px] md:text-[26px] font-bold">{t("header.stats.1.value")}</h1>
            <p className="text-[9px] sm:text-[14px] md:text-[18px] font-light">{t("header.stats.1.label")}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-3 md:pl-10">
          <img src="/assets/img/header/Frame 1597883596 (2).svg" alt="icon3" className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] md:w-[40px] md:h-[40px]" />
          <div className="flex flex-col">
            <h1 className="text-[9px] sm:text-[16px] md:text-[26px] font-bold">{t("header.stats.2.value")}</h1>
            <p className="text-[9px] sm:text-[14px] md:text-[18px] font-light">{t("header.stats.2.label")}</p>
          </div>
        </div>
      </div>

    </div>
  );
}










