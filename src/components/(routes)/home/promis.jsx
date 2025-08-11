import { useTranslation } from "react-i18next";

export default function Promis() {
  const { t } = useTranslation();

  const Details = [
    {
      title: t("promis.details.0.title"),
      description: t("promis.details.0.description"),
      icon: "/public/assets/img/promis/Layer_1.svg",
    },
    {
      title: t("promis.details.1.title"),
      description: t("promis.details.1.description"),
      icon: "/public/assets/img/promis/Layer_1 (1).svg",
    },
    {
      title: t("promis.details.2.title"),
      description: t("promis.details.2.description"),
      icon: "/public/assets/img/promis/internet_computer.svg",
    },
    {
      title: t("promis.details.3.title"),
      description: t("promis.details.3.description"),
      icon: "/public/assets/img/promis/Vector (14).svg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:w-[80%] w-[100%] px-5 sm:px-15 md:px-10 py-10 gap-[40px]">
      <div className=" rounded-[24px] bg-[linear-gradient(119.41deg,#3768E1_1.74%,#0A40C6_96.97%)] p-[24px] flex flex-col justify-center">
        <div className="flex items-center gap-2 text-[14px] sm:text-[16px] font-[400] text-[#0A40C6] bg-white/16 px-4 py-2 rounded-full w-fit">
          <img
            src="/assets/img/promis/Layer_x0020_1.svg"
            className="w-[18px] h-[18px]"
            alt=""
          />
          <h1 className="text-white text-[14px] sm:text-[16px] font-[400]">{t("promis.badge")}</h1>
        </div>

        <h1 className="text-[20px] sm:text-[28px] md:text-[36px] font-[700] text-white my-2 leading-relaxed">
          {t("promis.heading")}
        </h1>
        <button className="text-[14px] sm:text-[16px] font-[400] bg-white text-[#0A40C6] border border-white px-4 py-2 rounded-full w-fit
        cursor-pointer hover:bg-[#FFFFFF3A] hover:text-whiteٍ">
          {t("promis.button")}
        </button>
      </div>

      <div className="grid grid-cols-1 xl:w-[45rem] sm:grid-cols-2 md:grid-cols-2 gap-4">
        {Details.map((detail, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] shadow-[0_4px_10px_rgba(0,0,0,0.05)] p-4 rounded-[24px] "
          >
            <img
              src={detail.icon}
              alt="icon"
              className="bg-[#FFF9F3] rounded-[7px] p-2 w-[38.59px] h-[38.59px]"
            />

            <h1 className="text-[18px] sm:text-[20px] md:text-[26px] font-[600] text-black my-1 leading-relaxed">
              {detail.title}
            </h1>
            <p className="text-[14px] sm:text-[16px] font-[300] text-black">{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
