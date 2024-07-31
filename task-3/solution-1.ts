/**
 * SOLUTION 1: getting latest `script` tag in `document.scripts`
 *
 * Note: function also tested with async attribute - after a few attempts,
 * the function still was able to return the correct `script` block.
 * That said, using the `async` and `defer` attributes are scenarios that
 * might require a closer look into.
 */

function getCurrentScript(): HTMLScriptElement | undefined {
  // since document.scripts will increment as scripts are loaded,
  // the last one in the array is the currently executing script.
  const latestLoadedScriptIndex = document.scripts.length - 1;

  // return the reference to the script
  return document.scripts[latestLoadedScriptIndex];
}
