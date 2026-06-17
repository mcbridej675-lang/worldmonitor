#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-global-briefing.mjs
 */

const RECIPIENTS = ['johnmcbride2928@gmail.com'];
const RESEND_KEY = process.env.RESEND_API_KEY;

if (!RESEND_KEY) {
  console.error('Error: RESEND_API_KEY environment variable is required.');
  process.exit(1);
}

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
});

const html = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 720px; margin: 0 auto; background: #0a0a0a; color: #e0e0e0; padding: 0;">
  <div style="background: linear-gradient(90deg, #1e40af, #7c3aed, #dc2626); height: 4px;"></div>
  <div style="padding: 32px 28px;">

    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
      <tr>
        <td style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #222; text-align: center; vertical-align: middle; background: #111;">
          <span style="font-size: 18px; color: #7c3aed;">&#9678;</span>
        </td>
        <td style="padding-left: 10px;">
          <div style="font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.5px;">WORLD MONITOR</div>
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitical &bull; Financial Markets &bull; Security &bull; Health</p>
    </div>

    <!-- ===================== EVENT 1: RUSSIA-UKRAINE CEASEFIRE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Geopolitical / Eastern Europe &mdash; May 9&ndash;11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Russia &amp; Ukraine Agree to 3-Day Ceasefire and 2,000-Prisoner Swap</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Zelenskyy and Kremlin adviser Yuri Ushakov confirmed a U.S.-brokered <strong>three-day ceasefire (May 9&ndash;11)</strong>, timed to coincide with Russia&rsquo;s Victory Day celebrations. The agreement includes a suspension of all kinetic activity and a <strong>1,000-prisoner swap per side</strong>. Security in Moscow was tight as Putin and foreign leaders attended the Victory Day parade. Despite the ceasefire, the Kremlin cautioned that lasting peace remains &ldquo;a very long way off.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This is the most significant pause in hostilities since the full-scale invasion began, though analysts remain skeptical about whether it will extend beyond the 72-hour window. The humanitarian prisoner exchange affects thousands of families on both sides.
        </p>

        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong>European defense stocks sold off sharply.</strong> Rheinmetall (ETR: RHM) dropped <strong>5.9%</strong>, tank maker Renk (ETR: RENK) fell <strong>3.9%</strong>, Sweden&rsquo;s Saab (STO: SAAB-B) dipped <strong>2.2%</strong>, and BAE Systems (LON: BA.) closed <strong>3.3% lower</strong>. Markets are pricing in reduced defense spending if peace materializes.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            The pan-European <strong>Stoxx 600 ended 0.4% higher</strong> overall, as peace optimism boosted broader sentiment. European natural gas futures softened on expectations that a lasting peace could eventually restore Russian pipeline flows, benefitting gas-dependent industrials like <strong>BASF (ETR: BAS)</strong> and <strong>Bayer (ETR: BAYN)</strong>.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Watch:</strong> European reconstruction plays (Holcim, HeidelbergCement) could rally on any peace extension. Ukrainian sovereign bonds saw a bid. If the ceasefire collapses after May 11, expect a sharp defense stock reversal higher.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: IRAN-US STRAIT OF HORMUZ ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Energy / Middle East &mdash; May 8&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran &amp; U.S. Exchange Fire in Strait of Hormuz &mdash; Oil Surges Past $102</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The fragile Iran-U.S. ceasefire (in place since April 8) was pushed to the brink after both sides <strong>exchanged fire in the Strait of Hormuz</strong> &mdash; the most serious confrontation since the truce began. Iran accused the U.S. of targeting an Iranian oil tanker; the U.S. maintained its naval blockade of Iranian ports. Ship traffic through the strait remains <strong>far below pre-war levels</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The UAE intercepted <strong>three Iranian missiles</strong> on May 9, with a fourth falling into the sea &mdash; the first interceptions since the April ceasefire. Meanwhile, Iranians face <strong>skyrocketing food prices</strong> as inflation soars and the rial plunges under the U.S. naval blockade. Qatar&rsquo;s PM met with Secretary Rubio in Miami as Doha reportedly mediates U.S.-Iran negotiations, with Tehran reviewing the Trump administration&rsquo;s latest proposal to end the war.
        </p>

        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong>Oil spiked sharply.</strong> Brent crude climbed <strong>2.64% to $102.70/bbl</strong>; WTI rose <strong>1.95% to $96.66/bbl</strong>. Energy earnings expectations for 2026 have been revised up by <strong>~40%</strong> across the sector, reflecting the sustained high oil-price backdrop.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong>Winners:</strong> Devon Energy (NYSE: DVN, +25% YTD) surging on its Coterra merger. Shell (LON: SHEL) posted record quarterly profits and raised dividends 5%. ExxonMobil (NYSE: XOM) and Chevron (NYSE: CVX) continue to benefit from the elevated price environment.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong>Losers:</strong> Airlines face margin compression &mdash; watch Delta (NYSE: DAL), Lufthansa (ETR: LHA), and particularly Asian carriers dependent on Middle East routing. Shipping costs are elevated; container lines like Maersk (CPH: MAERSK-B) benefit from higher freight rates, but importers and consumer goods companies absorb the cost.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Macro risk:</strong> CNBC warns of a looming &ldquo;Iran war recession risk&rdquo; as elevated energy costs filter through the global economy. If the ceasefire collapses entirely, Brent could test $120+.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: NORTH KOREA DEAD HAND ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Nuclear Security / East Asia &mdash; May 7&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">North Korea Adopts &ldquo;Dead Hand&rdquo; Nuclear Doctrine &mdash; Automatic Strike if Kim Jong Un Killed</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          North Korea has amended its constitution to codify a <strong>&ldquo;Dead Hand&rdquo; nuclear doctrine</strong>: under revised Article 3 of its nuclear policy law, a <strong>nuclear strike must be launched automatically</strong> if the state&rsquo;s command-and-control structure is endangered by hostile military action, including the assassination of Kim Jong Un. The changes were adopted at the 15th Supreme People&rsquo;s Assembly in Pyongyang (March 2026), reportedly triggered by security concerns following the Iran conflict.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Bloomberg confirmed that Kim was also formally granted <strong>sole authority over the nuclear arsenal</strong>, with command transferable to the National Nuclear Forces Command Organization in emergencies. Additionally, <strong>all references to &ldquo;peaceful reunification&rdquo; with South Korea were removed</strong> from the constitution, formally designating the South as a &ldquo;separate and hostile state.&rdquo;
        </p>

        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong>South Korean equities face renewed geopolitical discount.</strong> The KOSPI and Samsung (KRX: 005930) could see selling pressure as foreign investors reassess peninsula risk. South Korean won may weaken vs. the dollar. Defense contractor Hanwha Aerospace (KRX: 012450) and Korea Aerospace Industries (KRX: 047810) are likely beneficiaries of increased ROK defense spending.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong>Japanese defense plays rally:</strong> Mitsubishi Heavy Industries (TYO: 7011) and IHI Corporation (TYO: 7013) stand to benefit from accelerated Japanese missile defense procurement. Japan&rsquo;s Nikkei 225 may see a safe-haven bid toward gold and JPY if tensions escalate.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Global defense ETFs</strong> (iShares U.S. Aerospace &amp; Defense ETF &mdash; ITA, Invesco Aerospace &amp; Defense ETF &mdash; PPA) benefit from sustained geopolitical uncertainty. Lockheed Martin (NYSE: LMT) and Northrop Grumman (NYSE: NOC) exposure to missile defense systems makes them direct beneficiaries.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: HANTAVIRUS CRUISE SHIP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Global Health / Multi-Country &mdash; May 10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">MV Hondius Hantavirus Ship Reaches Canary Islands &mdash; 3 Dead, 22-Nation Evacuation Underway</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Dutch-flagged cruise ship MV Hondius, stricken by a deadly <strong>Andes hantavirus outbreak</strong> since departing Ushuaia, Argentina on April 1, docked at <strong>Tenerife, Canary Islands</strong> at 5:30 AM local time today. <strong>Three passengers are dead</strong>, with 8 confirmed/probable cases among 94 passengers of 19 nationalities. Spain coordinated with <strong>22 countries and the WHO</strong> for the largest maritime health evacuation in recent memory.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Spanish nationals were evacuated first to Madrid for quarantine, followed by chartered Canadian, Dutch, German, Belgian, and Greek flights. A French passenger <strong>developed symptoms during the evacuation flight</strong>, escalating concerns. The EU provided two aircraft for passengers without assigned flights. The CDC has classified the outbreak as a <strong>Level 3 emergency</strong>.
        </p>

        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong>Cruise stocks dipped overnight:</strong> Carnival (NYSE: CCL), Norwegian Cruise Line (NYSE: NCLH), and Royal Caribbean (NYSE: RCL) all slipped ~1%. NCLH is already down <strong>~40% over the past five years</strong> and recently warned of softening booking demand. The impact remains contained but could worsen if secondary infections emerge onshore.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong>Pharma upside:</strong> Moderna (NASDAQ: MRNA) <strong>surged on hantavirus vaccine development hopes</strong>, as its mRNA platform could potentially be adapted for hantavirus. This echoes the COVID-era pattern where outbreak fears drive biotech/vaccine plays.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Watch:</strong> If onshore transmission is confirmed in any receiving country, expect broader travel sector selling (Booking Holdings &mdash; BKNG, Expedia &mdash; EXPE, TUI &mdash; ETR: TUI1). Adventure/expedition cruise operators (Lindblad Expeditions &mdash; LIND, Hurtigruten) face reputational risk.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: DRC ITURI MASSACRE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Conflict / Central Africa &mdash; May 10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">69+ Civilians Massacred by CODECO Militia in DRC&rsquo;s Ituri Province</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          At least <strong>69 civilians</strong> &mdash; with the toll expected to rise above 70 &mdash; were killed in a brutal militia attack across several villages in <strong>Ituri province, northeastern DRC</strong>. The attack was carried out by the <strong>CODECO militia</strong> (Cooperative for the Development of Congo), an armed group claiming to protect the Lendu ethnic community in its long-running conflict with the Hema. The gold-rich province borders Uganda and South Sudan.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The UN peacekeeping mission <strong>MONUSCO &ldquo;strongly condemned&rdquo;</strong> the attacks, but the massacre underscores the failure of peace deals to stabilize eastern DRC. Since early 2025, Ituri has seen a resurgence of armed groups including the CRP, founded by convicted warlord Thomas Lubanga. This follows an earlier ADF attack on April 2 that killed 43 in the same region.
        </p>

        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong>Commodity supply chain risk:</strong> Ituri province is a major source of <strong>artisanal gold and conflict minerals</strong> (coltan, cobalt, tin) critical to electronics and EV supply chains. Continued instability threatens production and ethical sourcing commitments by Apple (NASDAQ: AAPL), Tesla (NASDAQ: TSLA), and Samsung.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong>Gold:</strong> While artisanal DRC gold is a small fraction of global supply, prolonged instability contributes to the risk premium on gold, which is already elevated due to the Iran conflict and geopolitical uncertainty. Gold miners like <strong>Barrick Gold (NYSE: GOLD)</strong> and <strong>Newmont (NYSE: NEM)</strong> benefit from sustained high prices.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Cobalt/EV exposure:</strong> DRC produces ~70% of global cobalt. If violence spreads to cobalt-producing Katanga/Lualaba provinces, expect sharp moves in cobalt prices and pressure on <strong>Glencore (LON: GLEN)</strong>, the world&rsquo;s largest cobalt producer. EV battery costs would rise, squeezing <strong>BYD (SHE: 002594)</strong>, <strong>CATL (SHE: 300750)</strong>, and Western automakers.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Market Snapshot &amp; Key Levels</p>
    </div>

    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 8px 0; text-transform: uppercase; font-size: 10px; letter-spacing: 1px;">Asset</td>
          <td style="color: #888; padding: 8px 0; text-align: right; text-transform: uppercase; font-size: 10px; letter-spacing: 1px;">Level</td>
          <td style="color: #888; padding: 8px 0; text-align: right; text-transform: uppercase; font-size: 10px; letter-spacing: 1px;">Signal</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 8px 0;">S&amp;P 500</td>
          <td style="color: #fff; padding: 8px 0; text-align: right;">7,365</td>
          <td style="color: #22c55e; padding: 8px 0; text-align: right;">+1.46%</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 8px 0;">Dow Jones</td>
          <td style="color: #fff; padding: 8px 0; text-align: right;">49,911</td>
          <td style="color: #22c55e; padding: 8px 0; text-align: right;">+1.24%</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 8px 0;">Brent Crude</td>
          <td style="color: #fff; padding: 8px 0; text-align: right;">$102.70</td>
          <td style="color: #dc2626; padding: 8px 0; text-align: right;">+2.64% &#9650;</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 8px 0;">WTI Crude</td>
          <td style="color: #fff; padding: 8px 0; text-align: right;">$96.66</td>
          <td style="color: #dc2626; padding: 8px 0; text-align: right;">+1.95% &#9650;</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 8px 0;">Stoxx 600 (Europe)</td>
          <td style="color: #fff; padding: 8px 0; text-align: right;">&mdash;</td>
          <td style="color: #22c55e; padding: 8px 0; text-align: right;">+0.4%</td>
        </tr>
        <tr>
          <td style="color: #fff; padding: 8px 0;">USD/JPY</td>
          <td style="color: #fff; padding: 8px 0; text-align: right;">&yen;156.5</td>
          <td style="color: #888; padding: 8px 0; text-align: right;">Yen weak</td>
        </tr>
      </table>
    </div>

    <!-- ===================== STOCKS TO WATCH ===================== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #7c3aed; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">&#9733; Stocks to Watch This Week</p>
    </div>

    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0; text-transform: uppercase; font-size: 10px;">Ticker</td>
          <td style="color: #888; padding: 6px 0; text-transform: uppercase; font-size: 10px;">Catalyst</td>
          <td style="color: #888; padding: 6px 0; text-align: right; text-transform: uppercase; font-size: 10px;">Direction</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 6px 0; font-weight: 700;">DVN</td>
          <td style="color: #bbb; padding: 6px 0;">Coterra merger + $100 oil</td>
          <td style="color: #22c55e; padding: 6px 0; text-align: right;">Bullish</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 6px 0; font-weight: 700;">SHEL</td>
          <td style="color: #bbb; padding: 6px 0;">Record profits, +5% dividend, $3B buyback</td>
          <td style="color: #22c55e; padding: 6px 0; text-align: right;">Bullish</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 6px 0; font-weight: 700;">RHM.DE</td>
          <td style="color: #bbb; padding: 6px 0;">Ceasefire selloff &mdash; watch for reversal</td>
          <td style="color: #eab308; padding: 6px 0; text-align: right;">Volatile</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 6px 0; font-weight: 700;">MRNA</td>
          <td style="color: #bbb; padding: 6px 0;">Hantavirus vaccine development hopes</td>
          <td style="color: #22c55e; padding: 6px 0; text-align: right;">Bullish</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 6px 0; font-weight: 700;">NCLH</td>
          <td style="color: #bbb; padding: 6px 0;">Hantavirus + weak bookings</td>
          <td style="color: #dc2626; padding: 6px 0; text-align: right;">Bearish</td>
        </tr>
        <tr style="border-bottom: 1px solid #1a1a1a;">
          <td style="color: #fff; padding: 6px 0; font-weight: 700;">LMT</td>
          <td style="color: #bbb; padding: 6px 0;">North Korea dead-hand + missile defense</td>
          <td style="color: #22c55e; padding: 6px 0; text-align: right;">Bullish</td>
        </tr>
        <tr>
          <td style="color: #fff; padding: 6px 0; font-weight: 700;">GLEN.L</td>
          <td style="color: #bbb; padding: 6px 0;">DRC instability &mdash; cobalt supply risk</td>
          <td style="color: #eab308; padding: 6px 0; text-align: right;">Volatile</td>
        </tr>
      </table>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch Next</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The world is in a fragile multi-front ceasefire moment.</strong> Both the Russia-Ukraine (May 9&ndash;11) and Iran-U.S. (since April 8) ceasefires are holding by a thread. If either collapses, expect oil above $110, defense stocks surging, and broad risk-off across equities. If both hold and extend, European reconstruction and energy-importing nations (Japan, India, Germany) are the biggest beneficiaries.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">North Korea&rsquo;s dead-hand doctrine is a structural shift in East Asian risk.</strong> This is not a short-term market event &mdash; it permanently raises the tail-risk premium on Korean peninsula assets and structurally benefits Asian and global defense equities. South Korean tech exporters (Samsung, SK Hynix) may face persistent geopolitical discount.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Monitor:</strong> Russia-Ukraine ceasefire expiry (May 11) &bull; Iran&rsquo;s reply to U.S. peace proposal &bull; Hantavirus onshore transmission reports &bull; DRC cobalt province stability &bull; UK destroyer deployment to Hormuz &bull; Brent crude $100 support level
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; NPR &bull; CNN &bull; CNBC &bull; Bloomberg &bull; Reuters &bull; The Washington Post &bull; ABC News &bull; CBS News &bull; Fortune &bull; PBS &bull; The Japan Times &bull; Times of Israel &bull; The Week &bull; NewsX &bull; Sunday Guardian &bull; Yahoo Finance &bull; WHO &bull; Polymarket &bull; Euronews &bull; Voice of Emirates
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Not financial advice. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR GENERAL DISTRIBUTION
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: RECIPIENTS,
  subject: `[World Monitor] Global Daily Briefing — ${today}`,
  html,
});

try {
  const result = execSync(
    `curl -s -w "\\n%{http_code}" --connect-timeout 30 -X POST https://api.resend.com/emails ` +
    `-H "Content-Type: application/json" ` +
    `-H "Authorization: Bearer ${RESEND_KEY}" ` +
    `-d @-`,
    { input: payload, encoding: 'utf8', timeout: 60000 },
  );
  const lines = result.trim().split('\n');
  const httpCode = lines.pop();
  const body = lines.join('\n');

  if (!httpCode.startsWith('2')) {
    console.error(`Resend API error ${httpCode}: ${body}`);
    process.exit(1);
  }

  const data = JSON.parse(body);
  console.log(`Email sent successfully to ${RECIPIENTS.join(', ')}`);
  console.log('Resend ID:', data.id);
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
