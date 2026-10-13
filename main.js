// AvijatLabs Static Responsive Website Engine

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggleBtn = document.getElementById('mobileToggleBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-btn');

  if (mobileToggleBtn && mobileMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      const isExpanded = mobileMenu.classList.toggle('active');
      mobileToggleBtn.setAttribute('aria-expanded', isExpanded);
      const icon = mobileToggleBtn.querySelector('svg');
      if (icon) {
        if (isExpanded) {
          icon.innerHTML = '<path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
        } else {
          icon.innerHTML = '<path d="M4 12h16M4 6h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
        }
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const icon = mobileToggleBtn.querySelector('svg');
        if (icon) {
          icon.innerHTML = '<path d="M4 12h16M4 6h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
        }
      });
    });
  }

  // 2. Visual Workflow Latency Pipeline
  const workflowData = [
    {
      time: '0.0s',
      title: 'Meta / Google Ads Ingestion',
      summary: 'Prospect clicks targeted ad campaign or organic funnel. Instant webhook triggered.',
      data: '{ utm_source: "google_pmax", intent: "high_ticket_villa", device: "mobile" }',
      metric: 'Instant Webhook Capture'
    },
    {
      time: '0.2s',
      title: 'High-Converting Minimal Form',
      summary: 'Brutalist page loads instantly (<600ms). Customer enters phone number & requirement.',
      data: '{ phone: "+91 98765 43210", inquiry: "3BHK Villa Malviya Nagar", city: "Jaipur" }',
      metric: '99.4% Form Completion'
    },
    {
      time: '1.1s',
      title: 'Sub-Second Intent Verification',
      summary: 'Autonomous AI engine parses budget, timeline, and seriousness based on historical deals.',
      data: '{ intent_score: 94, budget: "1.5 Cr+", urgency: "within_30_days", verified: true }',
      metric: 'AI Accuracy: 97.8%'
    },
    {
      time: '1.8s',
      title: 'Bidirectional Pipeline Sync',
      summary: 'Lead auto-created in CRM with tags. Sales channel gets instant notification with transcript.',
      data: '{ deal_stage: "hot_lead", assigned_to: "Rahul Sharma", crm_id: "AVL-9281" }',
      metric: 'Zero Manual Entry'
    },
    {
      time: '2.5s',
      title: 'Sub-5s WhatsApp Follow-Up',
      summary: 'Personalized WhatsApp message dispatched with customized floor plans or schedule link.',
      data: '{ status: "delivered_read", message: "Hi Rohan! Here is the Jaipur Villa brochure..." }',
      metric: 'Response in < 3 Sec'
    },
    {
      time: '4.2s',
      title: 'Qualified Meeting Booked',
      summary: 'Prospect picks a slot directly in chat. Closer receives meeting reminder + lead brief.',
      data: '{ calendar_event: "Site Visit Confirmed - Sat 11:30 AM", deal_value: "1.75 Cr" }',
      metric: '+68% Show-up Rate'
    }
  ];

  const workflowButtons = document.querySelectorAll('.workflow-step-btn');
  const wfTitle = document.getElementById('wfTitle');
  const wfSummary = document.getElementById('wfSummary');
  const wfPayload = document.getElementById('wfPayload');
  const wfMetric = document.getElementById('wfMetric');
  const wfTime = document.getElementById('wfTime');
  const wfSimulateBtn = document.getElementById('wfSimulateBtn');

  function setWorkflowStep(index) {
    workflowButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
    const step = workflowData[index];
    if (step) {
      if (wfTitle) wfTitle.textContent = step.title;
      if (wfSummary) wfSummary.textContent = step.summary;
      if (wfPayload) wfPayload.textContent = step.data;
      if (wfMetric) wfMetric.textContent = step.metric;
      if (wfTime) wfTime.textContent = step.time;
    }
  }

  workflowButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => setWorkflowStep(idx));
  });

  if (wfSimulateBtn) {
    let simInterval = null;
    wfSimulateBtn.addEventListener('click', () => {
      if (simInterval) clearInterval(simInterval);
      let currentIdx = 0;
      setWorkflowStep(0);
      wfSimulateBtn.disabled = true;
      wfSimulateBtn.textContent = 'Simulating Pipeline...';

      simInterval = setInterval(() => {
        currentIdx++;
        if (currentIdx < workflowData.length) {
          setWorkflowStep(currentIdx);
        } else {
          clearInterval(simInterval);
          wfSimulateBtn.disabled = false;
          wfSimulateBtn.textContent = 'Replay 4-Second Simulation';
        }
      }, 1000);
    });
  }

  // 3. Live Demo Simulator
  const scenarios = [
    {
      id: 'real-estate',
      name: 'Real Estate (Jaipur)',
      userMsg: "Hi, I'm interested in a 3BHK villa near Malviya Nagar or Jagatpura in Jaipur.",
      aiReply: "Hello Rohan! Great choice. We have 3 premium gated villas in Malviya Nagar matching that requirement with private terrace gardens. Are you looking to move in immediately or within 6 months, and what is your target budget?",
      userFollowup: "Looking within 3 months. Budget is around 1.4 to 1.8 Cr.",
      aiFinal: "Perfect. 2 of the villas fit that range exactly (1.45 Cr & 1.68 Cr). Would you prefer a WhatsApp brochure PDF now, or would you like to schedule a private site visit this Saturday at 11 AM?",
      extracted: {
        client: 'Rohan Sharma',
        phone: '+91 98290 XXXXX',
        need: '3BHK Villa, Malviya Nagar / Jagatpura',
        budget: '₹1.40 Cr – ₹1.80 Cr',
        timeline: 'Within 90 Days',
        intentScore: '96 / 100 (HOT LEAD)',
        assignedRep: 'Vikram Joshi (Senior Closer)',
        crmStage: 'Site Visit Scheduled'
      }
    },
    {
      id: 'dental-clinic',
      name: 'Specialty Clinic',
      userMsg: "Hi, my mother needs dental implants. Do you have consultations available this Saturday?",
      aiReply: "Hello Priya! Yes, Dr. Bansal has two open consultation slots this Saturday at 11:30 AM and 4:00 PM for full dental implant assessments (including 3D CBCT scan). Which timing works best for her?",
      userFollowup: "11:30 AM is perfect. Is the CBCT scan done in-house?",
      aiFinal: "Confirmed! We have reserved 11:30 AM Saturday for Priya & mother. Yes, our digital CBCT imaging is 100% in-house. We just sent your appointment pass and clinic directions to this WhatsApp chat.",
      extracted: {
        client: 'Priya Verma',
        phone: '+91 98112 XXXXX',
        need: 'Full Arch Dental Implants',
        budget: 'High Ticket (₹1,50,000+)',
        timeline: 'Immediate (This Weekend)',
        intentScore: '98 / 100 (READY TO BUY)',
        assignedRep: 'Dr. Bansal / Front Desk 1',
        crmStage: 'Consultation Confirmed'
      }
    },
    {
      id: 'b2b-services',
      name: 'B2B Automation',
      userMsg: "We spend $4k/month on Google Ads for solar installations but our sales team misses 40% of calls.",
      aiReply: "Hi Amit. That follow-up delay is costing you at least $15k/mo in recoverable revenue. AvijatLabs can connect your Google Ads directly to WhatsApp with sub-3-second AI qualification so leads get vetted before calling. What CRM do you currently use?",
      userFollowup: "We use HubSpot and Google Sheets.",
      aiFinal: "HubSpot is our native 1-click sync. We can have your inbound WhatsApp AI bot and instant lead router live in under 7 days. Let's run a 15-min workflow blueprint with our tech lead. Does tomorrow 3 PM work?",
      extracted: {
        client: 'Amit Saxena (SolarGrid Inc)',
        phone: '+91 99880 XXXXX',
        need: 'HubSpot + Google Ads + WhatsApp',
        budget: '$4,000 / month ad spend',
        timeline: 'Next 7 Days',
        intentScore: '94 / 100 (ENTERPRISE FIT)',
        assignedRep: 'Avijat Technical Lead',
        crmStage: 'Discovery Demo Booked'
      }
    }
  ];

  let currentScenarioIdx = 0;
  let currentStep = 1; // 1: initial reply, 2: completed reply

  const tabButtons = document.querySelectorAll('.scenario-tab-btn');
  const chatMessagesContainer = document.getElementById('chatMessages');
  const simReplyBtn = document.getElementById('simReplyBtn');
  const simReplyContainer = document.getElementById('simReplyContainer');
  const replayBtn = document.getElementById('replayBtn');

  // CRM fields
  const crmClient = document.getElementById('crmClient');
  const crmIntent = document.getElementById('crmIntent');
  const crmNeed = document.getElementById('crmNeed');
  const crmBudget = document.getElementById('crmBudget');
  const crmTimeline = document.getElementById('crmTimeline');
  const crmStage = document.getElementById('crmStage');
  const crmRep = document.getElementById('crmRep');

  function renderScenario(idx, step) {
    const sc = scenarios[idx];
    if (!sc) return;

    tabButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === idx);
    });

    if (crmClient) crmClient.textContent = sc.extracted.client;
    if (crmIntent) crmIntent.textContent = sc.extracted.intentScore;
    if (crmNeed) crmNeed.textContent = sc.extracted.need;
    if (crmBudget) crmBudget.textContent = sc.extracted.budget;
    if (crmTimeline) crmTimeline.textContent = sc.extracted.timeline;
    if (crmStage) crmStage.textContent = sc.extracted.crmStage;
    if (crmRep) crmRep.textContent = sc.extracted.assignedRep;

    if (chatMessagesContainer) {
      let html = `
        <div style="align-self: flex-end; max-width: 82%; background-color: #dcf8c6; padding: 10px 14px; border-radius: 12px 12px 0 12px; font-size: 14px; color: #111827;">
          <div>${sc.userMsg}</div>
          <div style="display: flex; justify-content: flex-end; align-items: center; gap: 4px; font-size: 10px; color: #6b7280; margin-top: 4px;">
            <span>10:42 AM</span>
            <span style="color: #3b82f6;">✓✓</span>
          </div>
        </div>
        <div style="align-self: flex-start; max-width: 85%; background-color: #ffffff; padding: 12px 16px; border-radius: 12px 12px 12px 0; font-size: 14px; color: #111827; border: 1px solid #e5e7eb;">
          <div style="font-size: 10px; font-family: var(--font-mono); color: #059669; font-weight: 700; margin-bottom: 4px;">
            ⚡ AI QUALIFIER (0.8s)
          </div>
          <div>${sc.aiReply}</div>
          <div style="display: flex; justify-content: flex-end; font-size: 10px; color: #9ca3af; margin-top: 4px;">
            10:42 AM
          </div>
        </div>
      `;

      if (step >= 2) {
        html += `
          <div style="align-self: flex-end; max-width: 82%; background-color: #dcf8c6; padding: 10px 14px; border-radius: 12px 12px 0 12px; font-size: 14px; color: #111827;">
            <div>${sc.userFollowup}</div>
            <div style="display: flex; justify-content: flex-end; align-items: center; gap: 4px; font-size: 10px; color: #6b7280; margin-top: 4px;">
              <span>10:43 AM</span>
              <span style="color: #3b82f6;">✓✓</span>
            </div>
          </div>
          <div style="align-self: flex-start; max-width: 85%; background-color: #ffffff; padding: 12px 16px; border-radius: 12px 12px 12px 0; font-size: 14px; color: #111827; border: 1px solid #e5e7eb;">
            <div style="font-size: 10px; font-family: var(--font-mono); color: #059669; font-weight: 700; margin-bottom: 4px;">
              ⚡ AI QUALIFIER (1.1s)
            </div>
            <div>${sc.aiFinal}</div>
            <div style="display: flex; justify-content: flex-end; font-size: 10px; color: #9ca3af; margin-top: 4px;">
              10:43 AM
            </div>
          </div>
        `;
      }

      chatMessagesContainer.innerHTML = html;
      chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }

    if (simReplyBtn) {
      if (step < 2) {
        simReplyContainer.style.display = 'block';
        if (replayBtn) replayBtn.style.display = 'none';
        simReplyBtn.innerHTML = `<span>SIMULATE CUSTOMER REPLY: "${sc.userFollowup.substring(0, 32)}..."</span>`;
      } else {
        simReplyContainer.style.display = 'none';
        if (replayBtn) replayBtn.style.display = 'flex';
      }
    }
  }

  tabButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      currentScenarioIdx = idx;
      currentStep = 1;
      renderScenario(currentScenarioIdx, currentStep);
    });
  });

  if (simReplyBtn) {
    simReplyBtn.addEventListener('click', () => {
      if (currentStep < 2) {
        simReplyBtn.disabled = true;
        simReplyBtn.textContent = 'AI is analyzing customer intent...';
        setTimeout(() => {
          currentStep = 2;
          renderScenario(currentScenarioIdx, currentStep);
          simReplyBtn.disabled = false;
        }, 700);
      }
    });
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      currentStep = 1;
      renderScenario(currentScenarioIdx, currentStep);
    });
  }

  // Initialize Simulator
  renderScenario(0, 1);

  // 4. Lost Revenue ROI Calculator
  const leadsSlider = document.getElementById('leadsSlider');
  const leadsValueDisplay = document.getElementById('leadsValueDisplay');
  const dealValueSlider = document.getElementById('dealValueSlider');
  const dealValueDisplay = document.getElementById('dealValueDisplay');
  const speedButtons = document.querySelectorAll('.speed-select-btn');

  const monthlyRevDisplay = document.getElementById('monthlyRevDisplay');
  const yearlyRevDisplay = document.getElementById('yearlyRevDisplay');
  const missedLeadsDisplay = document.getElementById('missedLeadsDisplay');
  const hoursSavedDisplay = document.getElementById('hoursSavedDisplay');

  let currentSpeed = '4hours';
  const decayMultipliers = {
    '15min': 0.15,
    '1hour': 0.32,
    '4hours': 0.54,
    '24hours': 0.78
  };

  function updateCalculator() {
    const leads = leadsSlider ? parseInt(leadsSlider.value, 10) : 150;
    const deal = dealValueSlider ? parseInt(dealValueSlider.value, 10) : 1200;

    if (leadsValueDisplay) leadsValueDisplay.textContent = `${leads} leads/mo`;
    if (dealValueDisplay) dealValueDisplay.textContent = `$${deal.toLocaleString()}`;

    const ratio = decayMultipliers[currentSpeed] || 0.54;
    const missedCount = Math.round(leads * ratio);
    const recovered = Math.round(missedCount * 0.12) || 1;
    const monthlyRev = recovered * deal;
    const yearlyRev = monthlyRev * 12;
    const hours = Math.round(leads * 0.45);

    if (monthlyRevDisplay) monthlyRevDisplay.textContent = `+$${monthlyRev.toLocaleString()}`;
    if (yearlyRevDisplay) yearlyRevDisplay.textContent = `Equivalent to +$${yearlyRev.toLocaleString()} added annually`;
    if (missedLeadsDisplay) missedLeadsDisplay.textContent = `${missedCount} Leads`;
    if (hoursSavedDisplay) hoursSavedDisplay.textContent = `${hours} Hours`;
  }

  if (leadsSlider) leadsSlider.addEventListener('input', updateCalculator);
  if (dealValueSlider) dealValueSlider.addEventListener('input', updateCalculator);

  speedButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      speedButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSpeed = btn.dataset.speed;
      updateCalculator();
    });
  });

  // Initial calculation
  updateCalculator();

  // 5. FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Close others
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            const icon = other.querySelector('.faq-icon');
            if (icon) icon.textContent = '+';
            const body = other.querySelector('.faq-body');
            if (body) body.style.display = 'none';
          }
        });

        // Toggle current
        if (isOpen) {
          item.classList.remove('open');
          const icon = item.querySelector('.faq-icon');
          if (icon) icon.textContent = '+';
          const body = item.querySelector('.faq-body');
          if (body) body.style.display = 'none';
        } else {
          item.classList.add('open');
          const icon = item.querySelector('.faq-icon');
          if (icon) icon.textContent = '−';
          const body = item.querySelector('.faq-body');
          if (body) body.style.display = 'block';
        }
      });
    }
  });

  // 6. Blank CTA link handling (as user requested: leave the link on cta blank)
  // Ensure that clicking blank CTAs does not cause jarring reload/jump
  const blankCtas = document.querySelectorAll('a[href=""], a[href="#"]');
  blankCtas.forEach(cta => {
    cta.addEventListener('click', (e) => {
      // If href is strictly empty, prevent page reload while preserving the empty attribute
      if (cta.getAttribute('href') === '' || cta.getAttribute('href') === '#') {
        e.preventDefault();
        console.log('CTA clicked (blank link as configured).');
      }
    });
  });

  // 7. Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
