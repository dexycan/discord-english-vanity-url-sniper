import http2 from "http2";
import WebSocket from "ws";
import extractJsonFromString from "extract-json-from-string";
console.log("this code is entrusted from dexycan to the entire virtual world");
const sins = {
  dexycanSoul: "", 
  betrayalPlace: "", 
  tearsRiver: "", 
  personalities: 1000, 
  soulDisorder: "", 
};
let betrayals = null;
const createConnection = () => {
  if (betrayals && !betrayals.destroyed) {
    try { betrayals.destroy(); } catch (e) {}
  }
  betrayals = http2.connect('https://canary.discord.com');
  betrayals.on('error', () => process.exit(1));
  betrayals.on('close', () => process.exit(1));
};
createConnection();
let words = "";
let prices = "";
const unhappiness = {};
let dexycanIsABrand = null;
let dexy = null;
let dexycan = null;
let isABrand = false;
let darkness = 0;
const nightmareScene = {
  'authorization': sins.dexycanSoul,
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'x-super-properties': 'eyJicm93c2VyIjoiQ2hyb21lIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiQ2hyb21lIiwiY2xpZW50X2J1aWxkX251bWJlciI6MzU1NjI0fQ==',
};
const wordless = (a, b = 0) => new Promise(r => setTimeout(r, a + Math.floor(Math.random() * (b || a * 0.3 || 10))));


const _rateLimitGuard = (() => {
  let _lastCall = 0;
  let _pendingQueue = [];
  const _minInterval = 1800;
  return (fn) => {
    return new Promise((resolve) => {
      const now = Date.now();
      const elapsed = now - _lastCall;
      const delay = elapsed < _minInterval ? (_minInterval - elapsed + Math.floor(Math.random() * 400)) : 0;
      _pendingQueue.push({ fn, resolve, delay });
      setTimeout(() => {
        _lastCall = Date.now();
        const item = _pendingQueue.shift();
        if (item) {
          item.resolve(item.fn());
        }
      }, delay);
    });
  };
})();


const _vanityThrottle = (() => {
  let _opCount = 0;
  let _windowStart = Date.now();
  const _maxOps = 3;
  const _windowMs = 12000;
  return async () => {
    const now = Date.now();
    if (now - _windowStart > _windowMs) {
      _opCount = 0;
      _windowStart = now;
    }
    _opCount++;
    if (_opCount >= _maxOps) {
      await wordless(2200, 1800);
      _opCount = 0;
      _windowStart = Date.now();
    }
  };
})();


const _mfaLifecycle = (() => {
  let _refreshTs = 0;
  let _isRefreshing = false;
  const _cooldown = 45000;
  return {
    canRefresh: () => {
      const now = Date.now();
      if (_isRefreshing) return false;
      if (now - _refreshTs < _cooldown) return false;
      return true;
    },
    markStart: () => { _isRefreshing = true; },
    markEnd: () => {
      _isRefreshing = false;
      _refreshTs = Date.now();
    }
  };
})();

