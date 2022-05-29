import type { Message } from "@hi18n/core";
import { Book, Catalog, msg } from "@hi18n/core";

type Vocabulary = {
  "example/greeting": Message;
};

const catalogEn = new Catalog<Vocabulary>({
  "example/greeting": msg("Hello"),
});

const catalogJa = new Catalog<Vocabulary>({
  "example/greeting": msg("こんにちは"),
});

export const book = new Book<Vocabulary>({
  ja: catalogJa,
  en: catalogEn,
});
