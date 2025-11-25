import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("Name")}</h1>
      <p>{t("Message")}</p>
    </div>
  );
}