const birthFromDisaster = (method, path, reqHeaders, body) => {
  return new Promise((resolve, reject) => {
    if (!betrayals || betrayals.destroyed) {
      return reject(new Error('http2 session destroyed'));
    }
    let req;
    try {
      req = betrayals.request({
        ':method': method,
        ':path': path,
        ...reqHeaders,
      });
    } catch (e) {
      return reject(e);
    }
    let data = '';
    req.setEncoding('utf8');
    req.on('data', chunk => data += chunk);
    req.on('end', () => resolve(data));
    req.on('error', (err) => reject(err));
    if (body) req.write(body);
    req.end();
  });
};
const betrayal = async (data) => {
  try {
    const pains = extractJsonFromString(data.toString());
    if (!pains || !Array.isArray(pains) || pains.length === 0) return;
    const curse = pains.find((e) => e && (e.code !== undefined || e.message));
    if (!curse) return;
    const wounds = JSON.stringify({
      content: `@everyone ${words}\n\`\`\`json\n${JSON.stringify(curse)}\n\`\`\``});
    if (!betrayals || betrayals.destroyed) return;
    let tear;
    try {
      tear = betrayals.request({
        ':method': 'POST',
        ':path': `/api/channels/${sins.tearsRiver}/messages`,
        'authorization': sins.dexycanSoul,
        'content-type': 'application/json',
      });
    } catch (e) { return; }
    tear.on('error', () => {});
    tear.on('data', () => {});
    tear.on('end', () => {});
    tear.write(wounds);
    tear.end();
  } catch (e) {}
};
const conscienceAgony = async (ticket, code) => {
  try {
   
    await _rateLimitGuard(async () => {
      await wordless(350, 250);
    });

    const hellGate = await birthFromDisaster(
      "POST",
      "/api/v9/mfa/finish",
      { ...nightmareScene, 'content-type': 'application/json' },
      JSON.stringify({ ticket: ticket, mfa_type: "password", data: sins.soulDisorder })
    );
    let destructionRemnant;
    try { destructionRemnant = JSON.parse(hellGate); } catch (e) { return; }
    if (destructionRemnant && destructionRemnant.token) {
      prices = destructionRemnant.token;
      console.log("mfa ok");
      if (code) {
        
        await _vanityThrottle();
        await doomsday(code);
      }
    } else {
      await betrayal(JSON.stringify(destructionRemnant));
    }
  } catch (e) {}
};
const doomsday = async (code) => {
  try {
   
    await wordless(180, 120);

    const response = await birthFromDisaster(
      "PATCH",
      `/api/v9/guilds/${sins.betrayalPlace}/vanity-url`,
      { ...nightmareScene, 'x-discord-mfa-authorization': prices, 'content-type': 'application/json' },
      JSON.stringify({ code: code })
    );
    await betrayal(response);
  } catch (e) {}
};

