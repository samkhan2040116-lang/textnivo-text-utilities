/**
 * TextNivo Character Counter Utility
 *
 * Counts characters, characters without spaces, words,
 * and remaining characters for text-limit fields.
 *
 * Useful for application forms, profile descriptions,
 * social posts, short answers, and other limited text fields.
 */

/**
 * Analyze text and return useful character statistics.
 *
 * @param {string} text
 * @param {number|null} limit
 * @returns {object}
 */
function analyzeText(text = "", limit = null) {
  const value = String(text);

  const characters = value.length;
  const charactersWithoutSpaces = value.replace(/\s/g, "").length;

  const trimmed = value.trim();
  const words = trimmed === "" ? 0 : trimmed.split(/\s+/).length;

  const hasLimit = Number.isFinite(limit) && limit >= 0;

  return {
    characters,
    charactersWithoutSpaces,
    words,
    limit: hasLimit ? limit : null,
    remaining: hasLimit ? limit - characters : null,
    exceeded: hasLimit ? characters > limit : false
  };
}

/**
 * Example:
 *
 * const result = analyzeText(
 *   "This is my application response.",
 *   1000
 * );
 *
 * console.log(result);
 */

if (typeof module !== "undefined" && module.exports) {
  module.exports = { analyzeText };
}
