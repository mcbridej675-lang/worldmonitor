#!/usr/bin/env node
/**
 * World Monitor — Global Daily Briefing Email Sender
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
 */

const RECIPIENTS = [
  'mcbridej675@gmail.com',
  'john.mcbride.mil@usmc.mil',
  'paul.foersch@usmc.mil',
];

const TESTING_RECIPIENTS = [
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Conflict &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1: ISRAEL INTERCEPTS GAZA AID FLOTILLA ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Maritime / International Law &mdash; May 18&ndash;19</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israel Intercepts Gaza Aid Flotilla in International Waters; T&uuml;rkiye Condemns &ldquo;Act of Piracy&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Israeli Navy intercepted and boarded all remaining vessels of the <strong>Global Sumud Flotilla</strong> &mdash; a convoy of over <strong>50 boats</strong> carrying humanitarian aid from the Turkish port of Marmaris toward Gaza &mdash; in <strong>international waters west of Cyprus</strong>. At least <strong>100 activists</strong> from multiple nations have reportedly been arrested and are being transferred to Israel. Six crew members aboard the <em>Lina al-Nablusi</em> were &ldquo;kidnapped,&rdquo; according to organisers, including <strong>Dr. Margaret Connolly</strong>, an Irish doctor and sister of Irish President Catherine Connolly.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>T&uuml;rkiye&rsquo;s Foreign Ministry</strong> condemned the interception as an &ldquo;act of piracy&rdquo; and is coordinating the return of Turkish nationals. Multiple governments and human rights organizations have condemned the operation as a violation of international law. Israeli PM Netanyahu described the raid as &ldquo;effectively neutralizing a malicious plan designed to break the isolation we have imposed on Hamas.&rdquo; The incident evokes the <strong>2010 Mavi Marmara raid</strong>, which killed 10 Turkish activists and ruptured Israeli-Turkish relations for years.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Heightened Middle East risk premium adds pressure to an already volatile region. Diplomatic fallout with T&uuml;rkiye and Ireland could trigger trade disruptions. Eastern Mediterranean shipping insurance costs may rise.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>ZIM</strong> (ZIM Integrated Shipping) &mdash; Israeli shipping company faces direct reputational and operational risk. <strong>ESLT</strong> (Elbit Systems) &mdash; Israeli defense firm exposed to potential sanctions or boycott pressure. <strong>TEVA</strong> (Teva Pharmaceutical) &mdash; Israel&rsquo;s largest public company; sensitive to diplomatic isolation risk. <strong>Turkish Lira / BIST 100</strong> &mdash; Ankara&rsquo;s sharp response could spark capital flight if relations deteriorate. <strong>Oil futures</strong> &mdash; each new Middle East flashpoint adds to the existing energy supply risk premium. <strong>GLD/IAU</strong> (Gold ETFs) &mdash; safe-haven demand strengthens.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: WHO DECLARES EBOLA GLOBAL EMERGENCY ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Global Health / Africa &mdash; May 16&ndash;17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">WHO Declares Ebola Outbreak in DRC &amp; Uganda a &ldquo;Public Health Emergency of International Concern&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The World Health Organization declared the <strong>Ebola outbreak</strong> in the <strong>Democratic Republic of the Congo and Uganda</strong> a <strong>Public Health Emergency of International Concern (PHEIC)</strong> &mdash; the highest alarm level in global health. The outbreak involves the rare <strong>Bundibugyo strain</strong>, for which <strong>no approved vaccine or treatment exists</strong>. As of May 16, health authorities have recorded <strong>8 laboratory-confirmed cases, 246 suspected cases, and 80 suspected deaths</strong> in DRC&rsquo;s Ituri Province.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The outbreak has already crossed borders: <strong>Uganda</strong> has confirmed two cases linked to DRC travellers, including <strong>one death in Kampala</strong>. Cases linked to the outbreak have also reached Congo&rsquo;s capital, <strong>Kinshasa</strong>, raising fears of wider regional spread. The <strong>CDC has mobilised an international response team</strong>. The WHO stopped short of declaring a pandemic but warned of &ldquo;high regional risk.&rdquo; This is only the <strong>8th PHEIC declaration</strong> in WHO history, placing it alongside COVID-19 and the 2014 West Africa Ebola crisis.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PHEIC declarations historically trigger pharma rallies and travel/hospitality sell-offs. The Bundibugyo strain&rsquo;s lack of an approved vaccine creates an urgent R&amp;D race. Mining companies with DRC exposure face operational risk.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>MRNA</strong> (Moderna) &mdash; mRNA platform positioned for rapid Ebola vaccine development; potential emergency use authorization catalyst. <strong>BNTX</strong> (BioNTech) &mdash; similar mRNA capability; watch for partnership announcements. <strong>GILD</strong> (Gilead Sciences) &mdash; makes remdesivir, explored for Ebola treatment. <strong>EBS</strong> (Emergent BioSolutions) &mdash; biodefense contractor with Ebola countermeasure experience. <strong>GLNCY</strong> (Glencore) &mdash; major DRC cobalt/copper mining operations face disruption risk. <strong>ABNB, BKNG</strong> (Airbnb, Booking Holdings) &mdash; African tourism sector vulnerable to travel advisories.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: RUSSIA-UKRAINE DRONE WAR ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Conflict / Europe / Black Sea &mdash; May 17&ndash;18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Ukraine Launches Largest Drone Strike on Moscow; Russia Hits Chinese Ship in Black Sea Before Putin-Xi Meeting</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ukraine executed one of its <strong>largest drone strikes on Russia</strong> since the full-scale invasion began, killing at least <strong>4 people including 3 near Moscow</strong> and wounding over a dozen. Drone debris fell near <strong>Russia&rsquo;s largest airport</strong> without causing damage. President Zelenskyy confirmed the strikes, calling them &ldquo;entirely justified&rdquo; as peace talks remain stalled. The operation demonstrates Ukraine&rsquo;s rapidly improving long-range drone capability and willingness to bring the war to Russian civilians.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a diplomatically explosive incident, Russian drones struck <strong>two ships in the Black Sea</strong> approaching Ukrainian ports, including the <strong>KSL Deyang</strong> &mdash; a <strong>Chinese-owned cargo vessel with a Chinese crew</strong> sailing under a Marshall Islands flag. The strike occurred just <strong>one day before Putin travelled to Beijing</strong> to meet Xi Jinping. NPR reports a &ldquo;shifting momentum&rdquo; in the war, with signs that Russians are <strong>growing weary</strong> of the conflict while Ukraine&rsquo;s drone technology hits deeper inside Russian territory.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Chinese ship strike complicates the Putin-Xi relationship and could shift Beijing&rsquo;s calculus on the war. Black Sea shipping insurance premiums will rise. European defense stocks continue their multi-year rally. Grain supply disruption risk remains elevated.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>RHM.DE</strong> (Rheinmetall) &mdash; Germany&rsquo;s top defense firm surging on European rearmament spending. <strong>RTX</strong> (RTX Corp) &mdash; Patriot systems and drone countermeasures in demand. <strong>LMT</strong> (Lockheed Martin) &mdash; NATO replenishment orders accelerating. <strong>AVAV</strong> (AeroVironment) &mdash; Switchblade drone maker; direct beneficiary of drone warfare era. <strong>Wheat futures / WEAT</strong> &mdash; Black Sea shipping disruption bullish for global grain prices. <strong>COSCO</strong> (1919.HK) &mdash; Chinese shipping giant faces Black Sea route recalculation.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: IRAN-US CEASEFIRE DETERIORATING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Energy / Geopolitics / Global Economy &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran-U.S. Ceasefire on &ldquo;Life Support&rdquo;: Trump Cancels Planned Strikes, Sets 5 Hardline Preconditions</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The April 8 ceasefire between the U.S. and Iran is collapsing. <strong>Intermittent fighting has resumed since May 4</strong>, when Iran struck targets in the UAE, followed by exchanges of fire as U.S. vessels transited through the <strong>Strait of Hormuz</strong> on May 7. Trump said he is holding off on a planned military strike on Iran because &ldquo;serious negotiations&rdquo; are underway, but called Iran&rsquo;s latest proposal &ldquo;TOTALLY UNACCEPTABLE.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Trump has set <strong>5 hardline preconditions</strong>: delivery of 400kg enriched uranium to the U.S., reduction to a single nuclear facility, no release of frozen Iranian assets, linking all fronts to negotiations, and no compensation to Iran. U.S. and Iranian officials <strong>have not met since April 12</strong> and are exchanging proposals through intermediaries. Crude flows through Hormuz remain <strong>down ~6 million bpd</strong>. <strong>Brent crude</strong> remains above <strong>$107/barrel</strong>. U.S. inflation sits at <strong>3.8%</strong>, with energy costs as the primary driver.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The energy crisis is the dominant macro driver globally. Oil above $100 creates stagflationary pressure, hurting consumer stocks while boosting energy producers. The IEA warned markets could remain &ldquo;severely undersupplied until October.&rdquo;<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM</strong> (ExxonMobil), <strong>CVX</strong> (Chevron), <strong>SHEL</strong> (Shell) &mdash; all benefit from elevated crude; near 52-week highs. <strong>DAL, UAL</strong> (Delta, United Airlines) &mdash; jet fuel costs crushing margins. <strong>HAL, SLB</strong> (Halliburton, SLB) &mdash; oilfield services demand surging as producers push output. <strong>DANGCEM.NG</strong> (Dangote) &mdash; Nigeria&rsquo;s mega-refinery exported record 1.66 billion litres in April, emerging as a critical alternative supplier. <strong>GLD</strong> (Gold) &mdash; safe-haven flows accelerating on conflict escalation fears.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: GLOBAL BOND ROUT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global Finance / Bond Markets &mdash; May 19</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Global Bond Rout: 30-Year U.S. Treasury Hits 19-Year High at 5.19%; S&amp;P 500 Posts Third Straight Loss</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A global bond sell-off intensified as the <strong>U.S. 30-year Treasury yield</strong> briefly topped <strong>5.19%</strong> &mdash; its highest level in nearly <strong>19 years</strong> &mdash; sending shockwaves through equity markets worldwide. The <strong>S&amp;P 500 fell 0.67%</strong> to 7,353.61, marking its <strong>third consecutive losing session</strong>. The <strong>Nasdaq dropped 0.84%</strong> to 25,870.71. The <strong>Dow shed 322 points</strong> (&minus;0.65%) to close at 49,363.88.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The yield spike reflects a toxic combination: <strong>persistent inflation at 3.8%</strong> driven by the Iran energy crisis, uncertainty over new Fed Chair <strong>Kevin Warsh&rsquo;s</strong> policy direction, and ballooning U.S. fiscal deficits. Bond vigilantes are repricing the &ldquo;higher for longer&rdquo; narrative aggressively. The sell-off is global: <strong>UK Gilts, German Bunds, and Japanese Government Bonds</strong> all saw yields rise in sympathy. Emerging market currencies are under pressure from the strong dollar, with capital outflows accelerating from Asia and Latin America.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Rising yields compress equity valuations, especially for growth and rate-sensitive sectors. The bond market is now the dominant force in global asset allocation. Financials benefit; REITs and tech suffer.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>JPM, GS, BAC</strong> (JPMorgan, Goldman Sachs, Bank of America) &mdash; banks benefit from sustained higher rates via net interest income. <strong>TLT</strong> (iShares 20+ Year Treasury ETF) &mdash; long-duration bonds under severe pressure; potential buying opportunity for contrarians. <strong>AAPL, MSFT, GOOGL</strong> &mdash; mega-cap tech faces valuation headwinds from rising discount rates. <strong>O, AMT</strong> (Realty Income, American Tower) &mdash; REITs disadvantaged in higher-rate environment. <strong>EEM</strong> (Emerging Markets ETF) &mdash; strong dollar and elevated U.S. rates create capital outflow risk. <strong>DXY</strong> (Dollar Index) &mdash; strengthening dollar pressures commodity importers globally.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The world is fracturing across multiple axes simultaneously.</strong> Israel&rsquo;s flotilla interception risks a diplomatic crisis with NATO ally T&uuml;rkiye while the WHO&rsquo;s Ebola PHEIC declaration adds a health emergency to an already overloaded global risk environment. The Russia-Ukraine drone war is escalating in both directions, with the Chinese ship strike adding a wild card to great-power dynamics.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The macro picture is stagflationary and deteriorating.</strong> The bond rout is the clearest signal: 30-year yields at 19-year highs with inflation at 3.8% and oil above $107 means the new Fed Chair has no room to cut. The S&amp;P 500&rsquo;s three-day losing streak reflects markets repricing the &ldquo;higher for longer&rdquo; reality. The strong dollar is exporting pain to emerging markets.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Gaza flotilla diplomatic fallout (T&uuml;rkiye/Ireland response) &bull; Ebola spread beyond DRC/Uganda borders &bull; Putin-Xi summit outcomes after Chinese ship strike &bull; Iran ceasefire deadline and Hormuz flows &bull; U.S. Treasury auction demand this week &bull; Warsh&rsquo;s first public statements as Fed Chair &bull; Dangote Refinery&rsquo;s growing role in global energy supply
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; NPR &bull; CNN &bull; CNBC &bull; TheStreet &bull; Reuters &bull; The Times of Israel &bull; PBS News &bull; UN News &bull; WHO &bull; CDC &bull; Fortune &bull; Axios &bull; Euronews &bull; Arab News &bull; TVP World &bull; Al Arabiya &bull; Global Biodefense &bull; UK House of Commons Library &bull; ACLED
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Sources verified across multiple outlets where possible.<br/>
        UNCLASSIFIED // FOR GENERAL DISTRIBUTION
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #7c3aed; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

import { execSync } from 'node:child_process';

const useTestingMode = RESEND_KEY && !process.env.RESEND_DOMAIN_VERIFIED;
const recipients = useTestingMode ? TESTING_RECIPIENTS : RECIPIENTS;

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: recipients,
  subject: `[World Monitor] Global Intelligence Briefing — ${today}`,
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
  console.log(`Email sent successfully to ${recipients.join(', ')}`);
  console.log('Resend ID:', data.id);
  if (useTestingMode) {
    console.log('\nNote: Sent in testing mode to verified email only.');
    console.log(`Target recipients (requires verified domain): ${RECIPIENTS.join(', ')}`);
  }
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
