import Image from 'next/image'
import { albertusNova, inter } from '@/fonts'
import Logo from '@/components/Logo'
import Navbar from '@/components/Navbar'
import Sidebar, { SidebarCloseEvent } from '@/components/Sidebar'
import FloatingHeader from '@/components/FloatingHeader'
import RegisterModal from '@/components/RegisterModal'
import homepageContent from '@/cms/home'
import EventBus from '@/EventBus'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const data = `
  <p>HOW WE USE YOUR PERSONAL INFORMATION: THE PETALS STUDIO (Formerly as RIVEA WORLD PVT. LTD.) PRIVACY POLICY</p>
  <h2>SUMMARY</h2>
  <p>With this privacy policy (the &ldquo;Policy&rdquo;), we want to let you know how we at Petals Studio, established in India, with the address RZ 85, 1st floor, Street no. 10, Tughalkabad Ext., New Delhi - 110019 (herein "Petals Studio", "we" or "us") promise to take care of the personal information we collect from you. This includes the information you provide us with (for example, when opening a Petals Studio Account or subscribing to our newsletter), what we learn when having you on our site and when you are playing our games. This Policy explains which personal information we collect from you and for what reasons, how we use, store transfer such data but also how you can contact us to ask about your data and invoke your rights.</p>
  <p>We only collect, use, store and transfer ("process") your personal information in accordance with applicable data protection legislation, including but not limited to the (EU) General Data Protection Regulation (2016/679) ("GDPR") and applicable national data protection legislation (hereafter "applicable law").</p>
  <p>Depending on whether you are a website visitor, customer and/or a user of our Services, we will process personal information such as your contact details (email address, telephone number and postal address), your username, password(s) and payment details. We will also collect and use information about your technical equipment such as your hardware and software type and location data (to determine which age-rating to display as well which customer rights apply), and other information you provide us with, for example when you sign up for our surveys and contests. For more information about the personal information we collect, use and otherwise process, please see section 6 below.</p>
  <p>We will use your personal information for different purposes. We will for example use the data to provide you with the Service you have requested, to improve our games and other Services, to predict user trends, to make recommendations based on your usage, to process payments and customize our Services to you. For more information about how we use your data, please see section 7 below.</p>
  <p>We will engage other companies in order to fulfil our purposes and obligations as set out in this policy, and we will transfer your personal information to countries outside the EU and EEA that may not have as strict privacy legislation as where you live. We will only transfer your personal information to such countries if we are allowed to do so, please see section 8 for more information.</p>
  <p>When we collect personal information about you, you are entitled to the following rights under applicable law:</p>
  <ul>
    <li>the right to access and rectify your personal information;</li>
    <li>the right to object to our processing of personal information;</li>
    <li>the right to restrict to our processing of personal information;</li>
    <li>the right to demand us to delete your personal information; and</li>
    <li>the right to data portability.</li>
  </ul>
  <p>For more information about the rights you have in relation to your personal information, please see sections 14- 20 below. If you have any concerns as to how we use your personal information, we would kindly ask you to contact us first. However, you can always lodge a complaint with a relevant authority, specifically where you live, work or where you believe an infringement of you rights has occurred. Please see section 22 for further information.</p>
  <p>If you have any questions about the personal information we collect, how we use your data and how we transfer your data to fulfil our purposes as stated herein, please mail us on contact@petals.studio; Petals Studio.</p>
  <h2>CONTENT</h2>
  <ol>
    <li>Who we are</li>
    <li>What we promise</li>
    <li>What is personal information?</li>
    <li>Reasons for processing of your data</li>
    <li>When do we collect your data?</li>
    <li>What data do we collect?</li>
    <li>How do we use your data?</li>
    <li>Who do we share your information with?</li>
    <li>Can children use our services?</li>
    <li>How do we use cookies and tracking technologies?</li>
    <li>Security measures to protect your data</li>
    <li>If you choose not to share your data with us</li>
    <li>How long will we keep your data?</li>
    <li>Accessing, changing and updating your data</li>
    <li>Right to object to the processing of your data</li>
    <li>Right to erasure</li>
    <li>Right to restriction</li>
    <li>How to get a copy of your data or receive a copy of your data</li>
    <li>How to enforce your rights</li>
    <li>How to withdraw your consent or close down your Account</li>
    <li>Changes in the privacy policy</li>
    <li>How to contact us and how to complain</li>
    <li>Other useful information</li>
  </ol>
  <h2>1. WHO WE ARE</h2>
  <p>We are Petals Studio. This Policy applies to websites/Apps operated by us. If you have any questions or want to know more about how we use your personal information, please contact us on our Support email - support@petals.studio.</p>
  <h2>2. WHAT WE PROMISE</h2>
  <p>We promise to keep your data safe and to not to sell your data to third parties. We promise to give you the right to access and delete your data, and to provide you with ways to manage and review your marketing choices as well as any other information (such as for example newsletters) you get from us. Please see sections 14 - 22 for more information.</p>
  <h2>3. WHAT IS PERSONAL INFORMATION?</h2>
  <p>Personal information can be any information relating to an identified or identifiable natural person. In other words, it can be any information that could allow us to identify you both directly and indirectly (like for example your name, email address, IP address, or your billing address). In this Policy, we will use the word &ldquo;data&rdquo; to refer to personal information.</p>
  <h2>4. LEGAL GROUNDS FOR PROCESSING OF YOUR DATA</h2>
  <p>We will only use and process data about you if we have one of the following reason to do so:</p>
  <ul>
    <li>to fulfil a contract we have with you (for example, when you have downloaded and registered on our game app);</li>
    <li>when it is our legal duty (for example, to identify your age and make sure we are not collecting data from young children, for book keeping purposes and to fulfil our obligations in relation to authorities);</li>
    <li>when you consent to it (for example, when subscribing to our newsletter); or</li>
    <li>when it is in our legitimate interest (for example, to enforce our policies, manage our everyday business, to perform statistical analysis on anonymized and/or aggregated data, for direct marketing purposes, to ensure information security, to prevent fraud or to transfer the data to different part of the organisation when necessary). When we rely on a legitimate interest we have concluded that our interest is not overridden by your interests or fundamental rights and freedoms. You are welcome to contact us to learn more about how we have reached this conclusion.</li>
  </ul>
  <h2>5. WHEN DO WE COLLECT YOUR DATA?</h2>
  <p>We will collect data about you when you use our Services, including in the following situations:</p>
  <ul>
    <li>When you subscribe to our newsletters</li>
    <li>When you play our games</li>
    <li>When you register on and use our forums</li>
    <li>When you contact us or our support services, via emails or letters</li>
    <li>When you use our websites or games</li>
    <li>In customer surveys</li>
    <li>If you participate in user research initiatives</li>
    <li>If you participate in a playtest or prelease test such as alpha/beta/etc. test releases</li>
    <li>If you take part in our competitions or promotionsWhen you enrol in, or participate in, one of our events</li>
    <li>When you send us a game pitch</li>
    <li>When you subscribe to receive our press releases</li>
    <li>you log in to our Services using third party account</li>
    <li>When you work for Petals Studio. In such case, please contact our Human Resources department separately for more information.</li>
  </ul>
  <h2>6. WHAT DATA DO WE COLLECT?</h2>
  <p>We use data that you have explicitly provided to us in different situations. We also use personal information that is generated by your device or when you use our Services. These categories are further explained below. Data that you explicitly provide us with:</p>
  <ul>
    <li>email address</li>
    <li>username</li>
    <li>country of residence</li>
    <li>age or date of birth</li>
    <li>name</li>
    <li>password(s) created to access parts of the Services</li>
    <li>nicknames on forums and in games</li>
  </ul>
  <p>The above information may be provided to us when you open any game created by Petals Studio, or when you subscribe to our press releases or newsletters. In addition to the above, and when purchasing a game or enrolling in an event, you may have to provide us with the following data:</p>
  <ul>
    <li>physical address</li>
    <li>telephone number</li>
    <li>card information payment account details</li>
    <li>PayPal account information</li>
    <li>name and contact information for a business or organization</li>
  </ul>
  <p>Finally, any other data you actively provide us with when:</p>
  <ul>
    <li>you contact support or seek help from Petals Studio</li>
    <li>you fill in our surveys or join our playtests</li>
    <li>you enter a contest. If you win, we might need additional information about you depending on the specific contest. We will, however, only collect such information with your consent</li>
    <li>you apply for a job at Petals Studio and provide information relevant to the application. For more information on how we use personal information in that respect, please refer to the privacy policy available on our job applications website.</li>
  </ul>
  <p>Data we collect when you use our Services or games:</p>
  <ul>
    <li>Profile and usage data. This includes the profile you create to identify yourself when you connect to our Services and internet protocol (IP) address and cookies that may uniquely identify your browser. It also includes other data about how you use our Services and games. We gather this data from devices you use to connect to those Services, such as computers and mobile phones, using cookies and other internet tracking software.</li>
    <li>Payment and transaction data</li>
    <li>Location data</li>
    <li>Platform type, such as distribution platform or hardware platform</li>
    <li>Preferred language</li>
    <li>Gender</li>
    <li>Information about your device, hardware and software</li>
    <li>Referral pages and page exit time</li>
    <li>Game platform ID</li>
    <li>In-game activity including but not limited to what games you play, own, how you play, how often and for how long</li>
    <li>Game crash report(s) and error dump information from your device</li>
    <li>Activity carried out within our app, including install, uninstall, and update event information</li>
    <li>Multiplayer sessions, when these sessions were played and which players were in them</li>
    <li>Friend relations added to the Friends List in chat systems in games.</li>
  </ul>
  <p>We will always ask for your consent to give us details on your location data. You have a right to withdraw your consent at any time as described under section 20 below.</p>
  <p>Data from third parties we work with: We may receive data about you from third parties or partners, like for example Facebook. We may collect Personal Information about you from such account, including your game library.</p>
  <p>We may also receive information from third parties (such as game distributors) to add to the information we receive from you. This is used to help us deliver relevant advertising to you, to prevent fraud and/or abuse, and to collect your geolocation for taxation purposes.</p>
  <p>If you own any of our games on a game platform and have posted reviews about the game on such game platform, we may also collect such reviews, including your game platform ID, and add it to the information we receive from you or already have. This is done to better analyze who is our customer and what you as a customer want from our games.</p>
  <h2>7. WHY DO WE PROCESS YOUR DATA?</h2>
  <p>We process your data for the following purposes:</p>
  <ul>
    <li>To operate, improve, develop and provide you with our games, apps and Services</li>
    <li>To provide you with recommendations and game offers that you may like</li>
    <li>To respond to inquiries or comments from you</li>
    <li>To verify your identity in order to prevent unauthorized access</li>
    <li>To provide you with software updates</li>
    <li>To understand trends in usage of our Services</li>
    <li>To calculate marketing conversion rates and other elements of advertising performance</li>
    <li>To help tracking and correcting errors and bugs in games and services</li>
    <li>To customize your user experience (for example, by giving you more relevant ads and inform you about game releases that you might be interested in, unless you have told us not to (opt-out))</li>
    <li>To maintain the integrity and security of the Services</li>
    <li>To process transactions and communicate with you regarding these transactions</li>
    <li>To maintain or administer your game account, including contacting you in order to update your game profile details if necessary</li>
    <li>To administer and perform play- and beta tests which you have signed up for</li>
    <li>To create reports, analyses or similar for the purpose of research and business intelligence and be able to track potential problems, behaviour and trends</li>
    <li>To enforce our terms and conditions, such as our EULA, Terms of Use, Rules of Conduct and this Policy</li>
    <li>To send you newsletters and promotional notices and offers (jointly &ldquo;Newsletters&rdquo;) you have previously agreed to when either creating a Petals account or buying any of our Games (please note that if you create an account within our Game or purchase any of our Games you will automatically receive Newsletters unless you click to unsubscribe when creating the account or in any subsequent Newsletter)</li>
    <li>To communicate with you who is our partner&rsquo;s contact person (i.e. an employee at our partner) regarding business matters</li>
    <li>To keep our Services fair, investigate and prevent fraud and illegal behaviour</li>
    <li>To comply with applicable laws and regulations.</li>
  </ul>
  <p>We will not use your data for any other purpose than the purpose for which the data is originally collected.</p>
  <p>Special information about marketing: We use your data to inform you about relevant products and offers, e.g. provide you with targeted marketing. The data we collect in such cases contain information that you wilfully provide us with, the data we collect when you use our Services or from third parties we work with. We analyse this data to form a view on what we think you might want or need or what may be of interest to you. You can at any time object to our use of your personal information for marketing purposes, including any profiling for such purposes, and we will then stop using your personal information for such purposes. Please see section 22 for our contact details.</p>
  <h2>8. WHO DO WE SHARE YOUR INFORMATION WITH?</h2>
  <p>To be able to provide you with the Services and the best possible experience, we will share your data with other companies and organisations. We will only do so if our partners can provide the same level of security to keep your data safe as implemented by us and if our partners can ensure that they comply with applicable laws and privacy regulations. We may share your information with the following partners:</p>
  <ul>
    <li>Developers that develop our games</li>
    <li>Market Research Agencies</li>
    <li>Game distribution platforms</li>
    <li>Co-publishing partners</li>
    <li>Payment providers</li>
    <li>Companies and external consultants that help support our platform and services</li>
    <li>Advertising partners and attribution platforms to help us understand the effectiveness of our marketing campaigns</li>
    <li>Marketing services partnerss</li>
  </ul>
  <p> Please note that our games or products may be advertised in other applications. If you click on one of these advertisements and install our game, you will become a user of our Services. To prevent fraud and verify the installation of the game, we may share your IDFA (iOS) and/or Advertiser ID (Android) with the relevant advertiser. For Services using the Unity Engine, such as for example our game Cities: Skylines, Unity is our service provider. Unity may collect certain data in relation to your use of such Services. You can find their privacy policy on their websites under&nbsp;<a href="https://unity3d.com/legal/privacy-policy">https://unity3d.com/legal/privacy-policy</a>&nbsp;and&nbsp;<a href="https://www.epicgames.com/site/en-US/privacypolicy">https://www.epicgames.com/site/en-US/privacypolicy</a>. We may release your data when we are required to by a court order, according to law or in the event of a bankruptcy or other similar unfortunate event. We may also share and may acquire your data with future subsidiaries or companies if we choose to sell, transfer or merge parts of our business. We will, however, only transfer the data if we must and if these companies comply with applicable privacy regulations and can guarantee that your data will be kept safe.</p>
  <h2>9. CAN CHILDREN USE OUR SERVICES?</h2>
  <p> There is no age barier for using our Website/game apps</p>
  <h2>10. HOW DO WE USE COOKIES AND TRACKING TECHNOLOGIES?</h2>
  <p>We use cookies (sadly not the edible ones) and so-called pixel tags to collect information about visitors on our websites. Pixel tags are invisible tags placed on certain pages of our websites, but unlike cookies, not saved on your computer. A pixel tag triggers a cookie when you visit a website. A cookie is a small piece of data sent from the website to your web browser and may be stored on your computer's hard drive. Cookies allow us to recognize your computer while you are on the website and help customize your online experience and make it more convenient for you. Cookies are also useful in allowing more efficient log-in for users, tracking transaction histories, and preserving information between sessions. The information collected from cookies may also be used to improve the functionality of the website and to measure traffic patterns. Example of improved experience: If you visit our forum, you will not be asked for your password every time you visit, but rather every now and then, or when you clear your cookies manually.</p>
  <p>There are two main kinds of cookies: session cookies and persistent cookies. Session cookies are deleted from your computer when you close your browser, whereas persistent cookies remain stored on your computer until deleted, or until they reach their expiry date. You are entitled to choose whether or not you would like to use cookies. If you do not approve to the use of cookies, please be sure to opt out, as in block or disable them using your browser settings as described below or the opt-out link provided to you on your first visit to the website.</p>
  <p>Petals Studio will use the following cookies on our websites, for the following purposes:</p>
  <p>a) Strictly Necessary Cookies: These cookies are necessary for the website to function. They are usually set in response to actions made by you which amount to a request for services, such as logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the website might then not work. These cookies do not store any Personal Information;</p>
  <p>b) Performance Cookies: These cookies allow us to count visits and traffic sources in order to measure and improve the performance of the website. These cookies help us to know which pages are the most and least popular and how visitors move around the website. All information these cookies collect is aggregated and therefore anonymous. You can set your browser to block or alert you about these cookies, as explained hereunder. If you do so, we will not know when you have visited our website, and will not be able to monitor its performance;</p>
  <p>c) Functionality Cookies: These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services have been added to the website. If you do not allow these cookies, some or all of these services may not function properly;</p>
  <p>d) Targeting Cookies: Advertisers and/or other content providers that may appear on our website may also use cookies that are not sent by us. Such advertisements or content may use cookies to help track and target the interests of users of the website in order to present customized and personalized advertisements or other messages that the user might find interesting. These cookies uniquely identify your browser and Internet device. Such cookies may even impact your experience of other websites you may visit subsequently. If you do not allow these cookies, you will experience less targeted advertising. Petals Studio is not responsible for any of our advertisers' or content providers' cookies and we will always require your active consent for our own targeting cookies.</p>
  <p>Please note that most web browser applications (such as Microsoft Edge, Mozilla Firefox and Google Chrome) have features that can notify you when you receive a cookie or prevent cookies from being sent. In Microsoft Edge, you can refuse all cookies by clicking "Tools", "Internet Options", "Privacy", and selecting "Block all cookies" using the sliding selector. In Firefox, you can adjust your cookies by clicking "Tools", "Options" and "Privacy". In Google Chrome, you can also adjust your cookies by clicking on "Settings", "Show advanced settings", "Content settings" and on the "Privacy" section. If you disable cookies, however, you may not be able to use certain personalized functions of the website.</p>
  <h2>11. SECURITY MEASURES TO PROTECT YOUR DATA</h2>
  <p>We maintain physical, electronic and procedural safeguards to help guard your data in compliance with applicable privacy regulations. If transactions are offered on the Services, transaction information is transmitted to and from the Service in encrypted form using industry-standard Transport Layer Security (TLS used to be known as SSL) connections to help protect such information from interception. We strictly restrict authorized access to your data only to those persons who have a legitimate purpose to access it. We also have security measures in place to protect the loss, misuse and alteration of the data we process. We encourage you to be careful when sharing your data with other users when you use our Services like forums or chats. Petals Studio will NEVER ask for your password to be sent separately or in clear text. Anyone doing so is probably trying to steal your stuff.</p>
  <h2>12. IF YOU CHOOSE NOT TO SHARE YOUR DATA WITH US</h2>
  <p>We may need to collect data to be able to fulfil our legal obligations or fulfil the terms of a contract we have with you or to be able to even present you with the Services. If you choose not to give us this data, it may prevent us from meeting our obligations. It may also mean that we cannot perform the Services needed to run your Petals game Accounts or policies. It may also mean that we have to cancel a product or Service you have with us or that you will even be unable to play certain parts of our game such as multiplayer. Any data collection that is optional will be clearly indicated as such at the point of collection.</p>
  <h2>13. HOW LONG WILL WE KEEP YOUR DATA?</h2>
  <p>We will keep your information for as long as you are a player or customer of Petals Studio. We may keep your information for longer for research or statistical purposes. If we do, we will make sure your information is anonymised and non-traceable to you as a person. We will also keep it for longer if we cannot delete it for legal or regulatory reasons. We will however delete all data that is no longer necessary after a reasonable period. For example, any inactive Petals Studio Account will after a period of two (2) years be deleted unless they contained games or other products you have purchased as we assume you would rather not have them deleted.</p>
  <p>We will also delete data upon request. For more information, please read section 18 of this Policy &ldquo;HOW TO GET A COPY OF YOUR DATA&rdquo;.</p>
  <h2>14. ACCESSING, CHANGING AND UPDATING YOUR DATA</h2>
  <p>When you use our Services, we strive to provide you with ways to quickly update or delete data that you have actively provided. You have the right to access the data relating to you. This includes the right to be informed whether or not data about you is being processed, what data about you is being processed, and the purpose of the processing. You also have a right, upon your request, to access information about any evaluation or assessment of the balancing test we are required to conduct when we process your data based on our legitimate interest. Furthermore, you have the right to rectify or add data if the personal information is inaccurate or incomplete. As soon as we become aware of any inaccurate personal information being processed, we will always rectify your data without undue delay and notify you accordingly. If you have created a Petals account, you can access, change and delete some of the data provided on your profile by logging in to your Petals Account.</p>
  <h2>15. RIGHT TO OBJECT TO THE PROCESSING OF YOUR DATA</h2>
  <p>You are also entitled to object to the processing of your data on grounds related to your particular situation. Please note however, that we must still process some personal information about you to provide the Services to you. This means that you cannot object to all our use of personal information and still require us to provide Services to you.<br />You may unsubscribe to newsletters you have previously opted-in to, by following the instructions in the newsletter you receive (please see further information below).</p>
  <h2>16. RIGHT TO ERASURE</h2>
  <p>You are entitled to request that we erase data related to you. We will erase your data upon request provided that it is no longer necessary for the purpose we collected it for (for example you cannot require all personal information about you to be erased and still receive Services from us), and that we have no legal obligation to store personal information.</p>
  <h2>17. RIGHT TO RESTRICTION</h2>
  <p>You are entitled to require us to restrict our processing of your personal information if you contest the accuracy of the data, if the processing is unlawful but you do still not want us to erase the data, if the data is no longer needed to fulfil the purpose it was collected for or you have informed us that you do not consider us to have a legitimate interest for certain processing.</p>
  <h2>18. HOW TO GET A COPY OF YOUR DATA OR RECEIVE A COPY OF YOUR DATA</h2>
  <p>You can access a copy of your data by mailing us on our support email at any time at support@petals.studio. If you request access to personal information about you that you yourself have provided and (i) if the personal information is being processed automatically and (ii) in accordance with a contract between you and Petals Studio or based on your consent, you may request that the data is provided in a structured, commonly used and machine-readable format and you may also request that the personal information is transmitted to another controller, if this is technically feasible.</p>
  <h2>19. HOW TO ENFORCE YOUR RIGHTS</h2>
  <p>You can mail our Support department at support@petals.studio any time to get a list of all the data we have collected from you or to get such data deleted or invoke your other rights as explained above. We will do our bests to answer your request in a timely manner but please note that it may take a couple of days. Thank you for your patience and understanding. Please note that if we cannot identify and guarantee who you are, we might ask you to provide us with additional information. Please note that we will not delete any data if we are unable to verify that you are their rightful owner. We will however always use our best effort to help you out.</p>
  <h2>20. HOW TO WITHDRAW YOUR CONSENT OR DELETE YOUR ACCOUNT</h2>
  <p>You can withdraw your consent to cookies on our website at any time by writing us on support email. Please note that such withdrawal may mean that you will no longer have access to all the functions offered by our website as explained in the HOW DO WE USE COOKIES AND TRACKING TECHNOLOGIES? section of this Policy. You can do so by logging in on your Petals account. After logging in, please contact our Support department. However, if you delete your account we will no longer be able to provide you with certain products or Services if you do so and your game experience will be impacted. You will also lose all of your achievements by closing down your Petals Account and also lose any in-game currencies, virtual items, forum icons, access to games, any game progress data stored on your account and any other contents stored on your Petals Account</p>
  <p>You can unsubscribe to newsletters at any times by clicking unsubscribe from the newsletter footer you receive. Our newsletters contain mechanisms which allow you to opt-out from receiving further newsletters from us.</p>
  <h2>21. CHANGES IN THE PRIVACY POLICY</h2>
  <p>This Policy may change from time to time. Any changes to this Policy will be posted on this page and on our website, and if the changes are significant, we will provide you with a more noticeable notice, like for example by email or with a pop-up in our games. If you are asked to accept material changes to this Policy and decline to do so, you might not be able to continue using the Services with all functionality preserved.</p>
  <h2>22. HOW TO CONTACT US AND HOW TO COMPLAIN</h2>
  <p>Please let us know if you are not happy with the way we use and process your data by contacting our Support department. We will also appreciate to get feedback from you if you think that this Policy or any part of it is unclear.</p>
  <p>You always have the right to lodge a complaint with the relevant authority in particular where you live, work or where an alleged infringement of the GDPR has occurred.</p>
  `;

  return (
    <main className="w-full flex min-h-screen flex-col items-center bg-black text-white" onClick={() => { EventBus.getInstance().fireEvent(SidebarCloseEvent); }}>
      <Navbar noItems noFixed noMenu />
      <div className="relative py-8 tablet:py-12 w-full">
        <div className="w-full max-w-8xl mx-auto flex flex-col px-2.5 tablet:pl-5 tablet:pr-12">
          <h1 className={`${inter.variable} font-inter tablet:text-lg font-bold tracking-wide mb-4`}>PRIVACY POLICY</h1>
          <div className={`${inter.variable} font-inter dangerous-content`} dangerouslySetInnerHTML={{__html: data}}></div>
        </div>
      </div>
    </main>
  )
}
