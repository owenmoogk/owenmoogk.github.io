import { createHighlighterCore } from '@shikijs/core';
import { createJavaScriptRegexEngine } from '@shikijs/engine-javascript';
import bash from '@shikijs/langs/bash';
import html from '@shikijs/langs/html';
import json from '@shikijs/langs/json';
import jsx from '@shikijs/langs/jsx';
import scss from '@shikijs/langs/scss';
import tsx from '@shikijs/langs/tsx';
import xml from '@shikijs/langs/xml';

export async function createHighlighter() {
  return createHighlighterCore({
    langs: [tsx, scss, html, bash, json, xml, jsx],
    themes: [],
    engine: createJavaScriptRegexEngine(),
  });
}
