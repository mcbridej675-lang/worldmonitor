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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Intelligence Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Global Events &mdash; 24-Hour Market Intelligence</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Markets &bull; Equities &bull; Commodities &bull; Risk Assessment</p>
      <p style="font-size: 11px; color: #ef4444; margin: 8px 0 0; font-weight: 600;">U.S. markets closed today &mdash; Juneteenth holiday. S&amp;P 500 gained +0.9% for the week (11th winning week in 12).</p>
    </div>

    <!-- ===================== EVENT 1: US-IRAN PEACE DEAL ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Middle East / Geopolitics / Energy &mdash; June 17&ndash;19</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US-Iran Peace Deal Signed &mdash; 60-Day MOU Reshapes Middle East Geopolitics and Global Energy Markets</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On June 17, the U.S. and Iran signed a <strong>memorandum of understanding</strong> intended to bring the conflict to a formal end within <strong>60 days</strong>. The deal includes an <strong>immediate and permanent ceasefire</strong>, sanctions relief, and regional security measures. Iran publicly released a <strong>14-point draft MOU</strong> covering ceasefire extension, sanctions relief, and regional security provisions.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          World leaders &mdash; including European nations and Japan &mdash; have welcomed the agreement, with several European countries signaling willingness to <strong>lift sanctions on Tehran</strong> in exchange for curbs on its nuclear program. The Strait of Hormuz, closed since late February and disrupting ~20% of global oil supply, is now expected to <strong>reopen as part of the deal framework</strong>, marking a potential turning point for global energy markets.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Oil:</strong> WTI futures dropped to ~$80/barrel on expectations of Iranian oil returning to global markets. Brent crude under similar downward pressure. Shipping and logistics companies serving the Strait of Hormuz benefit from reduced risk premiums.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> XLE (energy sector ETF) &bull; XOP (oil &amp; gas E&amp;P) &bull; COP, XOM, CVX (oil majors &mdash; lower crude prices) &bull; USO (oil ETF) &bull; ITA, PPA (defense ETFs &mdash; reduced conflict premium)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> UAL, DAL, AAL (airlines &mdash; lower fuel costs) &bull; Consumer discretionary broadly (easing inflation) &bull; ZIM, ATCO (shipping &mdash; Hormuz reopening) &bull; European banks positioned for Iran re-engagement
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: FED HAWKISH PIVOT ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Global / Monetary Policy / Rates &mdash; June 17&ndash;18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Federal Reserve Signals Rate Hike &mdash; Hawkish Pivot Shocks Global Markets as Dot Plot Jumps to 3.8%</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Federal Reserve&rsquo;s June 17 meeting delivered a decisive <strong>hawkish shift</strong>. The dot plot now shows a median year-end rate projection of <strong>3.8%, up sharply from 3.4% in March</strong>. Nine of 18 officials now see rates <strong>increasing in 2026</strong> &mdash; a complete reversal from earlier expectations of cuts. Chairman <strong>Kevin Warsh</strong> emphasized &ldquo;price stability&rdquo; in a hawkish press conference and announced task forces to overhaul major Fed operations.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Markets repriced aggressively from expecting 1&ndash;2 cuts to now pricing in <strong>1&ndash;2 possible hikes</strong>. The S&amp;P 500 and Nasdaq <strong>plummeted on June 17</strong> as growth stocks and tech took heavy losses. Short-term Treasury yields jumped. The rate hike signal complicates borrowing costs globally, particularly for <strong>emerging market debt</strong> denominated in dollars.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Rates:</strong> 2Y Treasury yield spiked. Dollar strengthened. Growth/duration assets repriced lower. Emerging market currencies under pressure (BRL, ZAR, INR, TRY).<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> QQQ (Nasdaq 100 &mdash; growth/tech selloff) &bull; TLT (long-duration bonds) &bull; ARKK (high-growth tech) &bull; XLK (tech sector) &bull; IYR (real estate &mdash; rate-sensitive) &bull; EEM (emerging markets ETF &mdash; dollar strength)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> XLF (financials &mdash; banks benefit from higher rates) &bull; JPM, BAC, GS (bank stocks) &bull; KIE (insurance ETF) &bull; XLI (industrials &mdash; pricing power) &bull; UUP (US Dollar Index ETF)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: US-ITALY DIPLOMATIC CRISIS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Europe / Diplomacy / Trade &mdash; June 19</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">US-Italy Diplomatic Crisis Erupts &mdash; Italian FM Cancels Washington Visit After Trump-Meloni Clash at G7</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A full-blown diplomatic crisis between the U.S. and Italy ignited today. Trump told an Italian TV network that PM <strong>Giorgia Meloni &ldquo;begged&rdquo; him for a photograph</strong> at the Evian G7 summit. Meloni responded publicly declaring <strong>&ldquo;Neither I nor Italy ever beg,&rdquo;</strong> accompanied by an emotional video. Italian Foreign Minister <strong>Antonio Tajani canceled his scheduled June 21&ndash;22 visit</strong> to the U.S., calling the remarks &ldquo;serious and offensive&rdquo; and &ldquo;an insult to all of Italy.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The crisis is fueled by deeper disagreements: Meloni called the U.S. war in Iran <strong>illegal</strong>, and Italy strongly supports Ukraine while Trump has taken a different stance. Deputy PM <strong>Matteo Salvini</strong> rallied behind Meloni, presenting a rare united Italian political front. This fracture within the Western alliance introduces <strong>geopolitical risk premiums</strong> and raises concerns about NATO cohesion ahead of critical defense spending discussions.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Bonds:</strong> Italian BTPs could see spread widening against German bunds on political uncertainty. Euro mildly weakened on NATO alliance cohesion concerns. Trade-exposed Italian companies face risk if tensions escalate to trade measures.<br/><br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EWI (iShares Italy ETF) &bull; Ferrari (RACE &mdash; luxury exports to U.S.) &bull; Stellantis (STLA &mdash; U.S. auto market exposure) &bull; Brunello Cucinelli, Prada (Italian luxury &mdash; U.S. trade risk) &bull; Leonardo (LDO.MI &mdash; NATO defense cohesion concerns)<br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> European defense broadly (RHM.DE, BA.L &mdash; if Europe accelerates independent defense spending) &bull; Rheinmetall, BAE Systems (European defense autonomy play)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: UK BY-ELECTION ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">United Kingdom / Politics / GBP &mdash; June 19</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Andy Burnham Wins UK By-Election with 9,000-Vote Margin &mdash; Sets Up Leadership Challenge Against PM Starmer</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Greater Manchester Mayor <strong>Andy Burnham won the Makerfield by-election</strong> today with 24,927 votes, beating the Reform UK candidate by over <strong>9,000 votes</strong>. This gives him the House of Commons seat he needs to mount a <strong>formal challenge against PM Keir Starmer</strong> for leadership of the Labour Party. Already, <strong>110 Labour MPs</strong> have signed a letter calling for Starmer to step down.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          An Ipsos poll shows Burnham is preferred as PM by <strong>25% of British adults versus just 12% for Starmer</strong>. This could precipitate either Starmer&rsquo;s resignation or a formal leadership contest, possibly also involving former Health Secretary <strong>Wes Streeting</strong>. Burnham&rsquo;s &ldquo;levelling up&rdquo; northern England agenda signals potential shifts in UK infrastructure, housing, and NHS policy.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Currency:</strong> Sterling (GBP) faces volatility on political uncertainty. UK gilt yields may fluctuate depending on which economic policies Burnham signals. Foreign investment sentiment may soften short-term on leadership uncertainty.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> Balfour Beatty (BBY.L &mdash; UK infrastructure/levelling up) &bull; Taylor Wimpey (TW.L), Persimmon (PSN.L) (housebuilders &mdash; northern housing push) &bull; Kier Group (KIE.L &mdash; public works)<br/>
            <strong style="color: #ef4444;">&#9660; DOWN:</strong> EWU (iShares UK ETF &mdash; short-term political uncertainty) &bull; UK-focused banks (LLOY.L, BARC.L &mdash; policy uncertainty) &bull; FXB (British Pound ETF &mdash; sterling volatility)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: INDIA-FRANCE PARTNERSHIP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">South Asia / Europe / Defense / Trade &mdash; June 13&ndash;18</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">India-France Elevate to &ldquo;Special Global Strategic Partnership&rdquo; &mdash; 13 Major Deals Signed Spanning Defense, Space &amp; Tech</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          PM <strong>Narendra Modi</strong> concluded a landmark 6-day visit to France (June 13&ndash;18), during which India and France elevated their relationship to a <strong>&ldquo;Special Global Strategic Partnership.&rdquo;</strong> Thirteen major agreements were signed spanning <strong>defense, space, technology, clean energy, and innovation</strong>. Key outcomes include a General Security Agreement for classified information exchange and a commitment to <strong>double bilateral trade over five years</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A new <strong>Economic Security Dialogue</strong> was established covering critical minerals, semiconductors, energy, and cybersecurity. Modi also attended <strong>VivaTech 2026</strong> alongside Macron and the G7 outreach session at Evian. India&rsquo;s <strong>UPI payment system expansion into France</strong> marks a significant fintech milestone. The partnership strengthens India&rsquo;s strategic positioning as a key Western partner &mdash; particularly significant given the US-Italy and other Western alliance strains.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Market Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Trade:</strong> Trade-doubling commitment is structurally bullish for bilateral trade-exposed companies. Critical minerals and semiconductor supply chain agreements benefit both countries&rsquo; tech sectors. UPI expansion into France benefits Indian fintech ecosystem.<br/><br/>
            <strong style="color: #22c55e;">&#9650; UP:</strong> HAL.NS (Hindustan Aeronautics &mdash; Franco-Indian defense deals) &bull; BEL.NS (Bharat Electronics) &bull; Dassault Aviation (AM.PA), Thales (HO.PA), Safran (SAF.PA) (French defense &mdash; India order flow) &bull; INDA (iShares India ETF &mdash; geopolitical strengthening) &bull; Paytm, PhonePe parent (UPI expansion into France)<br/>
            <strong style="color: #22c55e;">&#9650; MEDIUM-TERM:</strong> INDY (iShares India 50 ETF) &bull; EPI (WisdomTree India Earnings) &bull; Indian semiconductor plays (strategic positioning)
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; Portfolio Positioning</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Iran peace deal is the biggest macro catalyst this week.</strong> Oil dropping to ~$80 on Hormuz reopening expectations reverses the energy trade &mdash; airlines and consumer discretionary are now the beneficiaries while oil majors face headwinds. Gas prices falling below $4/gallon for the first time since March is already easing consumer pressure. However, the 60-day timeline means execution risk remains &mdash; any collapse in talks sends crude sharply higher.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Fed&rsquo;s hawkish pivot is the counterweight.</strong> Moving from expected cuts to possible hikes is a seismic shift for risk assets. Financials benefit, but growth/tech and rate-sensitive sectors (REITs, high-duration bonds) face sustained pressure. Emerging markets are particularly vulnerable to dollar strength and higher U.S. rates &mdash; watch capital outflows from EM equities and debt.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Western alliance fractures create both risk and opportunity.</strong> The US-Italy crisis, combined with the India-France deepening partnership, signals a realignment of global alliances. European defense stocks benefit from accelerated autonomy spending. India emerges as a key strategic partner for Western nations &mdash; Indian defense and tech stocks are structurally well-positioned. UK political uncertainty around the Starmer-Burnham contest adds another layer of sterling and gilt volatility.
      </p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Market Snapshot &mdash; June 19, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">S&amp;P 500</td>
          <td style="color: #888; text-align: right; padding: 6px 0;">Closed (Juneteenth) &mdash; +0.9% for the week</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nasdaq</td>
          <td style="color: #888; text-align: right; padding: 6px 0;">Closed (Juneteenth)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Dow Jones</td>
          <td style="color: #888; text-align: right; padding: 6px 0;">Closed (Juneteenth)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">WTI Crude</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">~$80.00 (Iran deal pressure)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">U.S. Gas Prices</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">Below $4/gal (first time since March)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Fed Dot Plot (YE median)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">3.8% (up from 3.4% in March)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">GBP/USD</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0;">Volatile (UK political uncertainty)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">EUR/USD</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0;">Pressured (US-Italy, Fed hawkish)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Italian BTP Spread</td>
          <td style="color: #eab308; text-align: right; padding: 6px 0;">Widening risk (diplomatic crisis)</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        CNBC &bull; Al Jazeera &bull; Gulf News &bull; Yahoo Finance &bull; PBS &bull; CNN &bull; NPR &bull; La Voce di New York &bull; The New Republic &bull; NBC News &bull; WION &bull; Business Standard &bull; DD News &bull; CryptoBriefing &bull; Intellectia &bull; TheStreet &bull; Britannica
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute financial advice. Sources verified across multiple outlets where possible.<br/>
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
  subject: `[World Monitor] Global Daily Intelligence Briefing — ${today}`,
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
