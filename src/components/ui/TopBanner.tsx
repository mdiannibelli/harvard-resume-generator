import { StickyBanner } from "@/shared/components";
import { Trans, useTranslation } from "react-i18next";
export function TopBanner() {
  const { t } = useTranslation();
  return (
    <StickyBanner className="absolute hidden md:flex bg-linear-to-b from-red-500 to-red-600">
      <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
        <Trans
          i18nKey="NAVBAR.TOP_BANNER.ANNOUNCEMENT"
          components={{ bold: <span className="font-bold" /> }}
        />{" "}
        <a href="/about" className="transition duration-200 hover:underline">
          {t("NAVBAR.TOP_BANNER.READ_ANNOUNCEMENT")}
        </a>
      </p>
    </StickyBanner>
  );
}
