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
          <div style="font-size: 9px; color: #666; text-transform: uppercase; letter-spacing: 2px;">Global Daily Briefing</div>
        </td>
      </tr>
    </table>

    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 16px 20px; margin-bottom: 24px;">
      <p style="font-size: 11px; color: #666; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 4px;">${today}</p>
      <p style="font-size: 20px; font-weight: 700; color: #fff; margin: 0;">Top 5 Global Events &mdash; 24-Hour Summary</p>
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Geopolitics &bull; Financial Markets &bull; Stocks &bull; Macro</p>
    </div>

    <!-- ===================== MARKET SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 16px 20px; margin-bottom: 24px;">
      <p style="color: #eab308; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0 0 12px;">Market Snapshot &mdash; May 7, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%;">
        <tr>
          <td style="padding: 4px 0; color: #bbb; font-size: 12px;">S&amp;P 500</td>
          <td style="padding: 4px 0; color: #ef4444; font-size: 12px; text-align: right;">&#9660; 0.38%</td>
          <td style="padding: 4px 0 4px 16px; color: #bbb; font-size: 12px;">Brent Crude</td>
          <td style="padding: 4px 0; color: #22c55e; font-size: 12px; text-align: right;">&#9650; 3.01% (~$102/bbl)</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; color: #bbb; font-size: 12px;">Dow Jones</td>
          <td style="padding: 4px 0; color: #ef4444; font-size: 12px; text-align: right;">&#9660; 0.63%</td>
          <td style="padding: 4px 0 4px 16px; color: #bbb; font-size: 12px;">EUR/USD</td>
          <td style="padding: 4px 0; color: #22c55e; font-size: 12px; text-align: right;">&#9650; Euro strengthening</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; color: #bbb; font-size: 12px;">NASDAQ</td>
          <td style="padding: 4px 0; color: #ef4444; font-size: 12px; text-align: right;">&#9660; 0.13%</td>
          <td style="padding: 4px 0 4px 16px; color: #bbb; font-size: 12px;">USD/JPY</td>
          <td style="padding: 4px 0; color: #22c55e; font-size: 12px; text-align: right;">Yen firming (~&yen;155.5)</td>
        </tr>
        <tr>
          <td style="padding: 4px 0; color: #bbb; font-size: 12px;">Bitcoin</td>
          <td style="padding: 4px 0; color: #ef4444; font-size: 12px; text-align: right;">&#9660; 2.13%</td>
          <td style="padding: 4px 0 4px 16px; color: #bbb; font-size: 12px;">Gold</td>
          <td style="padding: 4px 0; color: #22c55e; font-size: 12px; text-align: right;">&#9650; Safe-haven bid</td>
        </tr>
      </table>
    </div>

    <!-- ===================== EVENT 1 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #dc2626; font-size: 11px; font-weight: 700;">MIDDLE EAST / ENERGY</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Strait of Hormuz: Trump Pauses US Escort Operations, Signals Deal with Iran</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          President Trump announced a temporary pause in <strong>&ldquo;Project Freedom,&rdquo;</strong> the U.S. military operation to reopen the Strait of Hormuz, citing &ldquo;great progress&rdquo; toward a possible agreement with Iran. The Strait has been effectively blocked since Iran closed it following U.S.-Israeli strikes in late February, stranding approximately <strong>1,600 commercial vessels</strong>. The closure has removed an estimated <strong>14.5 million barrels/day</strong> from global supply (Goldman Sachs), pushing Brent crude above <strong>$100/bbl</strong> for two consecutive weeks. Pakistan and other regional nations reportedly requested the pause to facilitate diplomatic progress.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The stakes are enormous: the Strait normally handles <strong>20% of the world&rsquo;s seaborne oil trade</strong>. Analysts estimate the disruption has added <strong>0.8% to global inflation</strong> and raised stagflation risks worldwide. Jet fuel shortages threaten summer travel disruptions across Asia and Europe. CNBC reports several Asian and European carriers are already pre-positioning fuel reserves.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong style="color: #22c55e;">Bullish:</strong> Oil majors continue to benefit &mdash; <strong>Shell (SHEL)</strong>, <strong>BP (BP)</strong>, <strong>TotalEnergies (TTE)</strong>, and <strong>Saudi Aramco (2222.SR)</strong> are all printing elevated cash flows at $100+ oil. Tanker companies like <strong>Frontline (FRO)</strong> and <strong>Euronav (EURN)</strong> are seeing record day-rates for longer-route diversions around the Cape of Good Hope. Defense contractors <strong>Lockheed Martin (LMT)</strong> and <strong>RTX Corp (RTX)</strong> benefit from sustained CENTCOM operations.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #ef4444;">Bearish:</strong> Airlines face margin compression &mdash; <strong>Lufthansa (LHA.DE)</strong>, <strong>Singapore Airlines (C6L.SI)</strong>, and <strong>ANA Holdings (9202.T)</strong> are most exposed to jet fuel spikes. Consumer discretionary and transport-heavy sectors face headwinds globally. If the pause leads to a real deal, expect a sharp unwinding of the oil premium &mdash; energy stocks could give back 10-15% rapidly.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #1e40af; font-size: 11px; font-weight: 700;">EUROPE / POLITICAL CRISIS</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Romania&rsquo;s Pro-EU Government Toppled &mdash; Leu Hits Historic Low, &euro;10B EU Funds at Risk</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Romania&rsquo;s parliament voted <strong>281 to 4</strong> to oust Prime Minister Ilie Bolojan in a no-confidence motion, after the Social Democratic Party (PSD) withdrew from his coalition and joined forces with the far-right Alliance for the Unity of Romanians (AUR). The vote fractured Romania&rsquo;s pro-EU coalition over <strong>austerity measures and patronage disputes</strong>, leaving the country without a stable government at a critical fiscal juncture.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The Romanian <strong>leu hit a historic low against the euro</strong> on Tuesday. Romania must continue to shrink its deficit and implement structural reforms to access approximately <strong>&euro;10 billion in EU recovery and resilience funds</strong> before an <strong>August deadline</strong>. Analyst Adrian Negrescu warned that &ldquo;Romania risks sliding into an economic recession.&rdquo; Bolojan will serve as caretaker PM with limited powers until a new government is formed.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong style="color: #ef4444;">Risk-off for Romanian assets:</strong> The Bucharest Stock Exchange (BVB) faces selling pressure. <strong>Banca Transilvania (TLV.RO)</strong>, Romania&rsquo;s largest bank, is most exposed to political uncertainty and currency weakness. <strong>Erste Group (EBS.VI)</strong>, which has significant Romanian banking exposure through BCR, could see a 2-4% drag. Romanian sovereign bond spreads are widening.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #eab308;">Broader EU impact:</strong> The crisis adds to European political fragmentation risk. If Romania misses the August EU fund deadline, it signals broader governance challenges across Eastern Europe. Watch <strong>Soci&eacute;t&eacute; G&eacute;n&eacute;rale (GLE.PA)</strong> (parent of BRD, Romania&rsquo;s #2 bank) and the <strong>iShares MSCI Romania ETF</strong> for contagion signals. The euro itself is resilient so far, but a far-right government replacing the coalition would rattle European bond markets.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #22c55e; font-size: 11px; font-weight: 700;">INDO-PACIFIC / DEFENSE</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Japan &amp; Philippines Agree to Weapons Transfer Pact &mdash; Destroyer Exports Could Reshape Asian Security</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Japan and the Philippines signed a landmark defense cooperation agreement to begin negotiations on transferring <strong>up to six Abukuma-class destroyer escorts and TC-90 patrol aircraft</strong> to the Philippine Navy. Defense Ministers Shinjiro Koizumi and Gilberto Teodoro Jr. signed the framework in Makati, establishing a joint working group. This would represent <strong>Japan&rsquo;s first export of lethal military equipment</strong> under its recently revised &ldquo;Three Principles on Transfer of Defense Equipment and Technology.&rdquo;
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The agreement comes as both nations escalate concerns over <strong>China&rsquo;s coercive activities in the South China Sea</strong>. Delivery could begin as early as 2027. The deal signals a fundamental shift in Japan&rsquo;s post-WWII pacifist posture and opens the door for Tokyo to become a <strong>major defense exporter across Southeast Asia</strong>. This follows the U.S.-Philippine Balikatan exercises and intensifying Chinese naval activity near the Senkaku Islands and Taiwan Strait.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong style="color: #22c55e;">Bullish for Japanese defense:</strong> <strong>Mitsubishi Heavy Industries (7011.T)</strong> &mdash; builder of the Abukuma-class &mdash; is the direct beneficiary and could see its defense order backlog expand significantly if this pact opens further Southeast Asian markets. <strong>Kawasaki Heavy Industries (7012.T)</strong> (naval engines, submarines) and <strong>IHI Corporation (7013.T)</strong> (jet engines, defense systems) are secondary winners. Japan&rsquo;s defense sector has been on a multi-year re-rating as the country accelerates military spending toward its 2% GDP target.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #eab308;">Regional play:</strong> Philippine infrastructure and defense spending will increase. <strong>Ayala Corporation (AC.PM)</strong> has government infrastructure exposure. Western defense primes <strong>BAE Systems (BA.L)</strong> and <strong>Thales (HO.PA)</strong> may also compete for Southeast Asian contracts opened by this precedent. Conversely, escalation risk in the South China Sea is a tail risk for global shipping names and Taiwanese semiconductor supply chains &mdash; watch <strong>TSMC (TSM)</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #f97316; font-size: 11px; font-weight: 700;">AUSTRALIA / ENERGY SECURITY</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Australia Commits A$10 Billion to Fuel Security Reserve &mdash; Largest Stockpile Investment in National History</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Prime Minister Anthony Albanese announced the <strong>Australian Fuel Security and Resilience Package</strong>, committing more than <strong>A$10 billion (US$7.4 billion)</strong> to secure fuel and fertiliser supplies. The package includes <strong>A$3.2 billion</strong> for a permanent government-owned fuel reserve of approximately <strong>one billion litres</strong>, and <strong>A$7.5 billion</strong> for a fuel and fertiliser security facility to expand supply and storage infrastructure.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The measures target expanding Australia&rsquo;s onshore reserves to <strong>at least 50 days of fuel supply</strong>, up from current levels of 43 days of petrol, 33 days of diesel, and just 28 days of jet fuel. Energy Minister Chris Bowen noted Australia was in a &ldquo;minority of IEA countries&rdquo; without a national reserve. The announcement is a direct response to the <strong>Iran war disrupting Persian Gulf supply chains</strong>, which exposed Australia&rsquo;s critical vulnerability as one of the world&rsquo;s most import-dependent developed nations.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong style="color: #22c55e;">Direct beneficiaries on ASX:</strong> <strong>Ampol (ALD.AX)</strong> &mdash; Australia&rsquo;s largest fuel supplier and refinery operator &mdash; is the clearest winner, likely to secure government contracts for storage expansion and reserve management. <strong>Viva Energy (VEA.AX)</strong> benefits from increased storage infrastructure demand. <strong>Woodside Energy (WDS.AX)</strong> gains from the broader energy security narrative and elevated LNG/oil prices.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #eab308;">Macro signal:</strong> This is a A$10B fiscal stimulus into the energy sector that boosts construction, storage, and logistics. Tank storage operators and infrastructure firms will benefit. The fertiliser component helps <strong>Incitec Pivot (IPL.AX)</strong> and Australian agricultural stocks. Globally, Australia&rsquo;s move echoes a post-Hormuz trend of nations &ldquo;re-shoring&rdquo; energy security &mdash; expect similar announcements from Japan, South Korea, and India, driving structural demand for oil storage and logistics assets.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5 ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #3b82f6; font-size: 11px; font-weight: 700;">CENTRAL BANKS / MACRO</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Central Bank Divergence: BoE Holds at 3.75%, BoJ Doubles Down on Inflation &mdash; Dollar Weakens</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>Bank of England held its base rate at 3.75%</strong>, citing persistent inflation pressures from energy costs and wage growth despite slowing economic activity. In Asia, the <strong>Bank of Japan revised its FY2026 inflation forecast upward to 2.8%</strong> while <strong>halving its growth forecast to just 0.5%</strong> &mdash; a textbook stagflation signal. German CPI came in at <strong>2.9% y/y</strong> in April, slightly below expectations of 3.0%, offering marginal relief for ECB hawks.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The <strong>U.S. dollar weakened broadly</strong>, with the yen firming to ~&yen;155.5/USD after suspected Japanese intervention. Press reports suggest Tokyo may have conducted its <strong>penultimate intervention session</strong> under IMF guidelines before November. The divergence between hawkish Asian central banks and a potentially easing Fed later this year is driving capital flows away from U.S. treasuries and toward Asian fixed income.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">Market &amp; Stock Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong style="color: #22c55e;">Yen strength plays:</strong> A firmer yen benefits Japanese importers but hurts exporters. <strong>Toyota (7203.T / TM)</strong>, <strong>Sony (6758.T / SONY)</strong>, and <strong>Nintendo (7974.T)</strong> face margin pressure if yen appreciation persists &mdash; every &yen;1 move costs Toyota an estimated &yen;50B in annual operating profit. Conversely, Japanese domestic-facing stocks and importers benefit.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0 0 8px;">
            <strong style="color: #eab308;">UK rate hold:</strong> <strong>Barclays (BARC.L)</strong> and <strong>NatWest (NWG.L)</strong> benefit from sustained net interest margins at 3.75%. UK homebuilders like <strong>Barratt Redrow (BTRW.L)</strong> and <strong>Persimmon (PSN.L)</strong> remain under pressure as mortgage affordability stays constrained.
          </p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong style="color: #3b82f6;">Dollar weakness trade:</strong> A weakening dollar lifts <strong>gold (GLD)</strong>, <strong>emerging market equities (EEM)</strong>, and commodity-linked currencies. <strong>Alphabet (GOOGL)</strong> bucked the tech selloff on strong AI/cloud earnings, signaling that quality mega-cap tech can still outperform in macro uncertainty.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaway &mdash; What Smart Money Is Watching</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Hormuz question dominates everything.</strong> If Trump&rsquo;s pause leads to a real Iran deal, oil drops 20-30% rapidly, crushing energy longs and relieving inflationary pressure globally. If talks collapse, $120+ oil is in play and recession risks spike. Every other market theme is downstream of this binary outcome.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Indo-Pacific defense spending is a multi-year secular trend.</strong> Japan&rsquo;s destroyer transfer to the Philippines marks a historic shift. Combined with Australia&rsquo;s A$10B fuel reserve, the message is clear: allies are rearming and de-risking supply chains. Defense and energy security stocks are structural longs.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">European political risk is resurfacing.</strong> Romania&rsquo;s government collapse adds to the fragmentation narrative. Far-right parties are gaining leverage across the continent. Watch sovereign bond spreads in peripheral Europe.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Watch this week:</strong> Iran deal progress (or collapse) &bull; BoJ intervention capacity &bull; Romania caretaker government formation &bull; EU fund deadline pressure &bull; Brent crude $100 support level &bull; Japanese defense stock momentum &bull; Alphabet AI earnings follow-through
      </p>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Al Jazeera &bull; Bloomberg &bull; CNBC &bull; Reuters &bull; Euronews &bull; CaixaBank Research &bull; The Japan Times &bull; South China Morning Post &bull; Naval News &bull; StoneX Financial Markets &bull; Washington Post &bull; Foreign Policy &bull; Balkan Insight &bull; Dallas Fed &bull; UNCTAD &bull; Goldman Sachs Research &bull; Bank of Japan &bull; Bank of England &bull; Australian PM Office
      </p>
    </div>

    <div style="border-top: 1px solid #1a1a1a; padding-top: 20px; text-align: center;">
      <p style="font-size: 10px; color: #444; margin: 0 0 8px; line-height: 1.6;">
        This briefing is for informational purposes only and does not constitute financial advice.<br/>
        Sources verified across multiple international outlets. Analysis reflects market conditions as of May 7, 2026.
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
