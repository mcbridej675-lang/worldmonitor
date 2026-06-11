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
      <p style="font-size: 12px; color: #888; margin: 8px 0 0;">Military &bull; Geopolitics &bull; Security &bull; Defense &bull; Regional Developments</p>
    </div>

    <!-- ===================== EVENT 1: CHINA MARITIME OP EAST OF TAIWAN ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">1</span>
          <span style="color: #666; font-size: 11px;">Indo-Pacific / Maritime Security / CRITICAL &mdash; June 6&ndash;10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">China Completes Maritime Law Enforcement Operation East of Taiwan; Queries Foreign Commercial Ships for First Time</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          China concluded a <strong>special maritime traffic law enforcement and hydrographic survey operation</strong> in waters east of Taiwan on <strong>June 10</strong>, covering 1,030 nautical miles and conducting <strong>198 checks on passing vessels</strong>. In a significant escalation, Chinese maritime vessels <strong>queried foreign commercial ships</strong> flagged in Singapore, Liberia, and Benin for the first time &mdash; asking their ports, destinations, and crew numbers. Taiwan deployed <strong>5 patrol vessels</strong> in response (Tamsui, Jian, Kaohsiung, Changbin, Hualien).
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The operation was triggered by the <strong>Japan-Philippines agreement to negotiate maritime boundary delimitation</strong> in the area. China Coast Guard also made 4 incursions near Taiwan&rsquo;s Kinmen Islands and 1 near Pratas Island in May. CNS Liaoning (CV-16) and CNS Shandong (CV-17) recently conducted simultaneous operations near Japan, including <strong>over 1,000 air operations</strong>. Both carriers transited the <strong>Miyako Strait</strong> (between Okinawa and Miyako Island) simultaneously for the first time. Chinese warship passages off southwestern Japan have <strong>tripled in the past three years</strong>.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PLA long-range precision strike weapons can reach <strong>2,800&ndash;3,700 km</strong> from mainland China, placing all Okinawa installations within range. Japan is considering expanding military presence on <strong>Iwo Jima</strong> as a fallback posture. Expect heightened ISR tempo and readiness posture at Kadena, MCAS Futenma, and Camp Schwab as China&rsquo;s assertiveness near the Miyako Strait continues.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 2: TAIWAN HIMARS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">2</span>
          <span style="color: #666; font-size: 11px;">Taiwan Strait / Defense / Escalation &mdash; June 10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Taiwan Fires U.S.-Supplied HIMARS into the Taiwan Strait for the First Time</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          On <strong>June 10</strong>, Taiwan fired rockets from U.S.-supplied <strong>HIMARS launchers</strong> into the Taiwan Strait for the first time &mdash; a significant show of force. The live-fire drill in Taichung City included 155mm howitzers and simulated a response to a Chinese invasion, testing rapid deployment and precision-strike capabilities. This reflects Taiwan&rsquo;s shift toward an <strong>asymmetric &ldquo;porcupine&rdquo; defense strategy</strong> encouraged by the United States.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          This comes as Valiant Shield 2026 (June 22&ndash;July 1) will deploy the <strong>Typhon mid-range missile system</strong> to MSDF Kanoya Air Base in Kagoshima Prefecture. Unlike previous exercises, both Typhon and HIMARS systems will be <strong>stored at a U.S. base in Japan</strong> afterward rather than being flown out &mdash; a significant escalation in forward-deployed capability. Kanoya is approximately <strong>800&ndash;1,200 km</strong> from major Chinese cities including Shanghai.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Expect heightened Chinese military response that could manifest near Okinawa. The <strong>12th Marine Littoral Regiment</strong> at Camp Schwab is receiving the <strong>NMESIS anti-ship missile system</strong> in FY2026, along with MQ-9 Reaper drones and AN/TPS-80 radar &mdash; fundamentally changing the unit&rsquo;s sea-denial capability in the First Island Chain.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 3: U.S.-IRAN / HORMUZ / 31ST MEU GAP ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">3</span>
          <span style="color: #666; font-size: 11px;">Middle East / Energy / Force Posture &mdash; June 9&ndash;11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">U.S.-Iran Military Strikes Escalate; Hormuz Closed; 31st MEU Absence Creates Indo-Pacific Gap</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The U.S. and Iran exchanged military strikes on <strong>June 9&ndash;11</strong>. Iran declared the <strong>Strait of Hormuz closed to all vessels</strong> on June 11 &mdash; critical for Japan, which imports <strong>93% of its oil</strong> through the strait. An Asahi Shimbun poll showed <strong>90% of respondents</strong> were anxious about the conflict&rsquo;s impact on Japan&rsquo;s economy.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The USS Tripoli and approximately <strong>2,200&ndash;2,500 members of the 31st Marine Expeditionary Unit</strong> &mdash; the only permanently forward-deployed MEU in the Pacific, normally based on Okinawa &mdash; deployed to the Middle East since March 13 for Iran/Hormuz operations. Marine Commandant has acknowledged this leaves an <strong>&ldquo;unfilled gap&rdquo; in the Indo-Pacific</strong>. Defense experts warn this reduces U.S. deterrence capability in the region at a time of escalating Chinese activity near Okinawa.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Force posture:</strong> With the 31st MEU in the Middle East, Okinawa&rsquo;s primary rapid-response amphibious capability is absent from the theater. <strong>Financial:</strong> BOJ expected to hike rates to <strong>1.0%</strong> at June 15&ndash;16 meeting (first time since 1995). Japan wholesale inflation hit <strong>6.3% YoY</strong> in May, driven by energy costs. USD/JPY at <strong>160.12</strong>. Nikkei 225 at <strong>64,217</strong> (+0.06% on June 11) after pulling back from record 68,797.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 4: USMC TRIAL / COMMUNITY RELATIONS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">4</span>
          <span style="color: #666; font-size: 11px;">USMC / Legal / Community Relations &mdash; June 10</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Marine Sexual Assault Trial Begins at Naha District Court; Community Relations Under Scrutiny</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A Japanese woman testified on <strong>June 10</strong> in Naha District Court that Pfc. Austin Wedington (28, USMC, Camp Foster) sexually assaulted her in a bathroom stall at Gunners Fitness Center on Camp Foster in March 2025. The defense has entered a not-guilty plea by reason of insanity, citing a parasomnia/sleepwalking defense. A second victim is scheduled to testify <strong>July 1</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          Separately, a Japanese court on <strong>June 4 ordered a Marine to pay $41,000</strong> in civil damages for attempted sexual assault. Through September 2025, U.S. military personnel were involved in <strong>77 criminal cases</strong> in Okinawa, surpassing the full 2024 total. The 2nd Okinawa Community Partnership Forum was held May 29, reviewing cooperative measures. U.S. military is considering changes to the newcomer orientation briefing, adding details about sexual offenses/penalties and DUI prevention.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            These cases fuel local opposition to the U.S. military presence and play directly into the <strong>September 13 gubernatorial election</strong>. Governor Tamaki (anti-base) is seeking a third term against LDP-backed Genta Koja (pro-relocation). Tamaki&rsquo;s support base is reportedly <strong>wavering</strong>, but high-profile incidents strengthen his anti-base narrative.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 5: EXERCISES & FORCE POSTURE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">5</span>
          <span style="color: #666; font-size: 11px;">Military Exercises / Force Modernization &mdash; June 20&ndash;July 31</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Major Joint Exercises Imminent: Resolute Dragon 26, Valiant Shield 2026, and RIMPAC 2026</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Resolute Dragon 26 (June 20&ndash;30):</strong> ~9,600 personnel (7,300 JGSDF + 2,300 USMC) across Kyushu, Okinawa main island, Miyako, Ishigaki, and Yonaguni. Three JGSDF V-22 Ospreys will deploy to <strong>MCAS Futenma for the first time</strong>. A JGSDF Osprey will airlift a mock patient from Miyako Island to Futenma &mdash; the <strong>first JGSDF Osprey landing on Miyako Island</strong>. Includes disaster relief drills on remote islands.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Valiant Shield 2026 (June 22&ndash;July 1):</strong> Multilateral Western Pacific exercise. <strong>Typhon mid-range missile system</strong> deploying to Kanoya Air Base. <strong>RIMPAC 2026 (June 24&ndash;July 31):</strong> 31 nations, 32 surface ships, 5 submarines, 140 aircraft, 25,000+ personnel. USS Theodore Roosevelt (CVN-71) leads with first-ever <strong>Seahawk medium unmanned surface vessel (MUSV)</strong> deployment.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            Expect <strong>significantly increased operational tempo</strong> across all Okinawa installations starting June 20. JGSDF Osprey operations at Futenma will be locally sensitive. USS George Washington (CVN-73) departed Yokosuka May 23 for a six-month Indo-Pacific patrol and is operating in the Philippine Sea.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 6: BASE DEVELOPMENTS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">6</span>
          <span style="color: #666; font-size: 11px;">Installation Updates / Quality of Life &mdash; June</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Camp Hansen New Barracks Open July; OHA Increases; Kadena F-15EX Delayed to 2027</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          A ribbon-cutting ceremony was held <strong>June 5</strong> for the &ldquo;barracks of the future&rdquo; at Camp Hansen &mdash; three six-story buildings housing <strong>1,100 Marines</strong> in private 155 sq ft bedrooms with shared kitchens, in-unit washers/dryers. First residents move in <strong>July 2026</strong>. Overseas Housing Allowance (OHA) rates increased significantly on <strong>May 16</strong>: E-1 to E-4 +$396/mo, O-1/O-2/E-5 +$504/mo, O-3/E-6 to E-8 +$450/mo. Off-base 2&ndash;3 BR units range $1,150&ndash;$1,785/mo.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          The permanent deployment of <strong>36 F-15EX Eagle II</strong> fighters to Kadena Air Base has been delayed. Air Force Secretary confirmed first aircraft may not arrive until <strong>2027</strong>, approximately one year behind the original spring 2026 schedule. The 18th Aircraft Maintenance Squadron activated at Kadena on May 15 in preparation. <strong>Futenma relocation:</strong> Henoko construction continues but not expected to finish until at least <strong>2033</strong>. The U.S. will not return Futenma unless a long runway is secured (current plans: two 1,800m runways vs. Futenma&rsquo;s 2,700m). The U.S.-Japan <strong>Host Nation Support cost-sharing agreement expires FY2026</strong>, requiring renegotiation.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Environmental Note</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            PFAS levels up to <strong>56x Japan&rsquo;s legal limit</strong> (2,800 ppt) found downstream of Kadena. Elevated levels at 12 spots around Kadena, 13 near Futenma, and sites near Camp Hansen and Camp Kinser. U.S. Forces Japan has denied prefecture requests for on-base water sampling.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== EVENT 7: NORTH KOREA & EXTENDED DETERRENCE ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #dc2626; color: #fff; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">7</span>
          <span style="color: #666; font-size: 11px;">North Korea / U.S.-Japan Alliance / Nuclear &mdash; June 4&ndash;9</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">North Korea Unveils New Nuclear Fuel Plant; U.S.-Japan Extended Deterrence Dialogue Concludes in Tokyo</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          North Korea unveiled a <strong>new facility to produce weapons-grade uranium</strong> on June 4, with Kim Jong Un announcing plans to bolster nuclear forces <strong>&ldquo;at an exponential rate.&rdquo;</strong> Kim inspected munitions at a weapons factory on June 7. North Korea has enough material for up to <strong>90 warheads</strong> (est. 50 assembled) and has ordered missile production capacity <strong>doubled within five years</strong>. Earlier in 2026, North Korea tested ballistic missiles with <strong>cluster munition warheads</strong>.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          In response, the U.S.-Japan <strong>Extended Deterrence Dialogue (EDD)</strong> was held in Tokyo June 8&ndash;9. The U.S. reaffirmed its commitment to Japan&rsquo;s defense using the <strong>full range of capabilities, including nuclear</strong>. Japan&rsquo;s record defense budget of <strong>9.04 trillion yen ($58B)</strong> includes 970 billion yen for standoff missile capability, and Japan has <strong>lifted its ban on lethal arms exports</strong> to 17 countries (April 21). Japan also deployed <strong>4 JSDF personnel to NATO NSATU</strong> in Germany (May 29) for Ukraine training coordination.
        </p>
        <div style="background: #0a0a0a; border: 1px solid #222; padding: 12px 16px; margin-top: 12px;">
          <p style="color: #eab308; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px; font-weight: 700;">&#9733; Okinawa Impact</p>
          <p style="color: #ccc; font-size: 12px; line-height: 1.6; margin: 0;">
            <strong>Type 25 SSM</strong> (upgraded Type-12, ~1,000 km range) and <strong>Type 25 HVGP</strong> deployment began March 31, 2026. JS Chokai completing Tomahawk modifications by September. <strong>Naha Air Base</strong> fighter camouflage shelter under construction (~$96M), designed to counter Chinese satellite surveillance. <strong>Yonaguni Island:</strong> Type-03 medium-range SAMs planned for deployment by FY2030.
          </p>
        </div>
      </div>
    </div>

    <!-- ===================== WEATHER & NATURAL HAZARDS ===================== -->
    <div style="margin-bottom: 24px;">
      <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="background: #f59e0b; color: #000; font-size: 10px; font-weight: 800; padding: 3px 8px; text-transform: uppercase; letter-spacing: 1px; margin-right: 8px;">WX</span>
          <span style="color: #666; font-size: 11px;">Weather &amp; Natural Hazards &mdash; June 10&ndash;11</span>
        </div>
        <h3 style="color: #fff; font-size: 16px; margin: 0 0 10px; font-weight: 700;">Active Rainy Season: Heavy Rain Warnings in Effect; Recent Typhoon &amp; Tsunami Advisory</h3>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Current (June 10&ndash;11):</strong> Active rainy season front (tsuyu) bringing heavy rain to Okinawa with warnings for <strong>landslides, flooding of low-lying areas, and rising rivers</strong>. Temps: 29&ndash;31&deg;C (84&ndash;88&deg;F), humidity ~84%. Rainy season started May 10, expected to end June 21.
        </p>
        <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 12px;">
          <strong>Typhoon Jangmi (June 1&ndash;2):</strong> First major typhoon to hit Okinawa in 3 years. Max winds 30.7 m/s in Naha. Naha Airport fully closed June 1. U.S. bases completed TCCOR progression, returned to &ldquo;all clear&rdquo; June 2. Minor damage, no significant impacts to military installations.<br/>
          <strong>Tsunami Advisory (June 7&ndash;8):</strong> M7.8&ndash;8.2 earthquake off Mindanao, Philippines triggered JMA advisory for Okinawa coastlines. First wave (~several cm) recorded 12:58 p.m. June 8. Advisory lifted 4:50 p.m. 195,000+ evacuated across Japan. No damage in Okinawa.<br/>
          <strong>Season Outlook:</strong> Forecasters predict approximately <strong>28 typhoons</strong> in 2026 &mdash; a potentially more active season than usual.
        </p>
      </div>
    </div>

    <!-- ===================== KEY TAKEAWAY ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; border-left: 3px solid #7c3aed; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Takeaways &mdash; Command Assessment</p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">The Indo-Pacific deterrence posture is strained.</strong> The 31st MEU&rsquo;s absence in the Middle East creates a capability gap at the worst possible time &mdash; Chinese dual-carrier operations near the Miyako Strait, Taiwan&rsquo;s first HIMARS firing into the strait, and China&rsquo;s escalatory maritime enforcement east of Taiwan all point to increased risk of miscalculation. Okinawa-based forces should anticipate being called upon for contingency planning outside normal exercise rotations.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0 0 10px;">
        <strong style="color: #fff;">Exercise tempo spikes in 10 days.</strong> Resolute Dragon 26, Valiant Shield 2026, and RIMPAC 2026 overlap from late June through July. JGSDF Ospreys operating from Futenma for the first time will be politically sensitive. The Typhon missile system remaining in Japan post-exercise signals a permanent shift in forward-deployed strike capability.
      </p>
      <p style="color: #bbb; font-size: 13px; line-height: 1.6; margin: 0;">
        <strong style="color: #fff;">Local political dynamics intensify.</strong> The Marine sexual assault trial, 77 criminal cases in 2025, and the approaching gubernatorial election (September 13) create a volatile community relations environment. Cost-sharing agreement renegotiation adds another dimension. On the positive side, new Camp Hansen barracks and OHA increases address longstanding quality-of-life concerns.
      </p>
    </div>

    <!-- ===================== MARKET / FINANCIAL SNAPSHOT ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Japan Financial Snapshot &mdash; June 11, 2026</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Nikkei 225</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">64,217 (+0.06%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">USD/JPY</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">160.12 (yen weakening)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Japan Wholesale Inflation (May)</td>
          <td style="color: #ef4444; text-align: right; padding: 6px 0;">6.3% YoY</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">BOJ Rate Decision (June 15&ndash;16)</td>
          <td style="color: #f59e0b; text-align: right; padding: 6px 0;">Expected: 1.0% (from 0.75%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Okinawa Tourism (FY2025)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">On track for 10M+ visitors (record)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Okinawa Development Funds (FY2026)</td>
          <td style="color: #22c55e; text-align: right; padding: 6px 0;">264.7B yen (+first rise in 10 yrs)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Okinawa Accommodation Tax (Apr 2026)</td>
          <td style="color: #ccc; text-align: right; padding: 6px 0;">2% (est. 7.8B yen/yr revenue)</td>
        </tr>
      </table>
    </div>

    <!-- ===================== UPCOMING DATES ===================== -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Key Dates to Watch</p>
      <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; font-size: 12px;">
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0; width: 120px;">June 15&ndash;16</td>
          <td style="color: #ccc; padding: 6px 0;">BOJ Rate Decision (expected hike to 1.0%)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">June 20&ndash;30</td>
          <td style="color: #ccc; padding: 6px 0;">Exercise Resolute Dragon 26 (JGSDF/USMC)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">June 22&ndash;Jul 1</td>
          <td style="color: #ccc; padding: 6px 0;">Valiant Shield 2026 (Typhon deployment)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">June 24&ndash;Jul 31</td>
          <td style="color: #ccc; padding: 6px 0;">RIMPAC 2026 (31 nations, Hawaii)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">July 1</td>
          <td style="color: #ccc; padding: 6px 0;">Second victim testimony (Wedington trial)</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">July 2026</td>
          <td style="color: #ccc; padding: 6px 0;">Camp Hansen new barracks &mdash; first residents</td>
        </tr>
        <tr style="border-bottom: 1px solid #222;">
          <td style="color: #888; padding: 6px 0;">Sep 13</td>
          <td style="color: #ccc; padding: 6px 0;">Okinawa Gubernatorial Election (Tamaki vs. Koja)</td>
        </tr>
        <tr>
          <td style="color: #888; padding: 6px 0;">Nov 23</td>
          <td style="color: #ccc; padding: 6px 0;">Shuri Castle Main Hall Reopening</td>
        </tr>
      </table>
    </div>

    <!-- Sources -->
    <div style="background: #111; border: 1px solid #1a1a1a; padding: 20px; margin-bottom: 24px;">
      <p style="color: #7c3aed; font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px; font-weight: 700;">Sources</p>
      <p style="color: #888; font-size: 11px; line-height: 1.8; margin: 0;">
        Stars and Stripes &bull; Japan Times &bull; Marine Corps Times &bull; USNI News &bull; Bloomberg &bull; Al Jazeera &bull; NPR &bull; DVIDSHUB &bull; Nippon.com &bull; Focus Taiwan &bull; CSIS &bull; The Diplomat &bull; Naval News &bull; Defense News &bull; Breaking Defense &bull; GlobalSecurity.org &bull; Asia Times &bull; Foreign Policy &bull; U.S. State Department &bull; Japan MOD &bull; CNN &bull; Newsweek &bull; Trading Economics &bull; Invezz
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
