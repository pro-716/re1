:root {
    --c: #00f5ff; --p: #bf00ff; --g: #39ff14; --pk: #ff0090; --am: #ffaa00;
    --bg: #060610; --card: #0d0d20; --tm: #e8eaf6; --ts: #7c7fa8;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body {
    background: var(--bg); color: var(--tm);
    font-family: 'Tajawal', sans-serif; min-height: 100vh;
    background-image: radial-gradient(circle at 50% 0%, rgba(0,245,255,0.05), transparent 50%);
}

.hero-bg { background: rgba(13, 13, 32, 0.8); border-bottom: 1px solid rgba(0,245,255,0.1); padding-bottom: 10px; }
header { text-align: center; padding: 30px 20px 10px; }
.logo { font-family: 'Orbitron'; font-size: 45px; font-weight: 900; letter-spacing: 5px; text-shadow: 0 0 15px var(--c); }
.logo-sub { font-size: 12px; color: var(--p); letter-spacing: 4px; margin-top: 5px; }
.hline { width: 100px; height: 2px; background: var(--c); margin: 10px auto; box-shadow: 0 0 10px var(--c); }

nav { display: flex; justify-content: center; gap: 10px; padding: 15px; flex-wrap: wrap; }
.nb {
    background: transparent; border: 1px solid rgba(124,127,168,0.3); color: var(--ts);
    padding: 10px 20px; border-radius: 8px; cursor: pointer; transition: 0.3s;
}
.nb.active, .nb:hover { border-color: var(--c); color: var(--c); background: rgba(0,245,255,0.05); }

main { max-width: 1200px; margin: 0 auto; padding: 20px; }
.sec { display: none; animation: fadeIn 0.4s ease forwards; }
.sec.visible { display: block; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.welcome-text { text-align: center; padding: 40px 0; }
.stitle { font-size: 20px; color: var(--c); margin-bottom: 20px; display: flex; align-items: center; gap: 10px; }
.stitle .d { width: 8px; height: 8px; background: var(--c); border-radius: 50%; box-shadow: 0 0 8px var(--c); }

/* Grid & Cards */
.hcards, .tgrid, .pcards { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 15px; }
.hcard, .tc, .pcrd {
    background: var(--card); border: 1px solid rgba(0,245,255,0.1);
    padding: 20px; border-radius: 15px; text-align: center; transition: 0.3s;
}
.hcard:hover, .tc:hover { border-color: var(--c); transform: translateY(-5px); }
.hicon { font-size: 35px; margin-bottom: 10px; display: block; }

.tc-num { font-family: 'Orbitron'; color: var(--c); font-weight: bold; }
.sbadge { font-size: 10px; padding: 2px 8px; border-radius: 10px; background: rgba(255,255,255,0.05); }
.sb-free { color: var(--g); border: 1px solid var(--g); }
.tc-disp { font-family: 'Orbitron'; font-size: 28px; margin: 15px 0; color: #fff; }
.tb { width: 100%; padding: 8px; border-radius: 5px; border: 1px solid var(--c); background: transparent; color: var(--c); cursor: pointer; }

/* Banners */
.zone-banner { 
    background: linear-gradient(90deg, rgba(0,245,255,0.1), transparent); 
    padding: 15px; border-right: 4px solid var(--c); border-radius: 5px; margin-bottom: 15px; 
}
.zb-ps { border-right-color: var(--p); background: linear-gradient(90deg, rgba(191,0,255,0.1), transparent); }
.zb-pc { border-right-color: var(--g); background: linear-gradient(90deg, rgba(57,255,20,0.1), transparent); }

/* Menu */
.menu-page-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 15px; }
.mpcard { background: var(--card); border: 1px solid rgba(255,170,0,0.2); padding: 20px; border-radius: 12px; text-align: center; }
.mpcard-icon { font-size: 30px; margin-bottom: 10px; display: block; }
.mpcard-price { color: var(--am); font-family: 'Orbitron'; font-weight: bold; }

footer { text-align: center; padding: 40px; color: var(--ts); border-top: 1px solid rgba(255,255,255,0.05); font-size: 12px; }
