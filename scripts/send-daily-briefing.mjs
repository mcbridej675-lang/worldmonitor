#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
  'johnmcbride2928@gmail.com',
];
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Markets &bull; Regulation &bull; Trade Impact</p>
    </div>

    <!-- MARKET SNAPSHOT -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; May 1, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">S&amp;P 500</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">7,230.12 (+0.29%, All-Time High)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Nasdaq</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">25,114.44 (+0.89%, Record Close)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Dow Jones</td>
          <td style="padding: 6px 0; color: #ef4444; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">49,499.27 (-0.31%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Nikkei 225</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">59,513.12 (+0.38%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">S&amp;P/ASX 200</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">8,729.80 (+0.74%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">Brent Crude</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">$108.17/bbl (-5.4%, Iran peace proposal)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px; border-bottom: 1px solid #1a1a1a;">WTI Crude</td>
          <td style="padding: 6px 0; color: #22c55e; font-size: 12px; font-weight: 700; text-align: right; border-bottom: 1px solid #1a1a1a;">$101.94/bbl (-3.0%)</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; color: #bbb; font-size: 12px;">TTF Natural Gas</td>
          <td style="padding: 6px 0; color: #ea580c; font-size: 12px; font-weight: 700; text-align: right;">&euro;47/MWh (elevated)</td>
        </tr>
      </table>
    </div>

    <!-- EVENT 1: Iran Blockade & Oil Whipsaw -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy &amp; Security &mdash; May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Sends Peace Proposal &mdash; Oil Crashes From $126 to $108 in 24 Hours; Trump Says &ldquo;Not Satisfied&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a dramatic 24-hour swing, Iran submitted an updated peace proposal to mediators in Pakistan, sending Brent crude plummeting from a wartime intraday high of <strong>$126/barrel to $108</strong> &mdash; the sharpest single-session reversal since the conflict began on Day 61 of Operation Epic Fury. However, President Trump rejected the offer, telling reporters <strong>&ldquo;Iran wants to make a deal, but I&rsquo;m not satisfied with it.&rdquo;</strong> The naval blockade continues, with <strong>41 tankers carrying 69 million barrels (~$6B in oil)</strong> stranded and unable to sell.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Pentagon confirmed the war has cost <strong>$25 billion</strong> with <strong>14 American service members killed</strong>. The USS Gerald R. Ford is departing after a record <strong>309-day deployment</strong>, but two carriers remain enforcing the blockade. Senate Republicans blocked a War Powers resolution for the sixth time as the <strong>60-day deadline expired on May 1</strong>. The IMF&rsquo;s April World Economic Outlook, titled <strong>&ldquo;Global Economy in the Shadow of War,&rdquo;</strong> warned the blockade threatens a global energy crisis if it persists through summer.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The dominant global macro driver. The $18/bbl oil drop signals markets are pricing in ceasefire hope &mdash; but Trump&rsquo;s rejection means volatility will persist. <strong>Energy supermajors</strong> (<strong>ExxonMobil [XOM]</strong>, <strong>Shell [SHEL]</strong>, <strong>TotalEnergies [TTE]</strong>, <strong>BP [BP]</strong>) reported massive Q1 profits but face downside if a deal materializes. <strong>Airlines</strong> (<strong>Ryanair [RYAAY]</strong>, <strong>Lufthansa [LHA.DE]</strong>, <strong>IAG [IAG.L]</strong>) could see major relief rallies on any ceasefire. Defense contractors <strong>Lockheed Martin [LMT]</strong>, <strong>RTX Corp [RTX]</strong>, <strong>Northrop Grumman [NOC]</strong> remain bid. ECB has postponed rate cuts and cut GDP forecasts &mdash; European banks and consumer stocks face margin pressure. This is the single most important variable for every portfolio globally.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: Myanmar Suu Kyi -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Southeast Asia / Political &mdash; Apr 30&ndash;May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Myanmar Junta Transfers Aung San Suu Kyi to House Arrest After 5 Years in Prison</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Myanmar&rsquo;s military government transferred ousted leader <strong>Aung San Suu Kyi, 80,</strong> from Naypyidaw&rsquo;s main prison to house arrest, more than five years after the February 2021 coup. State broadcaster MRTV said the remaining portion of her sentence would be <strong>&ldquo;served at a designated residence,&rdquo;</strong> reducing her term to <strong>18 years and 9 months</strong> with over 13 years still to serve. The move was framed as a humanitarian gesture to celebrate Buddha Day.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The timing follows junta chief <strong>Min Aung Hlaing&rsquo;s swearing-in as president on April 10</strong> after a controversial election. He has pledged to &ldquo;enhance international relations&rdquo; and &ldquo;restore normal relations&rdquo; with ASEAN. Analysts view the move as a diplomatic signal aimed at <strong>reducing Myanmar&rsquo;s international isolation</strong> and potentially unlocking frozen aid and investment &mdash; though Western governments and human rights groups have called it insufficient without full release and democratic restoration.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Limited direct impact on global indices, but significant for <strong>ASEAN-exposed funds</strong> and Myanmar&rsquo;s natural gas/mining sectors. If sanctions ease, <strong>PTTEP [PTTEP.BK]</strong> (Thailand&rsquo;s PTT Exploration, major Myanmar gas operator) and <strong>Woodside Energy [WDS]</strong> could benefit from resumed investment flows. <strong>iShares MSCI Frontier and Select EM ETF [FM]</strong> has indirect Myanmar exposure. Watch for ASEAN diplomatic response &mdash; if the bloc re-engages, it could unlock infrastructure spending benefiting <strong>Thai Beverage [Y92.SI]</strong> and regional construction firms. The rare earth and jade mining sectors in Myanmar remain largely inaccessible but any opening would affect global supply chains for critical minerals.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: Russia-Ukraine Escalation -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Europe / Conflict &mdash; Apr 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Ukraine Strikes 1,500km Deep Into Russia; Moscow Scales Back Victory Day Parade for First Time</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ukraine conducted its deepest strike yet into Russian territory, hitting an <strong>oil pumping station near Perm &mdash; approximately 1,500 kilometers from the Ukrainian border</strong>. President Zelenskyy stated Ukraine would continue extending its strike range to <strong>&ldquo;limit Moscow&rsquo;s war funding by targeting refineries, depots, and ports.&rdquo;</strong> The attack signals a significant expansion of Ukraine&rsquo;s long-range strike capability, likely using domestically produced or Western-supplied extended-range systems.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, Russia announced it will <strong>exclude armoured vehicles and military cadets from its May 9 Victory Day parade</strong> in Moscow for the first time since the full-scale invasion began, citing the &ldquo;operational situation&rdquo; and a &ldquo;terrorist threat&rdquo; from Ukraine. Zelenskyy is also seeking details on a short-term ceasefire Russia proposed to Trump. These developments signal <strong>both escalation in capability and potential diplomatic opening</strong> occurring simultaneously.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Ukraine&rsquo;s deepening strikes on Russian energy infrastructure add upward pressure to already elevated <strong>TTF natural gas (&euro;47/MWh)</strong> and European energy costs. <strong>Equinor [EQNR]</strong> and <strong>Shell [SHEL]</strong> benefit from European gas premiums. European defense stocks &mdash; <strong>Rheinmetall [RHM.DE]</strong>, <strong>BAE Systems [BA.L]</strong>, <strong>Leonardo [LDO.MI]</strong>, <strong>Saab [SAAB-B.ST]</strong> &mdash; continue their multi-year rally as the conflict shows no signs of abating. The scaled-back Victory Day parade may signal Russian military strain, which could accelerate ceasefire talks &mdash; watch for a potential risk-off reversal in defense names if a ceasefire materializes. European grain futures remain sensitive to any Black Sea escalation.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 4: Mali Security Crisis -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">West Africa / Security &mdash; Apr 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">France Urges Citizens to Flee Mali as Coordinated Militant Attacks Reach the Capital Bamako</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          France advised its citizens in Mali to leave <strong>&ldquo;as soon as possible&rdquo;</strong> after coordinated attacks by separatist and Islamist militant groups spread across the country, including <strong>explosions and gunfire in the capital Bamako</strong>. A senior defence leader was reportedly killed in an apparent suicide bombing. The attacks represent a major escalation in the Sahel security crisis, with militant groups exploiting the vacuum left after France and UN peacekeepers withdrew.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Mali&rsquo;s military junta, which seized power in 2020 and expelled French forces in favor of Russian Wagner Group mercenaries, faces its most serious security challenge yet. The crisis underscores the <strong>broader destabilization of the Sahel region</strong> &mdash; Mali, Burkina Faso, and Niger are all under military rule with escalating insurgencies. The region is a critical corridor for <strong>gold mining, uranium, and migration routes to Europe</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Mali is Africa&rsquo;s third-largest gold producer. Instability pressures supply and supports <strong>gold prices</strong> (already elevated as a safe haven amid Iran conflict). <strong>Barrick Gold [GOLD]</strong> operates the Loulo-Gounkoto complex in Mali, one of Africa&rsquo;s largest gold mines &mdash; watch for operational disruption risk. <strong>B2Gold [BTO.TO]</strong> has the Fekola mine in Mali. <strong>Orano</strong> (French state-owned, private) relies on Niger for uranium &mdash; broader Sahel instability threatens nuclear fuel supply chains, indirectly benefiting <strong>Cameco [CCJ]</strong> and <strong>Kazatomprom [KAP.L]</strong> as alternative suppliers. European migration pressures from Sahel destabilization feed into right-wing political momentum, adding uncertainty to EU policy.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: Israel-Lebanon Ceasefire Violations -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Middle East / Conflict &mdash; Apr 30&ndash;May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israel Kills 30+ in Lebanon in Single Day, Violating Ceasefire &mdash; 1 Million Displaced by New Evacuation Orders</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Israeli forces conducted deadly strikes across southern Lebanon, <strong>killing more than 30 people in a single day</strong> including two children, in what Beirut and international observers called clear violations of the ceasefire agreement brokered by the United States. Hezbollah responded with drone attacks that injured Israeli soldiers. Israel issued <strong>new forced evacuation orders affecting approximately 1 million displaced Lebanese residents</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Simultaneously, Israel&rsquo;s military released maps claiming control of approximately <strong>two-thirds of Gaza territory</strong>, extending 11% beyond agreed ceasefire boundaries. The Global Sumud Flotilla &mdash; <strong>58 vessels carrying humanitarian aid</strong> &mdash; was intercepted by Israeli forces near Crete in international waters. Turkey condemned the seizure as <strong>&ldquo;an act of piracy&rdquo;</strong> while Spain&rsquo;s PM called it a violation of international law. The multi-front escalation raises the risk of a broader regional conflagration at a time when the Iran conflict already dominates energy markets.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Compounds the Iran-driven geopolitical risk premium. <strong>Israeli shekel (ILS)</strong> and <strong>Tel Aviv 125 Index</strong> face continued pressure. Defense names <strong>Elbit Systems [ESLT]</strong> and <strong>Rafael Advanced Defense</strong> (private) see sustained demand. <strong>ZIM Integrated Shipping [ZIM]</strong> and <strong>Frontline [FRO]</strong> benefit from elevated Mediterranean shipping/insurance costs. The flotilla seizure risks Turkish diplomatic escalation &mdash; watch <strong>Turkish lira</strong> and <strong>iShares MSCI Turkey ETF [TUR]</strong> for volatility. Lebanon reconstruction plays like <strong>Solidere [SOLA.BEY]</strong> remain speculative. The broader risk: if the Lebanon front fully reignites alongside the Iran war, oil could retest $126 and safe havens (<strong>gold, Swiss franc, US Treasuries</strong>) would surge.
          </p>
        </div>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Oil&rsquo;s wild swing is the story.</strong> Brent crashing from $126 to $108 on Iran&rsquo;s peace proposal &mdash; then Trump&rsquo;s rejection &mdash; shows how binary this market has become. Every portfolio is an Iran trade right now. A deal sends oil to $80 and triggers a massive rotation out of energy/defense into airlines, consumer discretionary, and emerging markets. No deal means $120+ oil, ECB rate cuts delayed further, and emerging market debt crises accelerating.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Sectors to favor:</strong> Energy (XOM, SHEL, TTE) and Defense (LMT, RTX, RHM.DE, BA.L) if blockade continues. Gold miners (GOLD, BTO.TO) as safe haven + Mali supply risk. Semiconductors (QCOM +16%) and Healthcare (LLY +7%) on earnings strength regardless of macro.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Sectors to watch with caution:</strong> Airlines (RYAAY, IAG.L, LHA.DE) until oil direction clarifies. European banks and consumer stocks facing ECB uncertainty. Social media (META) under EU regulatory assault. Frontier/emerging market equities sensitive to energy-driven inflation and IMF growth downgrades. Myanmar-exposed names are speculative upside only.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; Bloomberg &bull; CNBC &bull; CNN &bull; Democracy Now &bull; The Diplomat &bull; IMF World Economic Outlook &bull; NPR &bull; Reuters &bull; 10 Things Global News &bull; World Economic Forum &bull; ABC News &bull; Washington Times &bull; Go Local Prov
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
