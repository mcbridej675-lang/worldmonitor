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

    <!-- Market Snapshot Banner -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 14px 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 10px; font-weight: 700;">Friday Close &mdash; May 15, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
          <td style="color: #ef4444; font-size: 12px; padding: 2px 0;"><strong>S&amp;P 500</strong> 7,408 <span style="font-size: 11px;">&darr;1.24%</span></td>
          <td style="color: #ef4444; font-size: 12px; padding: 2px 0;"><strong>Nasdaq</strong> 26,225 <span style="font-size: 11px;">&darr;1.54%</span></td>
        </tr>
        <tr>
          <td style="color: #ef4444; font-size: 12px; padding: 2px 0;"><strong>Dow</strong> 49,526 <span style="font-size: 11px;">&darr;537 pts</span></td>
          <td style="color: #ef4444; font-size: 12px; padding: 2px 0;"><strong>DAX</strong> <span style="font-size: 11px;">&darr;1.59%</span> &bull; <strong>CAC 40</strong> <span style="font-size: 11px;">&darr;1.97%</span></td>
        </tr>
        <tr>
          <td style="color: #22c55e; font-size: 12px; padding: 2px 0;"><strong>Brent</strong> $109/bbl <span style="font-size: 11px;">&uarr;8.1% wk</span></td>
          <td style="color: #eab308; font-size: 12px; padding: 2px 0;"><strong>10Y Yield</strong> 4.54% (yearly high)</td>
        </tr>
      </table>
    </div>

    <!-- ===================== EVENT 1: ISRAEL KILLS HAMAS MILITARY WING LEADER ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Conflict / Gaza &mdash; May 15&ndash;16</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Israel Kills Hamas Military Wing Leader Izz al-Din al-Haddad &mdash; Last Surviving Oct. 7 Architect</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An Israeli airstrike in western <strong>Gaza City</strong> killed <strong>Izz al-Din al-Haddad</strong>, commander of Hamas&rsquo;s Qassam Brigades and one of the last surviving architects of the <strong>October 7, 2023 attacks</strong>. Nicknamed &ldquo;the Ghost,&rdquo; al-Haddad had survived multiple previous assassination attempts and assumed overall military command after <strong>Mohammed Sinwar</strong> was killed. Hamas confirmed the death, calling the loss &ldquo;profound.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Al-Haddad was a founding member of Hamas dating to the 1980s and served on the <strong>Military Council</strong>, the highest command group that planned the October 7 operation. His body was carried through Gaza City draped in Hamas and Palestinian flags. The killing represents a major Israeli intelligence success, but raises questions about what political endgame follows the systematic elimination of Hamas&rsquo;s military leadership.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Accelerates the decapitation of Hamas&rsquo;s military leadership but does not resolve the broader regional conflict. Mildly supportive of risk sentiment if seen as moving toward endgame in Gaza; however, risks retaliatory escalation.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>ESLT</strong> (Elbit Systems) &mdash; Israel&rsquo;s largest defense company; benefits from sustained military operations and intelligence systems demand. <strong>RTX, LMT</strong> &mdash; continued U.S. defense demand for precision-guided munitions and intelligence platforms. <strong>TEVA</strong> (Teva Pharmaceutical) &mdash; Israel&rsquo;s largest publicly traded company; domestic instability risk premium. <strong>Tel Aviv 125 Index</strong> &mdash; Israeli equities whipsawed between military &ldquo;successes&rdquo; and economic costs of prolonged war. <strong>Oil futures</strong> &mdash; any retaliatory escalation by Iran-backed groups adds to existing Hormuz supply risk.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: STRAIT OF HORMUZ ESCALATION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Energy / Maritime Security / Persian Gulf &mdash; May 14&ndash;15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Strait of Hormuz Erupts: Ship Seized Off UAE, Another Sunk Near Oman &mdash; Brent Surges Past $109</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Tensions in the Persian Gulf escalated sharply after a vessel anchored <strong>38 nautical miles off Fujairah</strong> (UAE) was seized by unauthorized personnel and diverted toward <strong>Iranian waters</strong>, while a separate ship was attacked and <strong>sunk near the coast of Oman</strong>. The UK Maritime Trade Operations center confirmed the incidents and is investigating. Iran has seized multiple vessels in recent weeks, including the tanker <strong>Ocean Koi</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Strait of Hormuz has been <strong>effectively closed</strong> since the outbreak of war between the U.S./Israel and Iran on February 28. Crude flows through the strait have dropped by <strong>~4 million barrels/day</strong>. <strong>Brent crude surged past $109/barrel</strong>, adding 8.1% for the week. The Trump-Xi summit failed to produce a breakthrough on reopening the strait, and Iran&rsquo;s chief negotiator warned that the ceasefire would &ldquo;fail&rdquo; without Western concessions. The <strong>IEA warned</strong> global markets could remain &ldquo;severely undersupplied through October.&rdquo;
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>This is the dominant macro driver globally.</strong> Oil above $109 is creating stagflationary pressure, pushing U.S. inflation to 3.8%, driving 10-year Treasury yields to 4.54% (yearly highs), and compressing margins for energy-intensive industries.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>XOM</strong> (ExxonMobil), <strong>CVX</strong> (Chevron), <strong>SHEL</strong> (Shell) &mdash; major beneficiaries of sustained $100+ oil; near 52-week highs. <strong>HAL, SLB</strong> (Halliburton, SLB) &mdash; oilfield services surging as producers race to increase output. <strong>DAL, UAL, AAL</strong> (airlines) &mdash; jet fuel margin compression; downside accelerating. <strong>STNG, FRO</strong> (Scorpio Tankers, Frontline) &mdash; tanker rates spiking on route disruptions and war-risk insurance costs. <strong>ZIM</strong> (ZIM Integrated Shipping) &mdash; rerouting around Hormuz is boosting shipping rates. <strong>DANGCEM</strong> (Dangote, NGX) &mdash; Nigerian refinery emerging as critical alternative crude supplier.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: KYIV MOURNS DEADLIEST ATTACK ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Conflict / Europe / Ukraine &mdash; May 15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Kyiv Mourns After Russia&rsquo;s Deadliest Capital Attack: 24 Killed Including 3 Children, 1,567 Drones Launched</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ukraine observed an <strong>official day of mourning</strong> on Friday after Russia&rsquo;s largest-ever aerial assault on the capital killed at least <strong>24 people, including three children</strong>, when a cruise missile destroyed a large residential apartment building in Kyiv. President Zelensky confirmed Russia launched <strong>1,567 drones and 56 missiles</strong> over May 13&ndash;14 &mdash; the heaviest two-day barrage since the war began in 2022.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Ukraine intercepted 94% of drones but <strong>only 7% of missiles</strong>, exposing a critical gap in air defenses against cruise and ballistic missiles. Zelensky ordered the military to &ldquo;prepare a response.&rdquo; The mayor of Kyiv called it &ldquo;the enemy&rsquo;s largest-scale attack on the capital&rdquo; and declared the day of mourning. Separately, <strong>Israeli drone strikes killed 16 people in southern Lebanon</strong> despite the ceasefire, including three paramedics.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Escalation supports defense and grain sectors while pressuring European equities. European markets sold off hard: <strong>DAX &minus;1.59%, CAC 40 &minus;1.97%</strong>. European natural gas futures ticked higher on renewed supply disruption fears.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>RHM.DE</strong> (Rheinmetall) &mdash; Germany&rsquo;s top defense contractor surging on European rearmament; a direct beneficiary of NATO air-defense orders. <strong>RTX</strong> (RTX Corp) &mdash; Patriot missile systems are the backbone of Ukraine&rsquo;s shield; demand accelerates after missile intercept failure. <strong>LMT</strong> (Lockheed Martin) &mdash; HIMARS and JASSM-ER supplier; NATO replenishment orders. <strong>NOC</strong> (Northrop Grumman) &mdash; integrated air defense systems and ammunition. <strong>WEAT</strong> (Wheat ETF) &mdash; disruption to Ukrainian grain export corridors supports prices. <strong>European gas futures</strong> (TTF) &mdash; energy supply anxiety rising.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: TRUMP-XI SUMMIT CONCLUDES ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">Geopolitics / Trade / Indo-Pacific &mdash; May 15</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Trump-Xi Summit Ends With Boeing Deal but No Iran Breakthrough; Trump Waffles on $14B Taiwan Arms Sale</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump departed Beijing after three days of talks with Xi Jinping, calling it a &ldquo;milestone visit&rdquo; that &ldquo;settled a lot of different problems.&rdquo; The headline deliverable: Xi committed to purchase <strong>200 Boeing aircraft</strong> (777s and 737s), with the potential to expand to <strong>750 planes</strong> &mdash; Boeing&rsquo;s first major China sale in nearly a decade, estimated at <strong>$17&ndash;19 billion</strong>. Trump said GE Aerospace would supply <strong>400&ndash;450 engines</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          However, the summit <strong>failed to produce a breakthrough on Iran</strong> or reopening the Strait of Hormuz. On Taiwan, Trump told reporters aboard Air Force One he has <strong>not decided</strong> whether to proceed with a <strong>$14 billion arms package</strong> to Taipei &mdash; a dramatic reversal after Xi warned that Taiwan mishandling risks &ldquo;clashes and even conflicts.&rdquo; Markets sold off Friday as traders digested the lack of concrete progress. <strong>Putin is scheduled to visit Xi on May 19&ndash;20</strong>, just days after Trump&rsquo;s departure.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Summit &ldquo;buy the rumor, sell the news&rdquo; &mdash; S&amp;P hit all-time highs Thursday, then reversed hard Friday (&minus;1.24%). Tech was hit hardest: <strong>Intel &minus;6%, AMD &minus;5.7%, Micron &minus;6.6%, NVDA &minus;4.4%</strong>. Cerebras, which surged 68% Thursday on its Nasdaq debut, fell 10% Friday.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>BA</strong> (Boeing) &mdash; 200-plane China deal is a major catalyst; stock should benefit when deal is formalized, but the 750 &ldquo;stretch&rdquo; is speculative. <strong>GE</strong> (GE Aerospace) &mdash; 400&ndash;450 engine order is a meaningful revenue pipeline. <strong>TSM</strong> (TSMC) &mdash; Taiwan arms sale uncertainty injects geopolitical risk premium into the world&rsquo;s most critical chipmaker. <strong>BABA, TCEHY, JD</strong> (Chinese tech) &mdash; Nvidia H200 chip sales to China cleared during summit; watch for follow-through. <strong>NVDA</strong> (Nvidia) &mdash; China access is reopening, but broader tech selloff overwhelmed the positive news Friday.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: MODI 5-NATION DIPLOMATIC TOUR ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Diplomacy / India / Global Realignment &mdash; May 15&ndash;20</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">PM Modi Launches 5-Nation Tour: UAE, Netherlands, Sweden, Norway, Italy &mdash; India Eyes Bigger Global Role</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Indian Prime Minister <strong>Narendra Modi</strong> embarked on an ambitious <strong>five-nation diplomatic tour</strong> (May 15&ndash;20), beginning in the <strong>UAE</strong> with talks with President <strong>Sheikh Mohamed bin Zayed Al Nahyan</strong> focused on energy cooperation, trade, and investment. He arrived in the <strong>Netherlands</strong> on Friday for discussions with PM Rob Jetten on <strong>semiconductors, green hydrogen, and defense</strong>, and will meet King Willem-Alexander.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The tour continues to <strong>Sweden</strong> (joint address with European Commission President von der Leyen on AI and supply chains), the <strong>3rd India-Nordic Summit</strong> in Oslo with leaders from Denmark, Finland, Iceland, Norway, and Sweden, and concludes in <strong>Italy</strong> with PM Meloni. The tour signals India&rsquo;s accelerating push to position itself as a <strong>critical node in global supply chains</strong> amid U.S.-China rivalry and to secure technology partnerships outside of both blocs. It coincides with India hosting <strong>BRICS meetings in New Delhi</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            India&rsquo;s diplomatic blitz positions the country as the key &ldquo;swing state&rdquo; in the emerging global order. Semiconductor and green energy partnerships with the Netherlands and Nordics could accelerate India&rsquo;s tech ecosystem. The UAE visit reinforces energy security diversification away from Hormuz dependence.<br/><br/>
            <strong>Stocks to watch:</strong> <strong>INDA</strong> (iShares MSCI India ETF) &mdash; India&rsquo;s strategic positioning as &ldquo;China+1&rdquo; manufacturing hub draws continued capital inflows. <strong>ASML</strong> (ASML Holding) &mdash; Netherlands-India semiconductor partnership could open new export channels for the lithography giant. <strong>RELIANCE</strong> (NSE: RELIANCE) &mdash; India&rsquo;s largest conglomerate benefits from UAE energy deals and green hydrogen partnerships. <strong>INFY, TCS</strong> (Infosys, Tata Consultancy) &mdash; Nordic tech partnerships expand India&rsquo;s IT services market. <strong>ADANIENT</strong> (Adani Enterprises) &mdash; green energy and infrastructure play benefits from European investment commitments. <strong>BSE Sensex / Nifty 50</strong> &mdash; India outperforming most EM peers amid global risk-off.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What to Watch</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The post-summit selloff reveals how fragile the rally was.</strong> Thursday&rsquo;s all-time highs evaporated Friday as the Trump-Xi summit delivered a Boeing deal but no Iran breakthrough, no Hormuz reopening, and Taiwan arms ambiguity. The Dow gave back 537 points and tech was hammered. Oil surging past $109 is the gravity pulling everything down.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Three wars are reshaping global markets simultaneously.</strong> Gaza (Hamas leader killed, but no endgame), Hormuz (ship seizures escalating, oil undersupplied through October), and Ukraine (record aerial assault, 7% missile intercept rate exposing defense gaps). Each conflict feeds into the others through energy prices, inflation, and defense spending.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch next week:</strong> Putin visits Xi in Beijing May 19&ndash;20 (days after Trump left) &bull; Trump&rsquo;s decision on $14B Taiwan arms sale &bull; Iran ceasefire deadline &bull; Modi&rsquo;s India-Nordic Summit in Oslo &bull; Oil price trajectory &mdash; $109 Brent and rising &bull; 10-year Treasury yield at 4.54% and climbing &bull; European defense spending surge post-Kyiv attack
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNBC &bull; CNN &bull; NPR &bull; Al Jazeera &bull; The Washington Post &bull; Reuters &bull; Euronews &bull; Kyiv Independent &bull; PBS News &bull; Fox News &bull; NBC News &bull; Axios &bull; TheStreet &bull; Yahoo Finance &bull; Daily Sabah &bull; Times of Israel &bull; India TV News &bull; ANI &bull; The Tribune India &bull; BlackRock &bull; IEA
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
