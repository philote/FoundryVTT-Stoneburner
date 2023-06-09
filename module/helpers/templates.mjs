/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/stoneburner/templates/actor/parts/actor-skills.html",
    "systems/stoneburner/templates/actor/parts/actor-items.html",
    "systems/stoneburner/templates/actor/parts/actor-abilities.html",
    "systems/stoneburner/templates/actor/parts/actor-artifacts.html",
    "systems/stoneburner/templates/actor/parts/actor-projects.html",
    "systems/stoneburner/templates/actor/parts/actor-details.html"
  ]);
};
