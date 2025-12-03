import React, { useState } from 'react';

const highlightedBuilds = [
  {
    title: 'AI Capabilities Showcase App (Power Apps + Copilot Studio)',
    description:
      'Co-developed an AI capabilities application to demonstrate and operationalize Copilot-powered automation use cases for business teams across the organization.',
    bullets: [
      'Email parsing to extract key details and auto-populate request forms.',
      'Audit schedule optimization based on roles, location, and availability.',
      'Workload forecasting from historical trends.',
      'Text extraction to capture handwritten or photographed notes to OneNote.',
      'Request triage with routing, priority, and request type suggestions.',
      'Knowledge "Ask a Source" agent to query internal documentation in-app.',
    ],
  },
  {
    title: 'Admin Request Portal (Power Apps + Power Automate + SharePoint)',
    description:
      'Designed and deployed a Power Apps Canvas request management system for the Professional Administrators team, supporting 11 distinct request types and handling 600+ requests annually.',
    bullets: [
      'Power Automate workflows manage routing, status updates, and overdue reminders.',
      'Optimized app performance with Concurrent(), on-demand data loading, and column pruning.',
      'Implemented a shared master reference list for consistent data display while keeping individual sources per form to simplify reporting.',
    ],
  },
  {
    title: 'Linkster (Power Apps + SharePoint)',
    description:
      'Centralized link management app adopted department-wide with 80,000+ launches, enabling structured access to frequently used resources.',
    bullets: [
      'Primary app for onboarding, cross-team collaboration, and vendor access.',
      'Especially valuable for teams on virtual machines without bookmarking, ensuring reliable resource access.',
    ],
  },
  {
    title: 'MedDRA Version Updates Automation (Power Automate + Excel Online + Office Scripts)',
    description:
      'Developed a Power Automate flow leveraging Excel Online scripts to evaluate 200+ SMQ files and auto-generate structured outputs for MedDRA updates.',
    bullets: [
      'Delivered a 160x speed increase (40 hours down to 15 minutes).',
      'Improved data consistency across pharmacovigilance operations.',
    ],
  },
];

