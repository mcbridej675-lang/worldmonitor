#!/usr/bin/env node
/**
 * World Monitor — Global Events & Market Impact Daily Briefing
 *
 * Usage:
 *   RESEND_API_KEY=re_xxxx node scripts/send-daily-briefing.mjs
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
  <div style="background: linear-gradient(90deg, #dc2626, #f59e0b, #dc2626); height: 4px;"></div>
  <div style="padding: 32px 28px;">

    <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 28px;">
      <tr>
        <td style="width: 36px; height: 36px; border-radius: 50%; border: 1px solid #222; text-align: center; vertical-align: middle; background: #111;">
          <span style="font-size: 18px; color: #dc2626;">&#9678;</span>
        </td>
        <td style="padding-left: 10px;">
          <div style="font-size: 15px; font-weight: 800; color: #fff; letter-spacing: -0.5px;">WORLD MONITOR</div>
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Events &amp; Market Impact Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #dc2626; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Briefing</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Global perspective &bull; Financial market analysis &bull; Specific stock impacts</p>
    </div>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- EVENT 1: Strait of Hormuz / Oil Crisis -->
    <!-- ═══════════════════════════════════════════════ -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Energy / Geopolitics</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">1. Strait of Hormuz Crisis Deepens &mdash; IEA Warns April Will Be &ldquo;Much Worse&rdquo;</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The IEA&rsquo;s Fatih Birol issued a stark warning today: <em>&ldquo;April will be much worse than March &mdash; the loss of oil in April will be twice the loss of March.&rdquo;</em> Ships carrying oil that transited the Strait before the Iran war began are nearly depleted. Brent crude hit <strong>$126/barrel</strong> &mdash; a 60%+ surge in March alone, the biggest monthly gain in recorded history. Iran&rsquo;s IRGC declared the Strait closed to vessels heading to/from US, Israel, and allied ports. Container giants Maersk, Hapag-Lloyd, and CMA CGM have all suspended Hormuz transit, rerouting around Africa&rsquo;s Cape of Good Hope (+10&ndash;14 days transit time). The Dallas Fed estimates the closure could lower global GDP growth by <strong>2.9 percentage points</strong> in Q2 2026.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #f59e0b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Winners:</strong> Energy sector is 2026&rsquo;s dominant trade. <strong>XLE (Energy Select SPDR)</strong> up 38% YTD. <strong>ExxonMobil (XOM)</strong> and <strong>Chevron (CVX)</strong> benefiting from sustained $100+ crude. <strong>Cheniere Energy (LNG)</strong> and <strong>EQT Corp (EQT)</strong> surging on LNG supply shift to non-Hormuz routes. Energy ETFs posting 34&ndash;113% gains in 2026.<br/><br/>
            <strong>Losers:</strong> Airlines hammered &mdash; <strong>Delta (DAL)</strong> and <strong>United (UAL)</strong> down ~17% YTD as $100+ jet fuel crushes margins. Shipping insurers repricing risk globally. Central banks facing a &ldquo;nightmare scenario&rdquo; of rate hikes into a slowing economy &mdash; broad equity indices under pressure. Goldman Sachs warns $200/barrel possible in a &ldquo;scorched earth&rdquo; scenario.
          </p>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- EVENT 2: Trump / NATO Withdrawal -->
    <!-- ═══════════════════════════════════════════════ -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Critical</span>
          <span style="color: #666; font-size: 11px;">Defense / Alliance</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">2. Trump Says He Is &ldquo;Absolutely&rdquo; Considering Withdrawing US from NATO</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump escalated his rhetoric against NATO today, stating he is &ldquo;absolutely&rdquo; considering withdrawal after allied nations refused to join the US-Israel campaign against Iran or help reopen the Strait of Hormuz. He called the alliance a &ldquo;Paper Tiger.&rdquo; Legal barriers exist &mdash; a 2023 bipartisan law requires two-thirds Senate approval for withdrawal &mdash; but Trump has disputed whether congressional authority is needed. Analysts warn even the <em>threat</em> of withdrawal erodes deterrence and emboldens adversaries. Europe would need to field <strong>50 new combat brigades</strong> and ~300,000 troops to offset the loss of US support, with critical gaps in airlift, ISR, and integrated air/missile defense.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #f59e0b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>European defense supercycle accelerating.</strong> The Morningstar Europe Aerospace &amp; Defense Index up 13.5% YTD &mdash; best start ever. <strong>Rheinmetall (RHM.DE)</strong> +22% in 2026, ~200% since Jan 2025, backlog at &euro;64B. <strong>Saab (SAAB-B.ST)</strong> +20% YTD. <strong>BAE Systems (BA.L)</strong> benefiting from Typhoon orders and stable US DoD revenue. Germany&rsquo;s &euro;500B defense/infra package fueling the rally. NATO spending benchmark now at 5% GDP &mdash; Poland already at 4.5%.<br/><br/>
            <strong>Caution:</strong> Valuations stretched &mdash; Rheinmetall at 39x forward P/E vs. European defense avg of 28x. Saab &ldquo;significantly overvalued&rdquo; per Morningstar. But structural spending tailwinds may support premiums for years.
          </p>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- EVENT 3: Japan Deploys Strike Missiles -->
    <!-- ═══════════════════════════════════════════════ -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #ea580c; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">High</span>
          <span style="color: #666; font-size: 11px;">Indo-Pacific / Defense</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">3. Japan Deploys First Long-Range Strike Missiles &mdash; Record &yen;8.7T Defense Budget</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan crossed a historic threshold by deploying its first offensive strike capability: the Type 25 SSM (upgraded Type-12, ~1,000 km range, capable of reaching mainland China) at Camp Kengun and Camp Fuji, plus a hypersonic glide vehicle (Type 25 HGP) for island defense. Japan also received its first US-made Tomahawk cruise missiles for destroyer integration. This accompanies a record <strong>&yen;8.7 trillion (~$58B) defense budget</strong> &mdash; up 9.4% YoY, making Japan the world&rsquo;s <strong>third-largest defense spender</strong>. The 31st MEU&rsquo;s redeployment to the Middle East has left an Indo-Pacific gap, accelerating Japan&rsquo;s military self-reliance.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #f59e0b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Mitsubishi Heavy Industries (7011.T)</strong> &mdash; prime contractor for the Type 25 SSM &mdash; direct beneficiary of Japan&rsquo;s $1.14B missile procurement. <strong>Kawasaki Heavy Industries (7012.T)</strong> and <strong>IHI Corp (7013.T)</strong> benefit from expanded defense manufacturing. On the US side, <strong>Raytheon (RTX)</strong> benefits from Tomahawk sales and integration contracts. Japan&rsquo;s defense spending surge is a multi-year structural tailwind for the entire Japanese defense-industrial base. Nikkei defense names likely to re-rate higher as Japan moves to 2% GDP spending.
          </p>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- EVENT 4: Artemis II Launch -->
    <!-- ═══════════════════════════════════════════════ -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #2563eb; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Milestone</span>
          <span style="color: #666; font-size: 11px;">Space / Technology</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">4. NASA&rsquo;s Artemis II Launches Today &mdash; First Crewed Lunar Mission in 53 Years</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          After multiple delays, NASA&rsquo;s Artemis II is poised to launch today at 6:24 PM EDT from Kennedy Space Center with a 90% favorable weather forecast. Astronauts Reid Wiseman, Victor Glover, Christina Koch, and Canadian Jeremy Hansen are aboard the Orion capsule &ldquo;Integrity&rdquo; for a 10-day lunar flyby &mdash; the first crewed mission beyond low Earth orbit since Apollo 17 in 1972. Glover will become the first person of color to leave LEO; Koch the first woman. The mission validates the SLS rocket and Orion spacecraft ahead of Artemis III&rsquo;s planned lunar landing.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #f59e0b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Lockheed Martin (LMT)</strong> builds the Orion capsule &mdash; up 24% YTD, Space segment revenue $3.16B (+8% YoY). <strong>Northrop Grumman (NOC)</strong> supplies SLS solid rocket boosters and is building the HALO module for Gateway &mdash; Moderate Buy consensus. <strong>Intuitive Machines (LUNR)</strong> selected for Artemis II tracking via its Space Data Network; holds a ~$4.8B NASA Near Space Network contract &mdash; Strong Buy consensus, 49% upside to $24.38 target. A successful mission de-risks the entire Artemis pipeline and strengthens the investment case for lunar economy plays.
          </p>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- EVENT 5: Italy World Cup Elimination -->
    <!-- ═══════════════════════════════════════════════ -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #7c3aed; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">Cultural</span>
          <span style="color: #666; font-size: 11px;">Sports / Economy</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">5. Italy Eliminated from Third Consecutive World Cup &mdash; Bosnia &amp; Herzegovina Advances</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In a historic sporting failure, Italy lost 4&ndash;1 on penalties to Bosnia and Herzegovina, missing their <strong>third straight World Cup</strong>. Italian PM Renzi confirmed it was &ldquo;unfortunately not an April Fool&rsquo;s joke.&rdquo; Italy&rsquo;s sport minister has called for the football federation president to resign. The first missed World Cup in 2018 cost the Italian economy an estimated <strong>&euro;1 billion</strong> in lost social tourism, fan spending, and hospitality revenue. Meanwhile, the expanded 48-team 2026 World Cup in the US/Canada/Mexico is projected to generate <strong>$40.9B in GDP</strong> and 185,000 jobs &mdash; but US tourism headwinds (foreign arrivals down 5.4% in 2025) and sky-high ticket prices cloud the outlook.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #f59e0b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Italian hospitality and media stocks face headwinds &mdash; <strong>Juventus (JUVE.MI)</strong> and Italian sports broadcasters lose World Cup viewership revenue. <strong>FIFA sponsors</strong> like <strong>Adidas (ADS.DE)</strong> and <strong>Coca-Cola (KO)</strong> see reduced Italian market activation value. On the upside, US-exposed hospitality plays benefit from World Cup hosting: <strong>Marriott (MAR)</strong>, <strong>Hilton (HLT)</strong>, and <strong>Live Nation (LYV)</strong> for fan experience events. FIFA&rsquo;s sponsorship revenue hitting $2.8B (+$1B vs. 2022) benefits <strong>FIFA partner stocks</strong> broadly.
          </p>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- MARKET DASHBOARD -->
    <!-- ═══════════════════════════════════════════════ -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 16px; font-weight: 700;">Key Market Themes to Watch</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #1a1a1a;">
            <span style="color: #dc2626; font-size: 12px; font-weight: 700;">Oil &amp; Energy</span>
          </td>
          <td style="padding: 8px 0; border-bottom: 1px solid #1a1a1a; text-align: right;">
            <span style="color: #22c55e; font-size: 12px;">Brent $126 &bull; XLE +38% YTD</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #1a1a1a;">
            <span style="color: #dc2626; font-size: 12px; font-weight: 700;">European Defense</span>
          </td>
          <td style="padding: 8px 0; border-bottom: 1px solid #1a1a1a; text-align: right;">
            <span style="color: #22c55e; font-size: 12px;">Rheinmetall +22% &bull; Saab +20% YTD</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #1a1a1a;">
            <span style="color: #dc2626; font-size: 12px; font-weight: 700;">Airlines</span>
          </td>
          <td style="padding: 8px 0; border-bottom: 1px solid #1a1a1a; text-align: right;">
            <span style="color: #ef4444; font-size: 12px;">DAL/UAL ~-17% YTD on fuel costs</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #1a1a1a;">
            <span style="color: #dc2626; font-size: 12px; font-weight: 700;">Space/Artemis</span>
          </td>
          <td style="padding: 8px 0; border-bottom: 1px solid #1a1a1a; text-align: right;">
            <span style="color: #22c55e; font-size: 12px;">LMT +24% &bull; LUNR 49% upside target</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0;">
            <span style="color: #dc2626; font-size: 12px; font-weight: 700;">Risk Scenario</span>
          </td>
          <td style="padding: 8px 0; text-align: right;">
            <span style="color: #f59e0b; font-size: 12px;">$200 oil if Hormuz stays shut &bull; Rate hikes</span>
          </td>
        </tr>
      </table>
    </div>

    <!-- ═══════════════════════════════════════════════ -->
    <!-- SOURCES -->
    <!-- ═══════════════════════════════════════════════ -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #dc2626; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        IEA &bull; CNBC &bull; Bloomberg &bull; The Guardian &bull; Dallas Fed &bull; UNCTAD &bull; Time &bull; Stars and Stripes &bull; RAND &bull; Morningstar &bull; TipRanks &bull; NASA &bull; Live Science &bull; The Japan Times &bull; Defense News &bull; Al Jazeera &bull; ESPN &bull; Sky Sports &bull; Yahoo Sports &bull; Sportcal &bull; Goldman Sachs Research
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute financial advice.<br/>
        Sources verified across multiple outlets where possible.
      </p>
      <p style="font-size: 10px; color: #555; margin: 0;">
        Powered by <a href="https://worldmonitor.app" style="color: #dc2626; text-decoration: none;">World Monitor</a> &mdash; Real-time intelligence for a connected world.
      </p>
    </div>

  </div>
</div>`;

async function send() {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_KEY}`,
    },
    body: JSON.stringify({
      from: 'World Monitor <onboarding@resend.dev>',
      to: RECIPIENTS,
      subject: `[World Monitor] Top 5 Global Events & Market Impact — ${today}`,
      html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error(`Resend API error ${res.status}: ${body}`);
    process.exit(1);
  }

  const data = await res.json();
  console.log(`Email sent successfully to ${RECIPIENTS.join(', ')}`);
  console.log('Resend ID:', data.id);
}

send().catch((err) => {
  console.error('Failed to send email:', err);
  process.exit(1);
});
