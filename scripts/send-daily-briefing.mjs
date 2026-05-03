#!/usr/bin/env node
/**
 * World Monitor — Okinawa Daily Briefing Email Sender
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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Conflict &bull; Financial Markets &bull; Stock Impact</p>
    </div>

    <!-- ===================== EVENT 1 ===================== -->
    <div style="margin-bottom: 8px;">
      <p style="color: #dc2626; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">1. Iran-US War: 14-Point Peace Proposal Deadlocked</p>
    </div>

    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">CRITICAL</span>
          <span style="color: #666; font-size: 11px;">Middle East / Diplomacy &mdash; May 2&ndash;3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Iran Submits 14-Point Response; US Reviews Counter-Offer &mdash; Strait of Hormuz Escort Announced</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Iran has submitted a <strong>14-point response</strong> to the US proposal to end the 64-day war. Key demands include: resolution within 30 days (rejecting the US two-month ceasefire), withdrawal of US forces from Iran&rsquo;s periphery, end to the naval blockade, release of frozen assets, payment of reparations, lifting of all sanctions, end to fighting in Lebanon, and a new mechanism governing the <strong>Strait of Hormuz</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The US has responded and Iran is now reviewing. Special envoy Steve Witkoff says the US is &ldquo;in conversation,&rdquo; but talks remain <strong>deadlocked</strong>. Trump announced the US will begin <strong>escorting commercial ships through the Strait of Hormuz</strong> starting Monday, calling it a &ldquo;humanitarian gesture.&rdquo; US gas prices have surged to <strong>$4.45/gallon</strong> &mdash; up nearly 50% since the war began.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> WTI crude holding above $105/bbl; Brent at ~$118/bbl. The Hormuz escort announcement provides slight relief but does not reopen full shipping lanes. Prolonged deadlock = sustained premium.<br/><br/>
            <strong>Stocks to watch:</strong><br/>
            &bull; <strong>ExxonMobil (XOM), Chevron (CVX), Shell (SHEL)</strong> &mdash; Direct beneficiaries of elevated crude. Windfall profits continue as long as Hormuz remains constrained.<br/>
            &bull; <strong>Lockheed Martin (LMT), RTX Corp (RTX), Northrop Grumman (NOC)</strong> &mdash; Defense sector up 38% YTD. Record backlogs ($194B LMT, $268B RTX). Operation Epic Fury spending accelerates procurement.<br/>
            &bull; <strong>Airlines (DAL, UAL, LUV)</strong> &mdash; Negative. Jet fuel costs crushing margins. Expect continued earnings downgrades.<br/>
            &bull; <strong>Shipping (ZIM, STNG, FRO)</strong> &mdash; Tanker rates at multi-year highs due to rerouting away from Hormuz.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2 ===================== -->
    <div style="margin-bottom: 8px;">
      <p style="color: #dc2626; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">2. Israel Intensifies Lebanon Strikes &mdash; 41+ Killed in 24 Hours</p>
    </div>

    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Middle East / Conflict &mdash; May 2&ndash;3</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">IDF Strikes 120+ Hezbollah Targets Across Southern Lebanon Despite Ceasefire</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Israeli airstrikes killed at least <strong>41 people</strong> in southern Lebanon on May 2 alone, striking the villages of Kfar Dajal, Lwaizeh, Shoukin, and Zawtar. A &ldquo;quadruple tap&rdquo; strike in Mayfadoun killed <strong>four paramedics</strong> and injured six. On May 3, the IDF claimed destruction of <strong>70 military structures and 50+ Hezbollah infrastructure sites</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Hezbollah responded with rockets and explosive-laden drones at Israeli positions in southern Lebanon and launched at least <strong>four drones at northern Israel</strong>. Despite a declared ceasefire, both sides continue escalating &mdash; raising the risk of a broader regional conflagration that would compound the Iran-US conflict.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Escalation in Lebanon adds geopolitical risk premium across all Middle Eastern assets. If the ceasefire fully collapses, expect another $5&ndash;10/bbl oil spike.<br/><br/>
            <strong>Stocks to watch:</strong><br/>
            &bull; <strong>Elbit Systems (ESLT)</strong> &mdash; Israel&rsquo;s largest defense contractor; drone and precision munition demand surging.<br/>
            &bull; <strong>Gold (GLD, NEM, GOLD)</strong> &mdash; Safe-haven flows intensify with dual-front Middle East escalation.<br/>
            &bull; <strong>Israeli tech (TASE composite, WIX, CYBR)</strong> &mdash; Downside risk if conflict expands; war insurance costs rising for Israeli firms.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3 ===================== -->
    <div style="margin-bottom: 8px;">
      <p style="color: #1e40af; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">3. US Withdraws 5,000 Troops from Germany &mdash; NATO Rattled</p>
    </div>

    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">HIGH</span>
          <span style="color: #666; font-size: 11px;">Europe / Security &mdash; May 1&ndash;2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Pentagon Orders Troop Withdrawal After Trump-Merz Clash Over Iran War</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Pentagon announced the withdrawal of approximately <strong>5,000 US troops from Germany</strong> over the next 6&ndash;12 months, ordered by Defense Secretary Pete Hegseth. The move was triggered by German Chancellor Friedrich Merz&rsquo;s criticism that the US was being &ldquo;humiliated&rdquo; by Iran and lacked strategy in the war.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Trump threatened even deeper cuts: <strong>&ldquo;We&rsquo;re going to cut way down. And we&rsquo;re cutting a lot further than 5,000.&rdquo;</strong> More than 30,000 US troops would remain. Germany played down the impact, but NATO allies &mdash; particularly Spain and Italy, rumored to be next &mdash; are alarmed. The move reverses Biden-era reinforcements following Russia&rsquo;s 2022 Ukraine invasion.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Accelerates the &ldquo;European defense autonomy&rdquo; investment thesis. EU nations must spend more on their own defense &mdash; a multi-decade tailwind for European defense contractors.<br/><br/>
            <strong>Stocks to watch:</strong><br/>
            &bull; <strong>Rheinmetall (RHM.DE)</strong> &mdash; Germany&rsquo;s top defense firm; stock up &gt;400% since 2022. More US withdrawals = more Bundeswehr procurement.<br/>
            &bull; <strong>BAE Systems (BA.L)</strong> &mdash; UK defense giant positioned as NATO&rsquo;s alternative supplier.<br/>
            &bull; <strong>Leonardo (LDO.MI), Thales (HO.PA)</strong> &mdash; Italian and French champions benefiting from EU defense spending surge.<br/>
            &bull; <strong>EUR/USD</strong> &mdash; Short-term euro weakness on security uncertainty; medium-term neutral as fiscal spending increases.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4 ===================== -->
    <div style="margin-bottom: 8px;">
      <p style="color: #22c55e; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">4. Myanmar: Aung San Suu Kyi Transferred to House Arrest</p>
    </div>

    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Southeast Asia / Political &mdash; May 1</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Nobel Laureate Moved from Prison After 5+ Years &mdash; Military Seeks Image Rehabilitation</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Myanmar&rsquo;s military government transferred ousted leader <strong>Aung San Suu Kyi</strong> from prison to house arrest in Naypyidaw, ordered by new president (former Senior General) <strong>Min Aung Hlaing</strong>. The move follows a military-organized election and is widely seen as an attempt to <strong>rehabilitate the junta&rsquo;s international image</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Suu Kyi still has <strong>13+ years remaining on her sentence</strong>. Her son Kim Aris said: &ldquo;Moving her is not freeing her.&rdquo; UN Secretary-General Guterres called it a &ldquo;meaningful step&rdquo; but urged release of all political prisoners. Her lawyers cannot confirm the transfer. A separate amnesty freed ousted President Win Myint on April 17.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Limited direct market impact, but signals potential softening of Myanmar&rsquo;s isolation. If sanctions ease over time, Myanmar&rsquo;s natural gas and rare earth resources become accessible again.<br/><br/>
            <strong>Stocks to watch:</strong><br/>
            &bull; <strong>PTTEP (Thailand), POSCO (South Korea)</strong> &mdash; Both have suspended Myanmar operations; any diplomatic thaw reopens these assets.<br/>
            &bull; <strong>Rare earth miners (MP, REMX)</strong> &mdash; Myanmar is a major supplier to China&rsquo;s rare earth processing chain; political normalization could stabilize supply.<br/>
            &bull; <strong>ASEAN-focused funds (ASEA ETF)</strong> &mdash; Marginal positive for regional stability sentiment.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5 ===================== -->
    <div style="margin-bottom: 8px;">
      <p style="color: #eab308; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 16px; border-bottom: 1px solid #222; padding-bottom: 8px;">5. Oil Above $105 &mdash; Markets Defy Gravity as S&amp;P 500 Hits Record</p>
    </div>

    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">MOD</span>
          <span style="color: #666; font-size: 11px;">Global Markets &mdash; May 2</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">S&amp;P 500 Posts Best Month Since Nov 2020 (+10% April) While Energy Costs Surge</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Despite oil surging nearly <strong>60% since the Iran war began on Feb 28</strong>, US equities continue climbing. The <strong>S&amp;P 500 hit 7,230</strong> (new all-time high), and the <strong>Nasdaq reached 25,114</strong> (record close). April was the S&amp;P&rsquo;s best month in nearly six years with seven record highs. Goldman Sachs raised its oil price forecast, citing Hormuz remaining closed.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The divergence between energy costs and equity performance is driven by: (1) AI/tech earnings immunity to oil, (2) defense spending boom, (3) energy sector profits padding the index. However, <strong>Japan&rsquo;s Nikkei 225 fell 1.06%</strong> to 59,284 as the import-dependent economy absorbs higher energy costs. Bond yields are climbing, adding pressure to rate-sensitive sectors.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            The equity-oil divergence cannot persist indefinitely. Either peace arrives and oil crashes (bad for energy, good for everything else) or high energy eventually drags earnings. Position accordingly.<br/><br/>
            <strong>Stocks to watch:</strong><br/>
            &bull; <strong>NVIDIA (NVDA), Microsoft (MSFT), Apple (AAPL)</strong> &mdash; Mega-cap tech driving indices; relatively insulated from oil but vulnerable to rate hikes if inflation re-accelerates.<br/>
            &bull; <strong>Energy ETFs (XLE, VDE)</strong> &mdash; Outperforming all sectors. A peace deal = sharp reversal risk.<br/>
            &bull; <strong>Japan exporters (Toyota TM, Sony SONY)</strong> &mdash; Nikkei weakness presents entry opportunity if yen stabilizes; watch BOJ policy response to imported inflation.<br/>
            &bull; <strong>Consumer staples (PG, KO, COST)</strong> &mdash; Defensive positioning as gas prices squeeze consumer discretionary spending.
          </p>
        </div>
      </div>
    </div>

    <!-- KEY TAKEAWAY -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The world is in a dual-crisis regime:</strong> The Iran-US war continues to constrain global energy supply while NATO&rsquo;s cohesion fractures over disagreements about that same war. These forces are <strong>inflationary</strong> and favor hard assets (oil, gold, defense equities) over rate-sensitive growth.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Key trades:</strong> Long energy + defense (LMT, RTX, XOM, Rheinmetall). Short airlines + consumer discretionary. Gold as geopolitical hedge. Watch for a sharp rotation <em>if</em> Iran peace materializes &mdash; energy would crash 20%+ while airlines and industrials would spike.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Risks:</strong> Iran deal collapses talks entirely (oil to $130+) &bull; Lebanon ceasefire fully breaks down &bull; NATO withdrawal contagion to Poland (catastrophic for European security premium) &bull; BOJ emergency rate hike on imported inflation
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNN &bull; NPR &bull; Al Jazeera &bull; CNBC &bull; Bloomberg &bull; The Washington Post &bull; PBS NewsHour &bull; The Diplomat &bull; Times of Israel &bull; NBC News &bull; Reuters &bull; IMF World Economic Outlook &bull; Goldman Sachs Research &bull; Stars and Stripes
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only. Not financial advice. Sources verified across multiple outlets.<br/>
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
  subject: `[World Monitor] Global Events & Market Impact — ${today}`,
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
