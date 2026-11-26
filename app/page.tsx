const projects = [
  {title:'CyberSource E-Commerce & AFT Payment Gateway',type:'Payment Systems • Technical Lead',img:'/projects/cybersource-payment-gateway-cover.png',text:'Bank-side technical lead for a Visa/CyberSource e-commerce and AFT payment gateway implementation, covering requirements, environment readiness, configuration, testing/UAT, merchant onboarding, production support, fraud controls, settlement and reconciliation.',tags:'CyberSource • AFT • Visa • Decision Manager • VCX'},
  {title:'Jump AI → Salesforce Meeting Automation',type:'AI + CRM Automation',img:'/projects/jumpai-salesforce.png',text:'Built a Jump AI → Salesforce workflow using meeting recaps and transcripts to map relevant information, create user-specific Salesforce Tasks, assign them to the appropriate users, and update CRM records based on meeting outcomes.',tags:'Jump AI • Salesforce • AI • Meeting Recaps • Task Automation'},
  {title:'Financial Services Case Automation',type:'Salesforce + Zapier',img:'/projects/cognito-zapier-salesforce.jpg',text:'Automated financial request handling from Cognito Forms into Salesforce Cases, with field mapping, uploaded-file handling, Case creation and Salesforce Flow routing to the appropriate operational queue.',tags:'Cognito Forms • Zapier • Salesforce • Service Cloud'},
  {title:'Automated Salesforce Case Routing',type:'Salesforce Flow',img:'/projects/salesforce-case-routing.jpg',text:'Built record-triggered Flow logic to identify case type and route work to the appropriate operational queue.',tags:'Flow Builder • Case Management • Queues'},
  {title:'AI Invoice Data Extraction',type:'n8n + AI',img:'/projects/invoice-n8n.jpg',text:'Built an automation that receives invoice files, extracts structured information with AI, and prepares data for business-system registration.',tags:'n8n • AI • Invoice Processing • Data Extraction'},
  {title:'AI Marketing Content Automation',type:'n8n + AI Agent',img:'/projects/marketing-n8n.jpg',text:'Designed an end-to-end workflow that gathers web content, creates platform-specific posts with an AI agent, and supports controlled publishing.',tags:'n8n • AI Agents • Web Search • Social Automation'},
  {title:'FormAssembly → Salesforce',type:'CRM Integration',img:'/projects/formassembly-salesforce.jpg',text:'Configured a structured web form and Salesforce connector to capture, validate and register data in Salesforce.',tags:'FormAssembly • Salesforce • Web-to-Lead • Data Mapping'}
];

const services = [
  ['01','Salesforce','Administration, Flow automation, Case Management, security, reports and CRM data quality.'],
  ['02','AI & Automation','n8n, Zapier, AI workflows, APIs and webhooks that remove repetitive work.'],
  ['03','CRM Systems','Salesforce, SuiteCRM, HubSpot and practical CRM implementation and optimization.'],
  ['04','Systems Support','Technical troubleshooting, integrations, documentation and business-system operations.']
];

const stack=['Salesforce','Agentforce','n8n','Zapier','HubSpot','SuiteCRM','FormAssembly','Mautic','REST APIs','Webhooks','Google Workspace','Microsoft 365','Notion','Asana'];
const domains=['CyberSource e-commerce & AFT','Payment Switch implementation','Card payment applications','ATM & POS systems','Mobile wallet integration','Visa & Mastercard initiatives','Fraud & payment security','Settlement & reconciliation'];

