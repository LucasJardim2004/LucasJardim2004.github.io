// Mecânica de i18n. A regra é simples: só se duplica o conteúdo que o Lucas
// escreve, nunca a lógica do site. Todos os textos de UI passam por t(lang, key).

import en from './en.json';
import pt from './pt.json';

export const languages = ['en', 'pt'] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'en';

const dictionaries = { en, pt } as const;

/**
 * Devolve o texto traduzido para uma chave em notação pontuada (ex.: "nav.projects").
 * Se a chave não existir, devolve a própria chave — sinal claro em dev de tradução
 * em falta, sem partir o build.
 */
export function t(lang: Lang, key: string): string {
  const parts = key.split('.');
  let node: unknown = dictionaries[lang];
  for (const part of parts) {
    if (node && typeof node === 'object' && part in node) {
      node = (node as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }
  return typeof node === 'string' ? node : key;
}

/**
 * Type-guard: confirma que uma string vinda do URL é um idioma suportado.
 */
export function isLang(value: string | undefined): value is Lang {
  return typeof value === 'string' && (languages as readonly string[]).includes(value);
}

/**
 * Constrói um URL absoluto (dentro do site) com o prefixo de idioma.
 * Ex.: localizedPath('pt', 'projects') → '/pt/projects'.
 */
export function localizedPath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return clean ? `/${lang}/${clean}` : `/${lang}/`;
}
