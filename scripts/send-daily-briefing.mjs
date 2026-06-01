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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Elections &bull; Markets &bull; Energy &bull; Pharma</p>
    </div>

    <!-- ===================== EVENT 1: COLOMBIA PRESIDENTIAL ELECTION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Latin America / Elections / Colombia &mdash; May 31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Colombia Presidential Election Delivers Major Upset &mdash; Conservative Espriella Forces Runoff Against Leftist Cepeda</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Abelardo de la Espriella</strong>, a right-wing populist lawyer and businessman, stunned pollsters by winning the first round of Colombia&rsquo;s presidential election with <strong>43.7% of the vote</strong>, defeating pre-election favorite <strong>Iv&aacute;n Cepeda</strong> of the Pacto Hist&oacute;rico party (40.9%). A May 24 poll had shown Cepeda leading with 33% to Espriella&rsquo;s 30.9%. The two will face off in a <strong>runoff on June 21</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Espriella has modeled himself after El Salvador&rsquo;s <strong>Nayib Bukele</strong>, promising a fierce crackdown on criminal groups, and has pledged to <strong>cut Colombia&rsquo;s 6.4% budget deficit</strong>, support coal mining and oil drilling, and reverse outgoing President Petro&rsquo;s leftist policies. Cepeda, an architect of Petro&rsquo;s &ldquo;total peace&rdquo; strategy, represents continuity with the current government. Third-place candidate <strong>Paloma Valencia</strong> (6.9%) could become a kingmaker in the runoff.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Colombia&rsquo;s <strong>MSCI COLCAP index surged ~7%</strong> to above 2,320 on the first trading session of June as markets priced in a market-friendly presidency. <strong>Ecopetrol (EC)</strong>, the state oil company, jumped <strong>over 8%</strong> on Espriella&rsquo;s pledge to support fossil fuel extraction. The Colombian peso strengthened against the dollar. Broader Latin American equities rallied on expectations that Colombia could join a regional shift toward fiscal discipline and deregulation. Watch <strong>Ecopetrol (EC)</strong>, <strong>iShares MSCI Colombia ETF (ICOL)</strong>, and <strong>Bancolombia (CIB)</strong> for continued movement ahead of the June 21 runoff.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: ISRAEL SEIZES BEAUFORT CASTLE IN LEBANON ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Lebanon-Israel &mdash; May 31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israel Seizes Beaufort Castle in Deepest Lebanon Incursion in 26 Years &mdash; Ceasefire in Doubt</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Israeli forces captured <strong>Beaufort Castle (Qalaat al-Shaqif)</strong>, a 12th-century Crusader fortress perched 700 metres above sea level in southern Lebanon, for the <strong>first time since Israel&rsquo;s withdrawal in 2000</strong>. The hilltop fortress overlooks the Litani River and provides a strategic observation point across southern Lebanon and northern Israel. The seizure followed days of <strong>intense airstrikes and fighting near Nabatiyeh</strong> between Israeli troops and Hezbollah.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The advance has taken place <strong>despite a nominal ceasefire in place since April 17</strong> and just days before the next round of direct <strong>Lebanon-Israel talks at the U.S. State Department on June 2&ndash;3</strong>. France issued a <strong>strong condemnation</strong> of the seizure. The operation signals Israel&rsquo;s intent to establish an extended military presence in southern Lebanon, echoing its 1982&ndash;2000 occupation. Additional <strong>displacement orders</strong> were issued to Lebanese civilians in the surrounding area.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Escalation risk in the Middle East adds a geopolitical premium to energy prices. <strong>Brent crude</strong> remains elevated above $93/barrel as Strait of Hormuz disruptions from the broader Iran conflict compound the risk. <strong>Defense stocks</strong> benefit: watch <strong>Elbit Systems (ESLT)</strong>, <strong>Rafael-linked plays</strong>, and <strong>L3Harris (LHX)</strong>. Safe-haven flows into <strong>gold (GLD)</strong> and <strong>U.S. Treasuries (TLT)</strong> could intensify if the June 2&ndash;3 talks collapse. <strong>Lebanese sovereign bonds</strong> remain deeply distressed. Reconstruction plays like <strong>CRH plc (CRH)</strong> and <strong>Holcim (HOLCIFY)</strong> could see interest if a genuine ceasefire materializes.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: IRAN-US CEASEFIRE EXTENSION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy / Global Trade &mdash; May 28&ndash;31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran-U.S. Ceasefire Extension Nears &mdash; 60-Day MOU Awaits Trump Approval as Oil Markets Recalibrate</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Negotiators reached a <strong>60-day memorandum of understanding</strong> to extend the ceasefire between the U.S. and Iran and begin negotiations over Iran&rsquo;s nuclear program. The MOU <strong>still requires President Trump&rsquo;s approval</strong>. The Strait of Hormuz has been <strong>largely blocked by Iran since February 28</strong>, when the U.S. and Israel launched an air war against Iran, creating the <strong>largest supply disruption in the history of the global oil market</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Approximately <strong>25% of the world&rsquo;s seaborne oil trade and 20% of global LNG</strong> previously passed through the Strait. The latest U.S. strikes on May 28 hit Iranian radar and drone control sites on <strong>Qeshm Island</strong>, briefly spiking <strong>WTI crude to $91.30 (+2.95%)</strong> and <strong>Brent to $96.80 (+2.66%)</strong> before falling back on ceasefire optimism. Citigroup noted that markets are increasingly pricing out worst-case supply disruption scenarios.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            This is the single most consequential event for global markets. <strong>Brent crude closed at $93.71</strong> as ceasefire extension hopes dampen risk premiums. If Trump signs the MOU, expect a sharp selloff in oil &mdash; the April ceasefire initially crashed WTI <strong>16.4% in a single session</strong>. Key stocks: <strong>Exxon Mobil (XOM)</strong> and <strong>Chevron (CVX)</strong> face downside on a deal; <strong>airlines (UAL, DAL, LUV)</strong> and <strong>shipping (ZIM, STNG)</strong> rally on cheaper fuel and reopened routes. <strong>Tanker stocks</strong> like <strong>Frontline (FRO)</strong> could see mixed signals &mdash; lower rates but higher volume. If the MOU fails, oil could retest $100+, hammering consumer discretionary and boosting inflation hedges like <strong>gold (GLD)</strong> and <strong>TIPS (TIP)</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: ETHIOPIA GENERAL ELECTION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Africa / Elections / East Africa &mdash; June 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Ethiopia Holds General Election Amid Conflict &mdash; PM Abiy&rsquo;s Prosperity Party Secures Commanding Majority</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Over <strong>50 million Ethiopians</strong> voted across <strong>50,000+ polling stations</strong> in a largely peaceful general election to elect <strong>547 representatives</strong> to the House of Peoples&rsquo; Representatives. PM <strong>Abiy Ahmed&rsquo;s Prosperity Party (PP) secured 457 of 547 seats</strong>, delivering a commanding majority and confirming Abiy for a new five-year term. The election was Africa&rsquo;s second-largest democratic exercise by voter count.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          However, <strong>voting was not held in the entire Tigray Region</strong> or in <strong>30 constituencies in Amhara Region</strong>, citing &ldquo;unfavourable conditions&rdquo; following the Tigray War and ongoing political instability. Opposition parties have raised concerns about fairness. Ethiopia, Africa&rsquo;s second-most populous nation (126 million), remains a critical regional player but faces <strong>internal armed conflicts, drought, and a severe foreign currency shortage</strong> that constrains its economic ambitions.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Abiy&rsquo;s consolidation of power provides policy continuity for Ethiopia&rsquo;s economic liberalization program, including the partial privatization of <strong>Ethio Telecom</strong> and the opening of the banking sector to foreign investors. Watch <strong>Safaricom (SCOM.NR)</strong>, which operates Ethiopia&rsquo;s second telecom license. <strong>African frontier market ETFs</strong> like <strong>VanEck Africa Index ETF (AFK)</strong> may see modest inflows on stability signals. However, the exclusion of Tigray and Amhara from voting raises governance risk premiums. <strong>Coffee futures (KC)</strong> could be affected &mdash; Ethiopia is Africa&rsquo;s largest coffee producer, and internal instability threatens supply chains. <strong>Fertilizer stocks</strong> like <strong>OCP Group</strong> and <strong>Mosaic (MOS)</strong> benefit from Ethiopia&rsquo;s continued agricultural import needs.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: PANCREATIC CANCER BREAKTHROUGH ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Global / Pharma / Oncology &mdash; May 30</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Daraxonrasib Doubles Pancreatic Cancer Survival &mdash; Revolution Medicines Gets FDA Breakthrough Designation</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Revolution Medicines (RVMD)</strong> announced that its experimental drug <strong>daraxonrasib</strong> nearly <strong>doubled overall survival</strong> in patients with advanced pancreatic ductal adenocarcinoma in the <strong>Phase 3 RASolute 302 trial</strong>, meeting all primary and key secondary endpoints. The drug targets <strong>KRAS G12 mutations</strong>, which fuel tumor growth in over 90% of pancreatic cancer cases &mdash; historically one of the deadliest and most treatment-resistant cancers.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>FDA granted Breakthrough Therapy Designation</strong> and a <strong>National Priority Voucher</strong> that accelerates review to 1&ndash;2 months versus 6+ months. <strong>Royalty Pharma (RPRX)</strong> announced a <strong>$2 billion funding agreement</strong> with Revolution Medicines, consisting of a $1.25 billion synthetic royalty on daraxonrasib and a $750 million secured loan. Doctors are now exploring the drug&rsquo;s potential for <strong>lung, colon, and ovarian cancers</strong>, and an mRNA vaccine combined with <strong>Keytruda (Merck)</strong> has shown high efficacy at preventing melanoma recurrence.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Revolution Medicines (RVMD)</strong> is the primary beneficiary &mdash; Wall Street views it as a prime takeover target after Merck reportedly pulled out of acquisition talks. <strong>Royalty Pharma (RPRX)</strong> benefits via its $2B funding deal. <strong>Merck (MRK)</strong> gains from Keytruda&rsquo;s melanoma vaccine combo data. The KRAS-targeting space heats up: competitors include <strong>Mirati Therapeutics (acquired by BMS)</strong> and <strong>Amgen (AMGN)</strong> with sotorasib. Broader oncology ETFs like <strong>SPDR S&amp;P Biotech ETF (XBI)</strong> could see a lift during ASCO 2026 conference season. This breakthrough validates the KRAS-targeting thesis and could reshape the $8B+ pancreatic cancer treatment market.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== BONUS: PSG CHAMPIONS LEAGUE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">BONUS</span>
          <span style="color: #666; font-size: 11px;">Europe / Sports / Civil Unrest &mdash; May 30&ndash;31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PSG Wins Champions League &mdash; But Victory Night Turns Deadly as 890 Arrested Across France</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Paris Saint-Germain won its <strong>second consecutive Champions League title</strong> after beating Arsenal on penalties in Budapest. But celebrations turned violent across France: <strong>890 people arrested</strong>, <strong>57 police officers injured</strong>, <strong>219 civilians injured</strong> (8 seriously), and <strong>one person killed</strong> in a motocross crash on a Paris ring road. A group attempted to <strong>storm a police station</strong> in Paris&rsquo;s 8th arrondissement. Arrests were up <strong>45% compared to last year&rsquo;s celebrations</strong>. Shops were vandalized, cars set ablaze, and fires set across Paris streets.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Limited direct market impact, but the escalating violence pattern raises concerns ahead of major events. <strong>Paris tourism and hospitality stocks</strong> &mdash; <strong>Accor (AC.PA)</strong> and <strong>Air France-KLM (AF.PA)</strong> &mdash; could face headwinds from the optics. <strong>Insurance claims</strong> will hit French property insurers like <strong>AXA (CS.PA)</strong> and <strong>Allianz (ALV.DE)</strong>. The FIFA World Cup begins June 11 with matches across North America &mdash; this incident will sharpen security planning and costs for host cities.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch This Week</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Energy markets remain the global pivot point.</strong> The Iran-U.S. ceasefire extension MOU is the single most impactful binary event for markets. Trump&rsquo;s approval would trigger an oil selloff and broad equity rally; rejection could send Brent back toward $100. The Israel-Lebanon escalation at Beaufort Castle adds a secondary risk layer, with June 2&ndash;3 talks at the State Department serving as a near-term catalyst.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Latin America is shifting right.</strong> Colombia&rsquo;s surprise election result continues a regional trend toward market-friendly populism. The COLCAP surge and Ecopetrol rally signal investors are repositioning for policy change. The June 21 runoff will determine whether this is a head-fake or a structural shift.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Biotech enters a new era of KRAS targeting.</strong> Daraxonrasib&rsquo;s breakthrough in pancreatic cancer could be the most significant oncology development of 2026, with implications for lung, colon, and ovarian cancer treatment. Revolution Medicines remains a potential M&amp;A target, and the $2B Royalty Pharma deal validates the commercial thesis.
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; France 24 &bull; CNN &bull; Time &bull; PBS News &bull; Euronews &bull; NPR &bull; CNBC &bull; NBC News &bull; CBS News &bull; STAT News &bull; BioPharma Dive &bull; Trading Economics &bull; J.P. Morgan &bull; Morgan Stanley &bull; Citigroup &bull; Revolution Medicines IR &bull; SEC Filings
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

const payload = JSON.stringify({
  from: 'World Monitor <onboarding@resend.dev>',
  to: RECIPIENTS,
  subject: '[World Monitor] Global Daily Intelligence Briefing — ' + today,
  html,
});

try {
  const result = execSync(
    'curl -s -w "\\n%{http_code}" --connect-timeout 30 -X POST https://api.resend.com/emails ' +
    '-H "Content-Type: application/json" ' +
    '-H "Authorization: Bearer ' + RESEND_KEY + '" ' +
    '-d @-',
    { input: payload, encoding: 'utf8', timeout: 60000 },
  );
  const lines = result.trim().split('\n');
  const httpCode = lines.pop();
  const body = lines.join('\n');

  if (!httpCode.startsWith('2')) {
    console.error('Resend API error ' + httpCode + ': ' + body);
    process.exit(1);
  }

  const data = JSON.parse(body);
  console.log('Email sent successfully to ' + RECIPIENTS.join(', '));
  console.log('Resend ID:', data.id);
} catch (err) {
  console.error('Failed to send email:', err.message);
  process.exit(1);
}