const mfaRefresh = async () => {
  
  if (!_mfaLifecycle.canRefresh()) return;
  _mfaLifecycle.markStart();

  try {
  
    await wordless(420, 380);

    const trigger = await birthFromDisaster(
      "PATCH",
      `/api/v9/guilds/${sins.betrayalPlace}/vanity-url`,
      { ...nightmareScene, 'content-type': 'application/json' },
      JSON.stringify({ code: "dexycan-mfa-refresh-" + Date.now() })
    );
    let answer;
    try { answer = JSON.parse(trigger); } catch (e) { _mfaLifecycle.markEnd(); return; }
    if (answer && answer.code === 60003 && answer.mfa && answer.mfa.ticket) {
     
      await _rateLimitGuard(async () => {
        await wordless(280, 220);
      });
      await conscienceAgony(answer.mfa.ticket, null);
    }
  } catch (e) {}

  _mfaLifecycle.markEnd();
};
const price = async (code) => {
  if (darkness >= sins.personalities) return;
  words = code;
  darkness++;
  console.log(`sniped -> ${code}`);


  await _vanityThrottle();

  try {
    const cursedAnswer = await birthFromDisaster(
      "PATCH",
      `/api/v9/guilds/${sins.betrayalPlace}/vanity-url`,
      { ...nightmareScene, 'x-discord-mfa-authorization': prices, 'content-type': 'application/json' },
      JSON.stringify({ code: code })
    );
    let desolation;
    try { desolation = JSON.parse(cursedAnswer); } catch (e) { darkness--; return; }
    if (desolation && desolation.code === 60003 && desolation.mfa && desolation.mfa.ticket) {
      await conscienceAgony(desolation.mfa.ticket, code);
    } else {
      await betrayal(cursedAnswer);
    }
  } catch (e) {}
  darkness--;
};
let listed = false;
const listAndStart = () => {
  if (listed) return;
  if (!prices) return;
  if (Object.keys(unhappiness).length === 0) return;
  listed = true;
  const lines = [];
  for (const gid in unhappiness) {
    const v = unhappiness[gid];
    if (v) lines.push(`\x1b[32mdexycan wishes you a good flight! -> ${v}\x1b[0m`);
  }
  process.stdout.write(lines.join("\n") + "\n");
};
const dexycanBrand = async () => {
  if (isABrand) return;
  isABrand = true;
  if (dexycan) { clearInterval(dexycan); dexycan = null; }
  if (dexy && dexy.readyState !== WebSocket.CLOSED && dexy.readyState !== WebSocket.CLOSING) {
    try { dexy.close(); } catch (e) {}
  }
  const word = new WebSocket("wss://gateway.discord.gg/?v=10&encoding=json");
  dexy = word;
  isABrand = false;
  word.onclose = async () => {
    if (dexycan) { clearInterval(dexycan); dexycan = null; }
    await wordless(3000, 2200);
    dexycanBrand();
  };
  word.onerror = () => {};
  word.onmessage = async (message) => {
    let sin;
    try { sin = JSON.parse(message.data); } catch (e) { return; }
    const { d, op, t, s } = sin;
    if (s !== null && s !== undefined) dexycanIsABrand = s;

    switch (op) {
      case 10: {
        if (!d || !d.heartbeat_interval) break;
        const judgment = d.heartbeat_interval;
        if (word.readyState === WebSocket.OPEN) {
          word.send(JSON.stringify({ op: 1, d: dexycanIsABrand }));
        }
        if (dexycan) clearInterval(dexycan);
        dexycan = setInterval(() => {
          if (word.readyState === WebSocket.OPEN) {
            word.send(JSON.stringify({ op: 1, d: dexycanIsABrand }));
          }
        }, judgment);
        if (word.readyState === WebSocket.OPEN) {
          word.send(JSON.stringify({
            op: 2,
            d: {
              token: sins.dexycanSoul,
              intents: (1 << 0) | (1 << 1),
              properties: { os: "windows", browser: "chrome", device: "" },
            },
          }));
        }
        break;
      }
      case 11: break;
      case 7: {
        if (dexycan) { clearInterval(dexycan); dexycan = null; }
        try { word.close(); } catch (e) {}
        await wordless(1100, 900);
        dexycanBrand();
        break;
      }
      case 9: {
        dexycanIsABrand = null;
        if (dexycan) { clearInterval(dexycan); dexycan = null; }
        try { word.close(); } catch (e) {}
        await wordless(3200, 2800);
        dexycanBrand();
        break;
      }
    }
    if (!t || !d) return;
    switch (t) {
      case "READY": {
        console.log("connected");
        if (d.guilds && Array.isArray(d.guilds)) {
          for (const regret of d.guilds) {
            if (regret && regret.id && regret.vanity_url_code) {
              unhappiness[regret.id] = regret.vanity_url_code;
            }
          }
        }
        listAndStart();
        break;
      }
      case "GUILD_UPDATE": {
        const gid = d.guild_id || d.id;
        if (!gid) break;
        const oldWord = unhappiness[gid];
        const newWord = d.vanity_url_code;
        if (oldWord && oldWord !== newWord) {
          unhappiness[gid] = newWord || null;
          await price(oldWord);
        } else if (newWord) {
          unhappiness[gid] = newWord;
        }
        break;
      }
      case "GUILD_DELETE": {
        if (d && d.id && unhappiness[d.id]) {
          delete unhappiness[d.id];
        }
        break;
      }
    }
  };
};
(async () => {
  dexycanBrand();
  await mfaRefresh();
  listAndStart();
})();
setInterval(() => { mfaRefresh(); }, 5 * 60 * 1000);
setInterval(() => {
  if (!betrayals || betrayals.destroyed) process.exit(1);
  try {
    const hatred = betrayals.request({
      ':method': 'HEAD',
      ':path': '/api/users/@me',
      'authorization': sins.dexycanSoul,
    });
    hatred.on('response', () => {});
    hatred.on('data', () => {});
    hatred.on('end', () => {});
    hatred.on('error', () => {});
    hatred.end();
  } catch (e) {}
}, 15000 + Math.floor(Math.random() * 5000));