export function Resume() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = highlightedBuilds.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="page resume-page">
      <section className="resume-hero">
        <div className="resume-hero-content">
          <p className="eyebrow">Resume</p>
          <h1>Power Platform engineer automating request workflows.</h1>
          <p className="lede">
            Power Platform engineer focused on automating request workflows and scaling operational analytics.
            Built enterprise solutions in Power Apps and Power Automate with 90k+ internal launches and $1.2M+ in
            measured cost savings. Skilled in translating team needs into simple, automated processes supported by
            Power BI insights, working as part of an internal consulting team that partners directly with business
            stakeholders. Currently exploring Copilot and Copilot Studio with our Power Platform CoE team to
            accelerate workflow design and guided task automation.
          </p>
          <div className="chip-row">
            <span className="chip">Power Automate</span>
            <span className="chip">Power Apps</span>
            <span className="chip">Power BI</span>
            <span className="chip">Copilot Studio</span>
            <span className="chip">Process automation</span>
          </div>
        </div>
        <div className="resume-hero-grid">
          <div className="resume-hero-card">
            <p className="label">Role</p>
            <h3>Specialist, Business Solutions</h3>
            <p>Global Knowledge Management & Digital Collaboration · AbbVie</p>
          </div>
          <div className="resume-hero-card">
            <p className="label">Location</p>
            <h3>North Chicago, IL</h3>
            <p>Working closely with business stakeholders as part of an internal consulting team.</p>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Summary</p>
            <h2>Impact snapshot</h2>
            <p>
              Automating intake workflows, streamlining analytics, and accelerating AI adoption through Copilot-powered
              experiences.
            </p>
          </div>
        </div>
        <div className="resume-grid three-col">
          <div className="resume-card">
            <h3>Automation & AI</h3>
            <ul>
              <li>Power Automate, Copilot (M365/Copilot Studio), prompt design.</li>
            </ul>
          </div>
          <div className="resume-card">
            <h3>Power Platform</h3>
            <ul>
              <li>Power Apps (canvas primarily, experimented with model-driven), Power BI (DAX, data modeling).</li>
              <li>SharePoint integration for data and workflow orchestration.</li>
            </ul>
          </div>
          <div className="resume-card">
            <h3>Data & Backend</h3>
            <ul>
              <li>SQL, Python, Java, C++, C#.</li>
            </ul>
          </div>
          <div className="resume-card">
            <h3>Collaboration & Delivery</h3>
            <ul>
              <li>Stakeholder communication, requirements discovery, solution walkthroughs.</li>
              <li>Training & enablement, cross-team alignment, workflow clarification.</li>
              <li>Scrum/Kanban, requirements to MVP to iteration; Waterfall.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Work Experience</p>
            <h2>Recent roles</h2>
            <p>Partnering with safety, admin, and cross-functional teams to build reliable automation.</p>
          </div>
        </div>
        <div className="resume-timeline">
          <div className="resume-card">
            <div className="resume-card-head">
              <div>
                <p className="label">08/2024 – Present</p>
                <h3>AbbVie · Specialist, Business Solutions</h3>
                <p className="muted">Global Knowledge Management & Digital Collaboration — North Chicago, IL</p>
              </div>
            </div>
            <ul>
              <li>
                Built an AI Capabilities App to demonstrate Copilot-powered automation scenarios (email parsing, request
                triage, audit scheduling, forecasting, and knowledge lookup), accelerating AI adoption across multiple
                business teams.
              </li>
              <li>
                Designed and deployed a Power Apps Canvas request management system for the Professional Administrators
                team, supporting 11 distinct form types and orchestrating Power Automate flows for routing and reminders.
              </li>
              <li>
                Developed a Power BI performance dashboard to provide administrative leads visibility into assignment time,
                completion cycle time, and workload distribution across team members.
              </li>
              <li>
                Automated a previously 40+ hour manual workflow with a Power Automate process that evaluates 200+ Excel
                files via Excel Online scripts, reducing processing to ~15 minutes end-to-end.
              </li>
              <li>
                Built Power BI dashboards for global safety and cross-functional teams to track vendor timeliness, cost
                savings, and throughput for strategic decision-making.
              </li>
            </ul>
          </div>

          <div className="resume-card">
            <div className="resume-card-head">
              <div>
                <p className="label">05/2023 – 08/2023</p>
                <h3>AbbVie · Intern, Data Management</h3>
                <p className="muted">North Chicago, IL</p>
              </div>
            </div>
            <ul>
              <li>
                Partnered with three cross-functional teams to define requirements for a redesigned request intake system;
                clarified scope and negotiated trade-offs based on platform constraints and timeline.
              </li>
              <li>
                Built a multi-team request workflow using Power Apps + Power Automate, incorporating conditional form logic
                and automated status notifications to reduce manual follow-up.
              </li>
              <li>
                Developed a Power BI workload dashboard visualizing request volume, assignment pace, cycle times, and
                overdue tasks to support resource balancing and SLA monitoring.
              </li>
            </ul>
          </div>

          <div className="resume-card">
            <div className="resume-card-head">
              <div>
                <p className="label">05/2022 – 05/2023</p>
                <h3>AbbVie · Intern/Contractor, Business Solutions (Agility Squad)</h3>
                <p className="muted">North Chicago, IL</p>
              </div>
            </div>
            <ul>
              <li>
                Mentored a cohort of five interns, facilitating weekly check-ins and serving as a liaison between interns and
                program leadership to improve onboarding and workflow clarity.
              </li>
              <li>
                Gathered requirements, scoped timelines, and led development of Power Apps solutions including the PV
                Enquiry Tool and PPS Expert Finder, enabling faster routing of requests and smarter SME discovery.
              </li>
              <li>
                Applied internal frameworks to standardize delivery practices and authored reusable project documentation
                to support repeatable development.
              </li>
              <li>
                Strengthened communication and presentation skills through research briefs and solution walkthroughs while
                balancing full-time academic workload.
              </li>
            </ul>
          </div>

          <div className="resume-card">
            <div className="resume-card-head">
              <div>
                <p className="label">05/2021 – 05/2022</p>
                <h3>AbbVie · Intern/Contractor, Business Solutions (Agility Squad)</h3>
                <p className="muted">North Chicago, IL</p>
              </div>
            </div>
            <ul>
              <li>
                Converted “Linkster” from desktop to Power Apps, enabling easy access to knowledge resources with 80,000+
                internal launches.
              </li>
              <li>
                Conducted research for the SVP of Pharmacovigilance and Patient Safety exploring mixed-reality collaboration
                approaches during hybrid work adoption.
              </li>
              <li>
                Developed multiple Power Apps to streamline tasks, including global safety contact lookup and data
                consolidation utilities.
              </li>
              <li>
                Created Power BI dashboards for International PV Excellence to track inquiry SLAs and guide operational
                follow-ups while managing 10–20 hours/week alongside full-time coursework.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Highlighted builds</h2>
            <p>Operational apps and automation that improved throughput, transparency, and AI adoption.</p>
          </div>
        </div>
        <div className="carousel-shell" aria-label="Highlighted builds carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {highlightedBuilds.map((build, index) => (
              <article
                className="resume-card carousel-slide"
                key={build.title}
                aria-hidden={activeIndex !== index}
              >
                <div className="carousel-meta">
                  <span className="label">Project {index + 1} of {totalSlides}</span>
                </div>
                <h3>{build.title}</h3>
                <p>{build.description}</p>
                <ul>
                  {build.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-button"
              onClick={handlePrev}
              aria-label="View previous highlighted build"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <div className="carousel-dots" role="tablist" aria-label="Select highlighted build">
              {highlightedBuilds.map((build, index) => (
                <button
                  key={build.title}
                  type="button"
                  className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => handleDotSelect(index)}
                  aria-label={`Jump to highlighted build ${index + 1}`}
                  aria-pressed={activeIndex === index}
                />
              ))}
            </div>
            <button
              type="button"
              className="carousel-button"
              onClick={handleNext}
              aria-label="View next highlighted build"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Education</p>
            <h2>Foundations</h2>
          </div>
        </div>
        <div className="resume-grid two-col">
          <div className="resume-card">
            <p className="label">08/2020 – 05/2024</p>
            <h3>University of Wisconsin–Madison</h3>
            <p className="muted">B.S. Computer Science · Madison, WI · Dean’s List</p>
          </div>
        </div>
      </section>
    </div>
  );
}
