# SteamGiftsChancePerPoint
Show win chance for any giveaway, or for all current- or finished giveaways (per page)
Calculations are entirely client-side, so there's no SG requests and you will have to manually switch pages or views

## Installation
1. Add plugin [ScriptAutoRunner](https://chrome.google.com/webstore/detail/scriptautorunner/gpgjofmpmjjopcogjgdldidobhmjmdbm) ([Github](https://github.com/nakajmg/ScriptAutoRunner))
2. Enable plugin
3. On the plugin icon in your task bar, go to settings (cogwheel icon)
4. Add a new script (`</>`)
5. Copy contents of [Script.js](https://github.com/Alicecomma/SteamGiftsChancePerPoint/blob/main/Script.js) into the new script
6. Target host `steamgifts.com`
7. "Plug" the script in - click the grey plug so it becomes yellow (this also requires the bar to the left to be yellow)

# Images
## Giveaway rows
![image](https://github.com/Alicecomma/SteamGiftsChancePerPoint/assets/4662406/d7e4bb61-53a7-4068-8b52-c0d01ed14930)
 - Browse > All through to New: Win chance is shown in promille (1 in 1,000) and in promille per point. The calculation takes into account nr. of copies, entries and points.

## Table rows
![image](https://github.com/Alicecomma/SteamGiftsChancePerPoint/assets/4662406/cdd59da0-e7c2-47aa-9712-e072aacaf616)
 - Browse > Entered: Win chance is also shown, taking into account every giveaway you currently entered
 - View All: Win chance for all giveaways you entered shown on the page is calculated - did you get lucky?
