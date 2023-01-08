const HIGHEST_SCORE_LOCAL_STORAGE_KEY = "highest-score";

/**
 * Get the highest score from local storage and return it as a number.
 * If there is nothing in local storage it return 0
 * @returns The highest score from the local storage
 */
const getHighestScore = function (): number {
  const score = Number(localStorage.getItem(HIGHEST_SCORE_LOCAL_STORAGE_KEY));

  // If there is nothing in the local storage show 0 as the heighest score
  if (isNaN(score)) return 0;

  return score;
};

/**
 * It sets the highest score in local storage if the score is higher than the current highest score
 * @param {number} score - number - The score to set as the highest score.
 * @returns the value of the localStorage item with the key HIGHEST_SCORE_LOCAL_STORAGE_KEY.
 */
export const setHighestScore = function (score: number) {
  if (score > getHighestScore()) return;

  localStorage.setItem(HIGHEST_SCORE_LOCAL_STORAGE_KEY, String(score));
};

export const updateHighestScore = function () {
  const hiScoreEl = document.querySelector("#hi-score-box .text-value")!;
  hiScoreEl.textContent = String(getHighestScore());
};
