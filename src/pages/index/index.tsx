import { useI18n } from "@hi18n/react";
import type { FC } from "react";
import { Button } from "src/component/Button";
import { book } from "src/locale";

export const Index: FC = () => {
  const { t } = useI18n(book);

  const handleClick = () => {
    window.alert(t("example/greeting"));
  };

  return (
    <div>
      <h2>Index</h2>
      <Button tag="button" className="p-2" onClick={handleClick}>
        Click me!
      </Button>
    </div>
  );
};