export default function Home(){
  return <main>
    <nav className="navShell">
      <a className="brand" href="#top"><span>GB</span><i>.</i></a>
      <div className="links"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#achievements">Proof</a><a href="#contact">Contact</a></div>
      <a className="navcta" href="#contact">Let's talk <span>↗</span></a>
    </nav>

    <section id="top" className="hero modernSection">
      <div className="heroCopy">
        <div className="eyebrow"><span></span> AVAILABLE FOR SELECT PROJECTS</div>
        <h1>Systems that make<br/><em>work flow.</em></h1>
        <p className="heroLead">Salesforce, AI automation, CRM integrations, and payment technology — designed around the process, not the tool.</p>
        <div className="actions"><a className="btn primary" href="#work">Explore work <span>↗</span></a><a className="textLink" href="#contact">Start a conversation <span>↗</span></a></div>
        <div className="proof">
          <div><b>3×</b><small>Salesforce Certified</small></div>
          <div><b>100%</b><small>Upwork Job Success</small></div>
          <div><b>Top Rated+</b><small>Upwork</small></div>
        </div>
      </div>

      <div className="heroVisual">
        <div className="portraitFrame">
          <img src="/profile/geleta-portrait.jpg" alt="Geleta Bekele"/>
          <div className="portraitShade"></div>
          <div className="portraitLabel"><span>GELETA BEKELE</span><b>Salesforce · Automation · Payments</b></div>
          <div className="portraitBadge">AVAILABLE<br/><strong>UTC +3</strong></div>
        </div>
        <div className="systemCard">
          <small>THE CONNECTED SYSTEM</small>
          <div><span>Process</span><i>→</i><span>Automation</span><i>→</i><span>CRM</span></div>
          <div className="mutedLine"><span>Data</span><i>→</i><span>Integrations</span><i>→</i><span>Outcome</span></div>
        </div>
      </div>
    </section>

    <div className="marquee">SALESFORCE <i>·</i> AI AUTOMATION <i>·</i> CRM <i>·</i> INTEGRATIONS <i>·</i> DIGITAL PAYMENTS <i>·</i> n8n <i>·</i> ZAPIER</div>

    <section id="about" className="modernSection aboutSection">
      <div className="sectionKicker"><span>01</span><i></i><b>ABOUT</b></div>
      <div className="aboutGrid">
        <div><h2>Business systems,<br/><em>built around people.</em></h2></div>
        <div className="copy"><p>I work at the intersection of CRM administration, workflow automation, AI integrations, and digital payment technology.</p><p>My approach is simple: understand the process first, map the data and dependencies, then build a system that is reliable, maintainable, and practical for the people using it.</p><p>My banking background adds experience with production systems where accuracy, controls, documentation, security, and operational reliability are non-negotiable.</p></div>
      </div>
    </section>

    <section id="services" className="modernSection softSection">
      <div className="sectionKicker"><span>02</span><i></i><b>SERVICES</b></div>
      <div className="sectionTitleRow"><h2>What I can help you <em>build.</em></h2><p>Focused technical support for teams that need cleaner systems, less manual work, and better-connected workflows.</p></div>
      <div className="serviceGrid">{services.map(x=><article key={x[1]}><span className="serviceNo">{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p><a href="#contact">Discuss a project <span>↗</span></a></article>)}</div>
    </section>

    <section id="achievements" className="modernSection">
      <div className="sectionKicker"><span>03</span><i></i><b>PROOF</b></div>
      <div className="sectionTitleRow"><h2>Work that has <em>earned trust.</em></h2><p>Selected signals from freelance work and the systems I build.</p></div>
      <div className="achievementGrid">
        <a className="achievementCard" href="https://www.upwork.com/freelancers/~01d457dffbac8b323b" target="_blank" rel="noreferrer">
          <img src="/achievements/upwork-top-rated-plus.png" alt="Upwork profile showing 100% Job Success and Top Rated Plus"/>
          <div className="achievementCopy"><span>UPWORK</span><h3>Top Rated Plus</h3><p>100% Job Success · $10K+ earnings · 14 jobs · 317 hours</p><small>View profile ↗</small></div>
        </a>
        <div className="proofCard"><span>03 / 01</span><strong>Salesforce + AI + Automation</strong><p>3× Salesforce Certified with hands-on CRM automation, n8n, Zapier, API integrations and AI workflows for international clients.</p><div className="miniTags"><span>Salesforce</span><span>n8n</span><span>Zapier</span><span>AI</span></div></div>
      </div>
    </section>

    <section id="work" className="modernSection workSection">
      <div className="sectionKicker"><span>04</span><i></i><b>SELECTED WORK</b></div>
      <div className="sectionTitleRow"><h2>Real systems.<br/><em>Real workflows.</em></h2><p>Selected CRM, automation, AI and payment-system projects. Client-specific information is removed or anonymized where appropriate.</p></div>
      <div className="projects">{projects.map((p,i)=><article className="project" key={p.title}><div className="projectImage"><img src={p.img} alt={p.title}/><span>0{i+1}</span></div><div className="projectMeta"><span>{p.type}</span><span>↗</span></div><h3>{p.title}</h3><p>{p.text}</p><div className="tags"><span>{p.tags}</span></div></article>)}</div>
    </section>

    <section className="modernSection softSection">
      <div className="sectionKicker"><span>05</span><i></i><b>DOMAIN EXPERIENCE</b></div>
      <div className="domainGrid"><div><h2>Financial technology<br/><em>experience.</em></h2></div><div className="copy"><p>Alongside CRM and automation work, I have worked in a regulated banking environment supporting digital banking, card systems, payment switches, e-commerce gateways and payment operations.</p><div className="bankGrid">{domains.map(x=><span key={x}>{x}</span>)}</div></div></div>
    </section>

    <section className="modernSection">
      <div className="sectionKicker"><span>06</span><i></i><b>TOOLKIT</b></div>
      <div className="sectionTitleRow"><h2>The stack behind<br/><em>the work.</em></h2><p>Tools are selected around the problem, data flow, team capability, and long-term maintainability.</p></div>
      <div className="stack">{stack.map(x=><span key={x}>{x}</span>)}</div>
    </section>

    <section id="contact" className="modernSection contactSection">
      <div className="sectionKicker"><span>07</span><i></i><b>CONTACT</b></div>
      <div className="contactGrid"><div><h2>Have a system<br/><em>worth improving?</em></h2><p>Tell me what you're trying to automate, organize, integrate, or improve.</p><div className="actions"><a className="btn" href="https://www.linkedin.com/in/geleta-bt" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="btn" href="https://www.upwork.com/freelancers/~01d457dffbac8b323b" target="_blank" rel="noreferrer">Upwork ↗</a></div></div><form className="contactForm" action="https://formsubmit.co/gelobekele@gmail.com" method="POST"><input type="hidden" name="_subject" value="New portfolio inquiry — Geleta Bekele"/><input type="hidden" name="_template" value="table"/><input type="hidden" name="_captcha" value="false"/><input name="email" type="email" placeholder="Your email" required/><textarea name="message" rows={6} placeholder="Tell me what you'd like to build..." required></textarea><button className="btn primary" type="submit">Send message <span>↗</span></button></form></div>
    </section>

    <footer><span>© 2026 Geleta Bekele</span><span>Salesforce · AI Automation · Payment Systems</span></footer>
  </main>
}
