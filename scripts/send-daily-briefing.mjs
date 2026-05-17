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

    <!-- ===================== EVENT 1: DRONE STRIKE ON UAE BARAKAH NUCLEAR PLANT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Nuclear Security / Energy &mdash; May 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Drone Strike Hits UAE&rsquo;s Barakah Nuclear Plant &mdash; IAEA Expresses &ldquo;Grave Concern&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A drone struck an electrical generator on the perimeter of the <strong>Barakah Nuclear Energy Plant</strong> in Abu Dhabi&rsquo;s Al Dhafra region &mdash; the first attack on the Arabian Peninsula&rsquo;s only nuclear power station since the Iran war began. UAE air defenses intercepted two of three incoming drones, but the third penetrated and sparked a fire near the plant&rsquo;s outer perimeter.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The UAE condemned the attack as a &ldquo;treacherous terrorist attack&rdquo; and &ldquo;unacceptable aggression&rdquo; and launched an investigation into the source. No injuries or radiation leaks were reported, and all reactor units continued operating normally. The <strong>IAEA&rsquo;s Rafael Grossi</strong> stated that &ldquo;military activity that threatens nuclear safety is unacceptable.&rdquo; While no group has claimed responsibility, sources point to an <strong>Iranian drone</strong>. Simultaneously, <strong>Saudi Arabia intercepted three drones</strong> launched from Iraqi airspace, signaling a broader pattern of regional escalation.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            A nuclear plant attack dramatically escalates the regional risk premium. Energy markets and safe havens react to the first-ever strike on Gulf nuclear infrastructure. Gulf sovereign bonds face widening spreads.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM</strong> (ExxonMobil), <strong>CVX</strong> (Chevron), <strong>SHEL</strong> (Shell) &mdash; oil producers benefit from elevated crude prices and Gulf supply disruption fears. <strong>GLD/IAU</strong> (Gold ETFs) &mdash; safe-haven flows surge on nuclear incident risk. <strong>RTX</strong> (RTX Corp), <strong>LMT</strong> (Lockheed Martin) &mdash; Gulf states will accelerate air defense procurement (Patriot, THAAD). <strong>ADNOC Distribution</strong> (ADX: ADNOCDIST) &mdash; UAE&rsquo;s national energy company faces direct operational risk. <strong>CCJ</strong> (Cameco), <strong>URA</strong> (Global X Uranium ETF) &mdash; nuclear energy sentiment may take a short-term hit globally.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: UKRAINE 500-DRONE STRIKE ON MOSCOW ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Conflict / Europe / Russia &mdash; May 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Ukraine Launches 500-Drone Strike on Moscow &mdash; Largest Attack on Russian Capital in Over a Year</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ukraine launched one of its <strong>largest-ever drone strikes</strong> on Russia overnight, sending approximately <strong>500 drones</strong> at targets in Moscow and surrounding regions. At least <strong>four people were killed</strong>, including three in the Moscow area, and <strong>12 were wounded</strong> near the entrance to the city&rsquo;s oil refinery. Russia&rsquo;s Defense Ministry claimed it intercepted <strong>1,000 Ukrainian drones</strong> across more than a dozen regions over 24 hours.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ukraine&rsquo;s Ministry of Defense confirmed targeting the <strong>Moscow Oil Refinery</strong>, the <strong>Solnechnogorskaya fuel depot</strong>, and <strong>microelectronics production facilities</strong>. Drone debris also fell on the grounds of <strong>Sheremetyevo Airport</strong> &mdash; Russia&rsquo;s largest &mdash; though flights were not affected. President <strong>Zelenskyy</strong> confirmed the strikes, describing them as a response to continued Russian bombardment of Ukrainian cities. The operation represents a significant leap in Ukraine&rsquo;s long-range drone capability and its willingness to bring the war directly to Moscow.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Striking Moscow&rsquo;s oil infrastructure adds to global refining capacity concerns and European energy anxiety. Defense stocks continue to rally on the long-war thesis. Russian ruble and MOEX under pressure.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>RHEINMETALL</strong> (RHM.DE) &mdash; Germany&rsquo;s top defense contractor surging on European rearmament and drone demand. <strong>RTX, LMT, NOC</strong> (RTX Corp, Lockheed Martin, Northrop Grumman) &mdash; NATO replenishment orders accelerate as the war intensifies. <strong>KRATOS</strong> (KTOS) &mdash; U.S. drone manufacturer benefits from global drone warfare escalation. <strong>European natural gas futures</strong> &mdash; tick higher on refinery disruption and supply anxiety. <strong>Wheat futures / WEAT</strong> &mdash; conflict escalation threatens Black Sea grain corridors. <strong>AEROJET</strong> (AJRD) &mdash; missile and propulsion systems demand rises.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: IRAN CEASEFIRE COLLAPSE & TRUMP SITUATION ROOM ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Energy / Global Economy &mdash; May 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Trump Convenes Situation Room as Iran Ceasefire Nears Collapse &mdash; IRGC Threatens U.S. Gulf Bases</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump is convening a <strong>Situation Room meeting</strong> to review military options against Iran as the IRGC effectively blocks the <strong>Strait of Hormuz</strong> and threatens to &ldquo;deactivate&rdquo; U.S. bases in the Persian Gulf. Trump has warned that Iran &ldquo;better get moving, FAST&rdquo; or &ldquo;there won&rsquo;t be anything left of them.&rdquo; The ceasefire, which he described as having a &ldquo;1% chance of living,&rdquo; is effectively dead in diplomatic terms.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>CENTCOM</strong> confirmed it has diverted <strong>81 ships</strong> and disabled four others during the ongoing blockade of Iranian ports. <strong>Brent crude</strong> remains above <strong>$107/barrel</strong> and <strong>WTI</strong> above <strong>$102</strong>. The <strong>IEA</strong> projects Q2 2026 demand contraction of roughly <strong>1.5 million barrels per day</strong> &mdash; the sharpest since COVID-19. U.S. inflation stands at <strong>3.8%</strong>, with markets now pricing in the possibility of a <strong>rate hike</strong> by December. The Barakah nuclear plant strike (Event 1) is widely seen as connected to Iran&rsquo;s proxy network escalation.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The S&amp;P 500 fell <strong>1.24% to 7,408</strong>, Dow <strong>&minus;1.07%</strong>, Nasdaq <strong>&minus;1.54%</strong>. Oil above $100 creates stagflationary pressure globally. Bond yields hit their highest in a year as traders price in possible rate hikes. A full resumption of hostilities would send oil toward $130+.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM</strong> (ExxonMobil), <strong>CVX</strong> (Chevron), <strong>SHEL</strong> (Shell), <strong>BP</strong> &mdash; energy majors at or near 52-week highs on elevated crude. <strong>HAL, SLB</strong> (Halliburton, SLB) &mdash; oilfield services demand surging. <strong>DAL, UAL, AAL</strong> (Delta, United, American) &mdash; airlines face severe margin compression from jet fuel costs. <strong>TLT</strong> (20+ Year Treasury ETF) &mdash; long bonds under heavy pressure as rate hike expectations build. <strong>GLD</strong> (Gold) &mdash; safe-haven flows accelerating. <strong>EEM</strong> (Emerging Markets ETF) &mdash; strong dollar and energy shock crushing EM economies.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: ISRAEL-LEBANON STRIKES DESPITE CEASEFIRE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Conflict / Middle East / Levant &mdash; May 17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israeli Airstrikes Kill 5 in Southern Lebanon Despite Extended Ceasefire; Eurovision Boycott Widens</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Israeli warplanes launched a series of airstrikes on <strong>southern and eastern Lebanon</strong>, killing at least <strong>five people</strong> in towns including <strong>Yahmar al-Shaqif, Taybeh, Kafra, and Tayr Debba</strong>. The Israeli army issued evacuation warnings to residents across multiple villages. Hezbollah responded with rocket fire that hit open areas in northern Israel. The strikes continue despite a <strong>45-day ceasefire extension</strong> agreed just two days earlier on May 15, with the U.S. reportedly granting Israel permission to target perceived threats.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, <strong>Eurovision 2026</strong> in Vienna became a flashpoint as <strong>five countries &mdash; Spain, Netherlands, Ireland, Iceland, and Slovenia &mdash; boycotted</strong> the contest over Israel&rsquo;s participation, the largest boycott in Eurovision history. Over <strong>2,000 protesters</strong> carrying Palestinian flags marched toward the Wiener Stadthalle. The EBU faced criticism for excluding Russia over Ukraine but allowing Israel to compete amid its operations in Gaza and Lebanon.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Lebanon&rsquo;s ongoing instability compounds the broader Middle East risk premium. Israel&rsquo;s growing international isolation creates reputational risks for companies with deep Israeli ties. Defense demand remains structurally elevated.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>ESLT</strong> (Elbit Systems) &mdash; Israel&rsquo;s largest defense exporter; benefits from Iron Dome demand but faces growing boycott/divestment pressure in Europe. <strong>TEVA</strong> (Teva Pharmaceutical) &mdash; Israel&rsquo;s largest public company exposed to BDS-related risks and domestic instability. <strong>Tel Aviv 125 Index</strong> &mdash; Israeli equities under pressure from political isolation and war costs. <strong>DFEN</strong> (Direxion Daily Aerospace &amp; Defense Bull 3X) &mdash; leveraged play on sustained defense spending. <strong>Lebanese sovereign bonds</strong> &mdash; already in default, continued strikes further delay any restructuring. <strong>European media stocks</strong> &mdash; Eurovision boycott reflects broader cultural-political rifts affecting content and broadcasting.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: VENEZUELA $170B DEBT RESTRUCTURING ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global Finance / Latin America / Sovereign Debt &mdash; May 13&ndash;17</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Venezuela Launches $170 Billion Debt Restructuring &mdash; One of the Largest in History After 9-Year Default</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Venezuela initiated what could become <strong>one of the world&rsquo;s largest sovereign debt restructurings</strong>, aiming to rework an estimated <strong>$170 billion</strong> in defaulted bonds, PDVSA (state oil company) debt, arbitration awards, and accrued interest. The government appointed <strong>Centerview Partners</strong> as financial adviser and said it would present its macroeconomic framework to creditors next month.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Venezuela has been in default since <strong>2017</strong> &mdash; nine years &mdash; making this one of the longest sovereign defaults in modern history. The restructuring was made possible by the <strong>lifting of U.S. sanctions</strong> earlier this year. Venezuelan government bonds due in 2034 jumped to their <strong>highest level since 2014</strong>, and PDVSA bonds rose two cents on the dollar on the announcement. Venezuela&rsquo;s central bank chief said the process would bring the country &ldquo;out of the shadows.&rdquo; The move has implications for <strong>emerging market debt investors globally</strong> and could unlock billions in frozen Venezuelan oil production capacity at a time when global energy markets desperately need supply.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Venezuela&rsquo;s return to capital markets is a landmark event for EM debt. If restructuring succeeds, it could add <strong>1&ndash;2 million barrels/day</strong> of oil production capacity back to global markets over time &mdash; a significant counterweight to the Iran supply disruption.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>EMB</strong> (iShares J.P. Morgan USD Emerging Markets Bond ETF) &mdash; Venezuelan bonds are among the most distressed in the index; successful restructuring lifts the entire EM debt complex. <strong>CVX</strong> (Chevron) &mdash; holds major Venezuelan oil concessions; stands to benefit enormously from sanctions relief and production restart. <strong>SLB, HAL</strong> (SLB, Halliburton) &mdash; oilfield services firms poised to rebuild Venezuela&rsquo;s decrepit infrastructure. <strong>PDVSA bonds</strong> &mdash; distressed debt traders see massive upside; bonds already rallying. <strong>XOM</strong> (ExxonMobil) &mdash; has outstanding arbitration claims against Venezuela; restructuring framework matters. <strong>Colombian peso / Ecopetrol (EC)</strong> &mdash; neighboring Colombia&rsquo;s economy is directly affected by Venezuelan stability and migration flows.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Middle East is the world&rsquo;s most dangerous tinderbox right now.</strong> A drone hitting a nuclear plant in the UAE, the Iran ceasefire collapsing with Trump convening the Situation Room, and Israel striking Lebanon despite a ceasefire &mdash; these are not isolated incidents. They are interconnected escalations that threaten global energy security, with Brent crude above $107 and the Strait of Hormuz effectively disrupted.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Meanwhile, the war in Europe is intensifying.</strong> Ukraine&rsquo;s 500-drone strike on Moscow represents a dramatic escalation in capability and willingness to bring the war to Russia&rsquo;s capital. This is no longer a frozen conflict &mdash; it is actively escalating on both sides.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The macro picture is stagflationary.</strong> Oil above $100, U.S. inflation at 3.8%, bond yields at year-highs, and markets now pricing in a possible rate hike. Venezuela&rsquo;s debt restructuring offers a glimmer of medium-term supply relief, but the immediate trajectory is one of compounding geopolitical risk.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> Trump Situation Room outcomes &bull; UAE investigation into Barakah drone source &bull; Iran ceasefire deadline &bull; Zelenskyy&rsquo;s next drone escalation &bull; Lebanon ceasefire compliance &bull; Venezuela creditor response to restructuring terms &bull; Oil price trajectory toward $120+ if hostilities resume &bull; Bond market reaction to rate hike speculation
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        NPR &bull; The Washington Post &bull; CNN &bull; Al Jazeera &bull; Euronews &bull; Time &bull; Fortune &bull; Fox News &bull; PBS News &bull; The National (UAE) &bull; Khaleej Times &bull; IAEA &bull; Bloomberg &bull; Reuters &bull; CNBC &bull; The Times of Israel &bull; Arab News &bull; Yahoo Finance &bull; TheStreet &bull; Central Banking &bull; CBC News
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
