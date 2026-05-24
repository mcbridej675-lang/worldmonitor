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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Okinawa Regional Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Okinawa, Japan &mdash; 24-Hour Intelligence Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Government &bull; Financial &bull; Regional Security</p>
    </div>

    <!-- =============== SECTION: MILITARY & DEFENSE =============== -->
    <div style="margin-bottom: 8px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">Military &amp; Defense</p>
    </div>

    <!-- EVENT 1: FIRST-EVER JIANGKAI III DETECTION -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Naval Intelligence / East China Sea &mdash; May 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">JMSDF Detects PLA Navy Jiangkai III-Class Frigate Near Okinawa for the First Time</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s Ministry of Defense confirmed the <strong>first-ever detection</strong> of a <strong>PLA Navy Type 054B (Jiangkai III-class) frigate</strong> operating beyond China&rsquo;s first island chain. On <strong>May 19</strong>, the Joint Staff Office reported that the frigate <strong>CNS Luohe (545)</strong> and fast combat support ship <strong>CNS Hulunhu (901)</strong> were spotted approximately <strong>520 km northwest of Kume Island</strong>, sailing southeast through waters between <strong>Okinawa Island and Miyako Island</strong> before entering the Philippine Sea.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Jiangkai III class represents a <strong>significant upgrade</strong> to China&rsquo;s anti-submarine warfare capability, featuring an integrated electric propulsion system and advanced sonar arrays. China has accelerated Type 054B production, with at least <strong>four hulls under construction</strong>. The deployment through the Miyako Strait &mdash; a critical chokepoint for PLA access to the Western Pacific &mdash; signals Beijing&rsquo;s intent to normalize advanced naval operations in Japan&rsquo;s near-seas. The <strong>PLA carrier <em>Liaoning</em></strong> and its strike group are also currently conducting live-fire drills in the Western Pacific.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9888; Significance for Okinawa</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Miyako Strait transit places advanced PLA ASW assets within <strong>operational range of U.S. bases at Kadena, Futenma, and Camp Schwab</strong>. Combined with the Liaoning carrier group&rsquo;s Western Pacific exercises, this represents a growing multi-domain PLA presence around Okinawa&rsquo;s southern flank. JMSDF and U.S. 7th Fleet submarine operations in the area face a more capable adversary tracking capability.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 2: NANSEI ISLANDS EXERCISE -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Joint Exercise / Nansei Islands &mdash; May 17&ndash;22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan&rsquo;s Largest Nansei Islands Exercise Concludes; First-Ever U.S.-Japan Coordination Center on Miyakojima</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The JGSDF <strong>Ground Component Command</strong> &mdash; the army&rsquo;s highest operational headquarters &mdash; completed its <strong>first-ever exercise focused on the Nansei (Ryukyu) island chain</strong> from May 17&ndash;22. Approximately <strong>300 JGSDF soldiers</strong> from all regional armies deployed across <strong>Ishigaki, Yonaguni, and Miyakojima</strong>, practicing troop deployment and supply transport using <strong>nine ports</strong> across the chain.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>20 Marines</strong> from the <strong>12th Marine Littoral Regiment</strong> (Okinawa-based) participated in command post training on Miyakojima from May 17&ndash;20, marking the <strong>first bilateral U.S.-Japan coordination center</strong> ever established on the island. Key capabilities deployed included a <strong>Type-88 surface-to-ship guided missile launcher</strong> on Ishigaki (~150 miles from Taiwan) and two <strong>ScanEagle II UAVs</strong> on Yonaguni (~70 miles from Taiwan). No live ammunition was used.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9888; Significance for Okinawa</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The exercise validates the <strong>12th MLR&rsquo;s stand-in force concept</strong> for a Taiwan contingency. The Miyakojima coordination center is a milestone in U.S.-Japan interoperability at the tactical level. <strong>Resolute Dragon 26</strong> (June 20&ndash;30) will follow, with plans for a <strong>GSDF V-22 Osprey</strong> to use <strong>MCAS Futenma</strong> for the first time &mdash; a politically sensitive move given the ongoing Futenma relocation debate.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 3: CHINA DRONE CONVERSION -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Threat Assessment / Taiwan Strait &mdash; May 22</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Has Converted ~500 J-6 Fighters Into Kamikaze Drones; 200+ Deployed to Fujian/Guangdong Near Taiwan</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Taiwan&rsquo;s Mainland Affairs Council reported that the PLA has converted approximately <strong>500 retired J-6 fighter jets</strong> into unmanned drones designated <strong>J-6W</strong>. At least <strong>200 have been deployed</strong> to air bases in <strong>Fujian and Guangdong provinces</strong> directly across the Taiwan Strait. The converted aircraft can be used as <strong>cruise missile-like kamikaze weapons</strong> or deployed in <strong>swarms to overwhelm air defenses</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, a PLA Navy Air Force aircraft issued <strong>multiple radio warnings</strong> to a Taiwanese aircraft in Taiwan&rsquo;s Southwestern ADIZ on <strong>May 18</strong>. A nearby <strong>U.S. Air Force aircraft responded</strong>, asserting that &ldquo;all aircraft have the lawful right to operate in international airspace.&rdquo; Japan&rsquo;s LDP has proposed raising defense spending to <strong>5% of GDP</strong> and deploying <strong>early warning radar on strategic island locations</strong> in direct response to the escalating PLA threat.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9888; Significance for Okinawa</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Okinawa&rsquo;s bases &mdash; <strong>Kadena AB, MCAS Futenma, Camp Schwab, White Beach</strong> &mdash; would be primary targets in any Taiwan contingency. The J-6W drone swarm threat adds a low-cost saturation attack vector that could strain Patriot and THAAD air defense systems deployed on the island. Japan&rsquo;s proposed 5% GDP defense spending would likely accelerate upgrades to Nansei chain air defenses.
          </p>
        </div>
      </div>
    </div>

    <!-- =============== SECTION: GOVERNMENT & POLICY =============== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">Government &amp; Policy</p>
    </div>

    <!-- EVENT 4: FUTENMA / HENOKO -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Base Realignment / Okinawa &mdash; Ongoing</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Futenma Relocation Debate Intensifies: Think Tank Urges Keeping Marines on Okinawa; Education Ministry Finds Henoko School Trip Violated Law</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Atlantic Council</strong> published a policy recommendation urging the U.S. to <strong>retain ~5,000 Marines on Okinawa</strong> rather than relocating them to Guam, arguing the move would be a &ldquo;grave mistake&rdquo; given the deteriorating security environment. The think tank also recommended retaining <strong>MCAS Futenma&rsquo;s airfield</strong> in central Okinawa alongside the Camp Schwab replacement facility under construction in Henoko, which Japan&rsquo;s defense ministry estimates will not be operational until at least <strong>2036</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a related development, Japan&rsquo;s <strong>Education Ministry</strong> ruled on <strong>May 23</strong> that a Doshisha International High School program violated the <strong>Basic Education Law&rsquo;s political neutrality requirements</strong>. The ruling stems from the <strong>March 16 boat capsize</strong> off Henoko that killed a <strong>17-year-old student and a 71-year-old boat captain</strong> during a school trip where students were taken on boats used by civic groups protesting the Henoko base construction. Education Minister <strong>Yohei Matsumoto</strong> called the school&rsquo;s planning &ldquo;grossly inappropriate.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #1e40af; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9432; Policy Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The Atlantic Council recommendation directly contradicts the existing U.S.-Japan agreement to relocate Marines to Guam. If adopted, it would <strong>increase the long-term U.S. military footprint on Okinawa</strong> despite Japan Defense Minister Koizumi&rsquo;s January pledge to reduce it. The Education Ministry ruling may dampen anti-base protest activity by stigmatizing educational programs tied to the movement.
          </p>
        </div>
      </div>
    </div>

    <!-- EVENT 5: TAKAICHI-LEE SUMMIT -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #1e40af; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Diplomacy / Indo-Pacific &mdash; May 19</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PM Takaichi Strengthens Trilateral Alliance with South Korea; PRC Escalates Rhetoric Against Japan&rsquo;s &ldquo;Remilitarization&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japanese Prime Minister <strong>Sanae Takaichi</strong> met with South Korean President <strong>Lee Jae Myung</strong> on <strong>May 19</strong>, affirming deepened <strong>U.S.-Japan-ROK trilateral security cooperation</strong>. The summit follows Japan&rsquo;s signing of a <strong>reciprocal access agreement with the Philippines</strong>, expanding Tokyo&rsquo;s coalition-building across the first island chain. Takaichi&rsquo;s government has accelerated Japan&rsquo;s defense transformation, with the LDP proposing a <strong>5% GDP defense spending target</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Beijing responded sharply, with PRC officials <strong>condemning &ldquo;Japanese right-wing forces&rdquo;</strong> and demanding Takaichi retract her 2025 statements that a Taiwan contingency could implicate Japan. The ongoing <strong>2025&ndash;2026 China-Japan diplomatic crisis</strong> shows no signs of abating, with China maintaining economic and rhetorical pressure. In the Solomon Islands, a newly elected prime minister who previously opposed China&rsquo;s 2022 security pact indicated continued engagement under the One China principle, complicating Japan&rsquo;s Pacific outreach.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #1e40af; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9432; Policy Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Takaichi&rsquo;s coalition-building <strong>elevates Okinawa&rsquo;s strategic importance</strong> as the nexus of trilateral U.S.-Japan-ROK operations and the Philippines reciprocal access framework. A 5% GDP defense target would represent a <strong>dramatic increase from the current ~2%</strong>, likely funding expanded missile defense, ISR capabilities, and force posture across the Nansei chain.
          </p>
        </div>
      </div>
    </div>

    <!-- =============== SECTION: FINANCIAL & ECONOMIC =============== -->
    <div style="margin-bottom: 8px; margin-top: 32px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">Financial &amp; Economic</p>
    </div>

    <!-- EVENT 6: FINANCIAL SNAPSHOT -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #eab308; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Markets / Japan Economy &mdash; May 22&ndash;23</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan Markets Snapshot: Nikkei 225 Surges 2.68% to 63,339; Yen Weakens to &yen;159.11/USD</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Nikkei 225</strong> jumped <strong>2.68%</strong> to close at <strong>63,339</strong> on May 22, driven by a massive rally in AI and technology stocks. <strong>SoftBank Group surged ~12%</strong>, extending a previous 20% gain, on reports that portfolio companies <strong>OpenAI and SB Energy</strong> are progressing toward U.S. IPOs. The index is up <strong>70.45% year-over-year</strong>. The <strong>USD/JPY</strong> rate rose to <strong>&yen;159.11</strong>, reflecting continued yen weakness against the dollar.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan&rsquo;s <strong>Q1 2026 GDP</strong> grew at an annualized <strong>2.1%</strong>, though the IMF projects moderation to <strong>0.8%</strong> due to weaker external demand and the Middle East energy crisis. <strong>CPI is projected at 2.5&ndash;3.0%</strong> for fiscal 2026, with rising crude prices as the primary driver. Unemployment has edged up slightly to <strong>2.6%</strong>. Japan&rsquo;s Ministry of Finance <strong>upgraded its economic outlook for the Okinawa region</strong> earlier this year, citing improved personal consumption and resilient tourism despite Chinese government travel advisories.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Economic Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Tourism:</strong> Okinawa targets <strong>&yen;1 trillion in annual tourism revenue</strong> for the first time; a new <strong>lodging tax</strong> takes effect in FY2026. <strong>Naha Airport</strong> is set to partially reopen international routes in June after a 2-year restriction.<br/><br/>
            <strong>Yen impact:</strong> At &yen;159/USD, the weak yen benefits Okinawa&rsquo;s tourism sector by making travel cheaper for foreign visitors, but raises costs for imported goods and fuel &mdash; critical for an island economy. Defense-related construction spending (Henoko, base upgrades) provides a countercyclical economic buffer.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Okinawa&rsquo;s security environment is tightening on multiple fronts.</strong> The first-ever detection of a PLA Jiangkai III frigate transiting the Miyako Strait, combined with the Liaoning carrier group&rsquo;s Western Pacific live-fire drills and 500 J-6W kamikaze drones deployed to bases near Taiwan, represents a measurable escalation in PLA capability and intent around the Nansei chain. Japan&rsquo;s unprecedented Ground Component Command exercise with embedded U.S. Marines is a direct response.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The base politics are shifting.</strong> The Atlantic Council&rsquo;s recommendation to keep Marines on Okinawa rather than move them to Guam, combined with the GSDF Osprey&rsquo;s planned first use of MCAS Futenma, signals a potential reversal of the decades-long effort to reduce the U.S. military footprint. The Education Ministry&rsquo;s ruling against the Henoko protest-linked school trip adds a new dimension to the base debate.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch:</strong> PLA Liaoning carrier group movements in Western Pacific &bull; Resolute Dragon 26 exercise (June 20&ndash;30) and GSDF Osprey at Futenma &bull; Japan LDP 5% GDP defense spending proposal timeline &bull; Naha Airport international route reopening (June) &bull; China-Japan diplomatic crisis escalation trajectory &bull; Futenma/Guam relocation policy review under Takaichi government &bull; Okinawa lodging tax implementation and tourism revenue targets
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; USNI News &bull; The Japan Times &bull; Janes Defence &bull; Defence Blog &bull; Newsweek &bull; AEI (American Enterprise Institute) &bull; Atlantic Council &bull; Asia Times &bull; CBS News &bull; NBC News &bull; Military.com &bull; Japan Ministry of Defense Joint Staff Office &bull; Trading Economics &bull; Bank of Japan &bull; IMF &bull; Deloitte &bull; Nippon.com &bull; Ryukyu Shimpo &bull; South China Morning Post
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
  subject: `[World Monitor] Okinawa Regional Intelligence Briefing — ${today}`,
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
