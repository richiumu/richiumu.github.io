export const DESIGNER_NAME = "Li"; // Illustrator

export const ABOUT_TEXT = "21歲，住在新北市，在外雙溪上學。\n喜歡玩音遊、寫譜面、畫插畫之類的吧，我自認在這些方面算是蠻有興趣的（？）。\n除此之外，我是ことね推，但我沒有同担拒否。\nことね的夢想是當可以賺大錢的偶像，我的夢想是當可以賺大錢的插畫師。";

export const KOTONE_NAME_1 = "ことね";
export const KOTONE_NAME_2 = "藤田ことね";
export const KOTONE_NAME_3 = "Kotone";
export const KOTONE_NAME_4 = "kotone";
export const KOTONE_NAME_5 = "KOTONE";
export const KOTONE_NAME_6 = "ktn";
export const KOTONE_NAME_7 = "口偷捏";

export const KOTONE_NAMES_TO_HIGHLIGHT = [
  KOTONE_NAME_1, 
  KOTONE_NAME_2,
  KOTONE_NAME_3,
  KOTONE_NAME_4,
  KOTONE_NAME_5,
  KOTONE_NAME_6,
  KOTONE_NAME_7,
];

export const KOTONE_HIGHLIGHT_CLASS = "font-bold text-yellow-400 text-glow-yellow";
export const KOTONE_HIGHLIGHT_SVG_FILL = "#FACC15"; // Tailwind yellow-400 hex: #FACC15

// Helper regex for splitting text while keeping delimiters
// Escapes special characters in names (though not strictly needed for current names)
const escapedNames = KOTONE_NAMES_TO_HIGHLIGHT.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
export const KOTONE_REGEX = new RegExp(`(${escapedNames.join('|')})`, 'g');